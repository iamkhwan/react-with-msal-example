import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any) {
    const msUser = localStorage.getItem("msUser");
    const customToken = localStorage.getItem("customToken");

    if (msUser === null || customToken === null) {
        return <Navigate to="/login" />;
    }

    return children;
}