import { useSelector } from "react-redux";
import { RootState } from "app/store";

import Home from "components/templates/home/Home";
import Landing from "components/templates/home/Landing";
function Main() {
    const isLoggedIn = useSelector((state: RootState) => state.signIn.isSignIn);
    return <div>{isLoggedIn ? <Home /> : <Landing />}</div>;
}

export default Main;
