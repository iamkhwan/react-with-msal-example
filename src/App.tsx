import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/dashboard" element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
					/>
					<Route path="/" element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;