
const AuthenticationAPI = {
    authenticateFromBackend: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                //Return your custom jwt token from your API.
                localStorage.setItem("customToken", "your-custom-token");
                return resolve(true);
            }, 2000);
        }) 
    }
}

export default AuthenticationAPI;