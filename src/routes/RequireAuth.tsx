import api from "api/api";
import useAsync from "hooks/useAsync";
import { Route, Navigate, useLocation, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import SectionLayout from "layout/SectionLayout";
interface RequireAuthProps {
  role: string | string[];
  component: JSX.Element;
}
interface IAuth {
  [key: string]: {
    [key: string]: string;
  } | any;
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
    <SectionLayout>
      접근 권한이 없습니다.
    </SectionLayout>
  )
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
    throw new Error('new Error')
    // login, publisher , user Store state 초기화
  }
}

function RequireAuth({ role, component }: RequireAuthProps) {
  const { pathname } = useLocation();
  const [path, query] = pathname.split("/").splice(1, 2);
  let requireAuth: string | { [key: string]: string; } | null = null;
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
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  useEffect(() => {
    if (requireAuth && !isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn])

  // 권한 확인
  const { loading, data, error } = useAsync(validateToken, [pathname]);
  let RenderCompo = useRef<JSX.Element | null>(component);
  if (data) {
    if (requireAuth && !data.data.hasAuth) {
      RenderCompo.current = <ForbiddenPage />;
    } else {
      RenderCompo.current = component
    }
  }

  return (
    <div>
      {RenderCompo.current}
    </div>
  );
}

export default RequireAuth;
