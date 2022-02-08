import { Fragment } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import NavBar from "components/modules/navBar/navBar";
import { Pricing, Guide, Consult } from "pages/landing";
import Home from "pages/index";
import Signin from "pages/account/signin/signin";
import "./App.css";
import SalesInquiry from "pages/settlement";
import RequireAuth from "routes/RequireAuth";
import Error from "pages/Error";
import Dashboard from "pages/dashboard";
import Ebook from "pages/ebook";
import Portfolio from "pages/portfolio";
import Support from "pages/support";

function Test() {
  return (
    <div>
      테스트 컴포
    </div>
  )
}
function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <RequireAuth role={"role test"} component={<NavBar />}></RequireAuth>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/guide",
          element: <Guide />,
        },
        {
          path: "/consult",
          element: <Consult />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/settlement/daily",
          element: <SalesInquiry />,
          children: [{
            path:"/settlement/daily",
            element: <Test />,
          }]
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/ebook",
          element: <Ebook />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        { path: "*", element:  <Error /> }
      ]
    }
  ];
  let element = useRoutes(routes);
  
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Fragment>
  );
}

export default App;



// export const admin = [
//   { path: "/createUser", name: "Create User", component: CreateUser},
//   { path: "/editUser", name: "Edit User", component: EditUser},
//   { path: "/createdashboard", name: "Create Dashboard", component: CreateDashboard },
//   { path: "/editashboard", name: "Edit Dashboard", component: EditDashboard },
//   { path: "/createcalendar", name: "Create Calendar", component: CreateCalendar },
//   { path: "/editcalendar", name: "list of factories", component: EditCalendar },
//   { path: "/dashboard", name: "Dashboard", component: Dashboard }
// ]

// export const engineer = [
//   { path: "/createdashboard", name: "Create Dashboard", component: CreateDashboard },
//   { path: "/editashboard", name: "Edit Dashboard", component: EditDashboard },
//   { path: "/dashboard", name: "Dashboard", component: Dashboard },
//   { path: "/notauthorized", name: "Not Authorized", component: Notauthorized }
// ]