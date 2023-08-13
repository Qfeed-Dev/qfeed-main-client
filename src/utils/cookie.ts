import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
    return cookies.set("accessToken", accessToken, {
        path: "/"
    });
};

export const setUser = (userId: number) => {
    return cookies.set("userId", userId, {
        path: "/"
    });
};

export const getCookie = () => {
    return cookies.get("accessToken");
};

export const deleteCookie = () => {
    return cookies.remove("accessToken", {
        path: "/"
    });
};
