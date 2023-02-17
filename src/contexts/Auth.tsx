import React from 'react';
import { createContext, useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useToken } from '../hooks';

export interface User {
    id: number;
    username: string;
    password: string;
}
interface AuthState {
    user?: User;
    loading: boolean;
    load: () => void;
    unload: () => void;
}

export const AuthContext = createContext<AuthState>({
    loading: true,
    load: () => {},
    unload: () => {},
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);

    const load = () => {
        // ? /auth/info
        setTimeout(() => {
            const token = useToken();
            try {
                if (!token) {
                    return setUser(undefined);
                }

                setUser({
                    id: 1,
                    username: 'me',
                    password: '1234',
                });
            } finally {
                setLoading(false);
            }

            if (token) {
            }
        }, 2000);
    };

    const unload = () => {};

    useEffect(() => {
        load();
    }, []);

    if (loading) return <Loading />;

    return <AuthContext.Provider value={{ user, loading, load, unload }}>{children}</AuthContext.Provider>;
}
