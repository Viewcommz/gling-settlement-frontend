import api from "api/api";
import {
    Route,
    Navigate,
    useLocation,
    Outlet
} from "react-router-dom";

interface RequireAuthProps {
    role: string | string[];
    component: JSX.Element;
}
interface IAuth {
    [key: string]: {
        [key: string]: string
    }
}
// path 별 필요한 auth
const pageAuth: IAuth = {
    "settlement": {
        "daily": "st_inquiry_daily",
        "monthly": "st_inquiry_monthly",
        "mg": "st_inquiry_mg",
        "etc": "st_inquiry_etc"
    }
}

// 1. 토큰 유효성 검사
async function validateToken() {
    try {
        const apiParams = {
            pageAuth: "st_inquiry_daily",
            sid: "HxW1Lab4AB",
        };
        const res = await api.post('/api/user/token/select', apiParams);
        console.log("권한 res", res.data)
        return res;
    } catch (err) {
        console.log("권한 검사 에러", err);
        // login, publisher , user Store state 초기화
    }
}
function RequireAuth({ role, component }: RequireAuthProps) {
    const { pathname } = useLocation();
    let [path, query] = pathname.split("/").splice(1, 2);
    console.log(" location path ", pathname, path, query);
    let requireAuth = null;
    let authKey = Object.keys(pageAuth).find(k => k === path);
    if (authKey) {
        requireAuth = typeof pageAuth[authKey] === "object" ?
                        pageAuth[authKey][query]:
                        pageAuth[authKey];
    }
    console.log("authKey", authKey)
    console.log("requireAtuh", requireAuth)
    const res = validateToken();
    // requireAuth 가 undefined여도 에러없으면 success. 권한이 있으면 hasAuth : 1
    // 2. 로그인검사
    // 3. 권한 검사
    if (requireAuth && !res.status) {
        return context.error({
          statusCode: 403,
          message:
            "접속하신 페이지의 이용권한이 없습니다.\n관리자에게 문의해주세요.",
        });
      }

    return (
        <div>
            {component}
            {/* <Outlet/> */}
        </div>
        // <Route>
        //     {component}
        // </Route>
    )
}

export default RequireAuth;