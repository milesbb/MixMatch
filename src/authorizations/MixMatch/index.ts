export const refreshUserTokens = async () => {
    const body = {
        currentRefreshToken: localStorage.getItem("refreshToken")
    }

    const config = {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
    }

    const response = await fetch(process.env.REACT_APP_BE_URL + "/users/refreshTokens", config)

    const newTokens = await response.json()

    localStorage.setItem("accessToken", newTokens.accessToken)
    localStorage.setItem("refreshToken", newTokens.refresh_token)
}

export const logoutUser = async () => {
    const config = {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("accessToken")
        }),
    }

    const response = await fetch(process.env.REACT_APP_BE_URL + "/users/session", config)

    localStorage.clear()

    
}