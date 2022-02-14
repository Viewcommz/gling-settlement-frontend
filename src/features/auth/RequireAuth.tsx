import api from "api/instance";
import useAsync from "hooks/useAsync";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SectionLayout from "components/templates/SectionLayout";

interface IAuth {
    [key: string]:
        | {
              [key: string]: string;
          }
        | any;
}
// path 별 필요한 auth
const pageAuth: IAuth = {
    "mypage/publisher/dashboard": "publisher",
    settlement: {
        daily: "st_inquiry_daily",
        monthly: "st_inquiry_monthly",
        mg: "st_inquiry_mg",
        etc: "st_inquiry_etc",
    },
};

function ForbiddenPage() {
    return <SectionLayout>접근 권한이 없습니다.</SectionLayout>;
}
// 1. 토큰 유효성 검사
async function validateToken() {
    try {
        const apiParams = {
            pageAuth: "st_inquiry_daily",
            sid: "HxW1Lab4AB",
        };
        const res = await api.post("user/token/select", apiParams);
        return res;
    } catch (err) {
        console.log("권한 검사 에러", err);
        throw new Error("new Error");
        // login, publisher , user Store state 초기화
    }
}

function RequireAuth() {
    const { pathname } = useLocation();
    const [path, query] = pathname.split("/").splice(1, 2);
    let requireAuth: string | { [key: string]: string } | null = null;
    //  다른 방법 써야할듯.
    let authKey = Object.keys(pageAuth).find((k) => k === path);
    if (authKey) {
        if (pageAuth[authKey] === "object") {
            requireAuth = pageAuth[authKey];
        } else {
            requireAuth = pageAuth[authKey][query];
        }
    }

    // 로그인 확인
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.signIn.isSignIn);
    useEffect(() => {
        if (requireAuth && !isLoggedIn) {
            navigate("/signin");
        }
    }, [requireAuth, isLoggedIn, navigate]);

    // 권한 확인
    const { loading, data, error } = useAsync(validateToken, [pathname]);
    if (loading) {
        return (
            <div>
                <SectionLayout>...loading</SectionLayout>
            </div>
        );
    }
    if (data) {
        if (requireAuth && !data.data.hasAuth) {
            return <ForbiddenPage />;
        }
    }
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default RequireAuth;
