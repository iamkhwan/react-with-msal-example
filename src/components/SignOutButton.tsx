import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const SignOutButton = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleLogout = (logoutType: string) => {
        if (logoutType === "popup") {
            var msUser = localStorage.getItem("msUser");
            if (msUser) {
                instance.logoutPopup({
                    postLogoutRedirectUri: "/",
                })
                .then(() => {
                    localStorage.removeItem("msUser");
                    localStorage.removeItem("customToken");
                    sessionStorage.clear();
                    navigate("/login");
                })
                .catch((e) => {
                    console.error(e);
                });
            }
            else
                console.error("Couldn't find the account.")
        }
    }

    return (
        <>
            <Button variant="contained" onClick={() => handleLogout("popup")}>
                Logout using Popup
            </Button>
        </>
    )
};