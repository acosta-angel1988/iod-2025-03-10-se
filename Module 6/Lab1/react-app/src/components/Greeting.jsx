// Greeting.jsx
import React from 'react';

const Greeting = ({ name, children }) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <div>{children}</div>
        </div>
    );
};

export default Greeting;