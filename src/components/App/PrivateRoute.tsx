import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const user = localStorage.getItem('user');
	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	} else {
		return children;
	}
};

export default PrivateRoute;
