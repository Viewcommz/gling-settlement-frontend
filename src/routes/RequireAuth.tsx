import api from "api/api";
import useAsync from "hooks/useAsync";
import { Route, Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
interface RequireAuthProps {
  role: string | string[];
  component: JSX.Element;
}
interface IAuth {
  [key: string]: {
    [key: string]: string;
  }|string;
}
// path 별 필요한 auth
const pageAuth: IAuth = {
  "mypage/publisher/dashboard": "publisher",
  "settlement": {
    "daily": "st_inquiry_daily",
    "monthly": "st_inquiry_monthly",
    "mg": "st_inquiry_mg",
    "etc": "st_inquiry_etc",
  },
};

function ForbiddenPage() {
    return (
        <div>
            금지페이지
        </div>
    )
}
// 1. 토큰 유효성 검사
async function validateToken() {
  try {
    const apiParams = {
      pageAuth: "st_inquiry_daily",
      sid: "HxW1Lab4AB",
    };
    const res = await api.post("/api/user/token/select", apiParams);
    console.log("권한 res", res.data.data.hasAuth);
    return res;
  } catch (err) {
    console.log("권한 검사 에러", err);
    throw new Error('new Error')
    // login, publisher , user Store state 초기화
  }
}

function RequireAuth({ role, component }: RequireAuthProps) {
    const { pathname } = useLocation();
    const [path, query] = pathname.split("/").splice(1, 2);
    let requireAuth: string | { [key: string]: string; } | null = null;
    let authKey = Object.keys(pageAuth).find((k) => k === path);
    if (authKey) {
        if (pageAuth[authKey] === "object") {
            requireAuth =pageAuth[authKey];
        } else {
            requireAuth = pageAuth[authKey][query];
        }
      
        // typeof pageAuth[authKey] === "object"
        //   ? pageAuth[authKey]
        //   : pageAuth[authKey][query];
    }
    const state = useAsync(validateToken, [])[0];
    console.log("state", state);

    const navigate = useNavigate();
    const isLoggedIn = useSelector((state:RootState) => state.login.isLoggedIn);
    // let RenderCompo:JSX.Element = useRef(component);
    let RenderCompo =  useRef<JSX.Element | null>(component);
    useEffect(()=>{
        if (requireAuth && !isLoggedIn) {
            navigate("/");
        }
        if (requireAuth && !state.data) {
            RenderCompo.current = <ForbiddenPage/>;
        }
    },[])
    //  다른 방법 써야할듯.
    // st_inquiry_daily 만 막는게 아니라, settlement 페이지 자체를 막고 -> crud
  return (
    <div>
      {RenderCompo.current}
      {/* <Outlet/> */}
    </div>
    // <Route>
    //     {component}
    // </Route>
  );
}

export default RequireAuth;
