import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider, useDispatch } from "react-redux";
import store from "store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Introduce, Pricing, Guide, Consult } from "pages/landing";
import Home from "pages/index";
import Signin from "pages/account/signin/signin";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="guide" element={<Guide />} />
          <Route path="consult" element={<Consult />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
