const API_URL = import.meta.env.VITE_API_URL;


export const loginForToken = async ({ username, password }: { username: string; password: string }) => {
    const res = await fetch(`${API_URL}/token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        })
    })

    const data = await res.json();

    return data;
}

export const refreshWithToken = async () => {
    const res = await fetch(`${API_URL}/token/refresh/`, {
        method: "POST",
        body: JSON.stringify({
            refresh: "",
        })
    })

    const data = await res.json();

    return data;
}