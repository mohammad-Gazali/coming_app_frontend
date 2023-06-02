export interface Navlink {
    name: string;
    href: string;
    permission: string | null;
}

export interface AuthTokens {
    refresh: string;
    access: string;
}

export interface UserData {
    token_type: "refresh" | "access";
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
    username: string;
}

export interface ToastData {
    message: string;
    type: "error" | "success";
    open: boolean;
}