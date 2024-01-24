// MyContext.js
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const value = { future: 'some value' };
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};
