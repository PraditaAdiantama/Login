import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/Auth';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
