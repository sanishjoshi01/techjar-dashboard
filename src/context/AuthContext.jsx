import React from 'react';

const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login =(userData) => {
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
    }

    return (
        <AuthContext.Provider value={{ user,login }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;

