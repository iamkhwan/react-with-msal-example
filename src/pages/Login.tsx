import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { SignInButton } from "../components/SignInButton";
import logo from '../logo.svg';
import "../App.css";

export default function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const msUser = localStorage.getItem("msUser");
        const customToken = localStorage.getItem("customToken");
        if (msUser != null || customToken != null) {
            return navigate("/dashboard");
        }
    }, [navigate]);

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Login Page
                <SignInButton />
            </header>
        </>
    );
}