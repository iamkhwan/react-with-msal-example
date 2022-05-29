import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../azure/authConfig";
import authenticationAPI from "../api/authenticationAPI";
import Button from '@mui/material/Button';

export const SignInButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleLogin = (loginType: string) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest)
                .then(async (result) => {
                    if (result && result.accessToken && result.account) {
                        localStorage.setItem("msUser", JSON.stringify(result.account));
                        //Call our API to do something
                        await authenticationAPI.authenticateFromBackend();
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    navigate("/login");
                });
        }
    }

    return (
        <>
            <Button variant="contained" onClick={() => handleLogin("popup")}>
                Sign in using Popup
            </Button>
        </>
    )
};