import { SignOutButton } from "../components/SignOutButton";
import logo from '../logo.svg';
import "../App.css";

export default function DashboardPage() {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Dashboard Page
                <SignOutButton />
            </header>
        </>
    );
}