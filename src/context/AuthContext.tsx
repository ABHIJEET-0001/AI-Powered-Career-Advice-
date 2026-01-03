import React, { createContext, useState, useEffect, useContext } from 'react';
import type { User } from '../types';

interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password: string) => boolean;
    register: (name: string, email: string, password: string) => boolean;
    logout: () => void;
    updateUser: (updatedUser: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (email: string, password: string): boolean => {
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            // Ensure enrolledCourses exists for legacy users
            if (!user.enrolledCourses) {
                user.enrolledCourses = [];
            }
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    };

    const register = (name: string, email: string, password: string): boolean => {
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some((u) => u.email === email)) {
            return false; // User exists
        }

        const newUser: User = {
            id: Date.now(),
            name,
            email,
            password,
            profile: null,
            enrolledCourses: [],
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setCurrentUser(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        return true;
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    const updateUser = (updatedUser: User) => {
        setCurrentUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        // Also update in the users array
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex((u) => u.id === updatedUser.id);
        if (userIndex !== -1) {
            users[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(users));
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
