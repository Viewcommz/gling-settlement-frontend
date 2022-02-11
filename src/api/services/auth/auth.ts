import API from "api/instance";

export interface AuthProps {
    email: string;
    password: string;
    sid: string;
}
function signIn(props: AuthProps) {
    return API.post("user/local/login", props);
}

const AuthService = {
    signIn,
};
export default AuthService;
