import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export default function Guard({ children }: PropsWithChildren) {
    const auth = useAuth();

    if (!auth.user) return <Navigate to="/login" />;

    return <>{children}</>;
}
