export interface User {
    isPublisher: boolean;
    sociallogin_provider: string | null;
    user_created_at: string;
    user_email: string;
    user_nickname: string;
    user_pic_path: string;
    user_status: string;
}