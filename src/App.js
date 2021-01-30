import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

// 1. Las clases se llaman className
// 2. TODAS las etiquetas tienen que cerrarse
// 3. Solo podemos devolver un elemento padre
const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        const usersResponse = await axios.get(
            'https://jsonplaceholder.typicode.com/users',
        );

        setUsers(usersResponse.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderUsers = () => {
        if (loading) {
            return <div>Cargando...</div>;
        }

        return users.map(user => {
            return <div>usuario</div>;
        });
    };

    return <div>{renderUsers()}</div>;
};

export default App;
