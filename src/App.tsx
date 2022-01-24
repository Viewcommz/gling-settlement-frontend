import { Fragment } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import NavBar from "components/modules/navBar/navBar";
import { Pricing, Guide, Consult } from "pages/landing";
import Home from "pages/index";
import Signin from "pages/account/signin/signin";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <NavBar />,
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
          path: "/signin",
          element: <Signin />,
        },
        { path: "*", element: ()=>(<div>no matched!</div>) }
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
