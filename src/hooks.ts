import { useContext } from 'react';
import { AuthContext, User } from './contexts/Auth';

export const useAuth = () => {
    return useContext(AuthContext);
};

export const useToken = () => {
    return localStorage.getItem('token');
};
