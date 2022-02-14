export default interface IAuthUser {
    auth: boolean;
    user: {
        isPublisher: boolean;
        sociallogin_provider: string;
        user_created_at: string;
        use_email: string;
        user_nickname: string;
        user_pic_path: string;
        user_status: string;
    };
}
