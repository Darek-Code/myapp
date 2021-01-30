import React, { useState } from 'react';

import './count.css';

// Los props son SOLO LECTURA
const Count = props => {
    // La parte izquierda es el estado
    // La parte derecha es el modificador
    // El estado se modifica solo con el modificador de estado
    const [count, setCount] = useState(0);

    const showCount = () => {
        // Los cambios de estado son ASINCRONOS
        setCount(count + 5);
    };

    return (
        <div className="count">
            <div>{props.name}</div>
            <div>{props.address}</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <hr />
            <button onClick={() => showCount()}>Show alert</button>
        </div>
    );
};

export default Count;
