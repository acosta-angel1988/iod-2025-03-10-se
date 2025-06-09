
import React from "react";

const SingleCat = ({ name, weight, origin }) => {
    return (
        <div className="cat-card">
            <h2>{name}</h2>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Origin:</strong> {origin}</p>
        </div>
    );
};

export default SingleCat;