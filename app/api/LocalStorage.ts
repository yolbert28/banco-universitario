export const getJWT = () =>{
    if (typeof window !== "undefined"){
        return localStorage.getItem("jwt");
    }
    return null;
};

export const setJWT = (jwt: string) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", jwt);
    }
};

export const removeJWT = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
    }
};