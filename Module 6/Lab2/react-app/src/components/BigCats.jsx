import React from "react";
import SingleCat from "./SingleCat";


const bigCats =[
    {id: 1, name: "Lion", weight: "100kg", origin: "Africa"},
    {id: 2, name: "Tiger", weight: "200kg", origin: "Asia"},
    {id: 3, name: "Jaguar", wight: "300kg", origin: "SA"},

]



const BigCats = () => {
    return (
        <div>
            <h1>Big Cats List</h1>
            {bigCats.map(cat => (
                <SingleCat
                    key={cat.id}
                    name={cat.name}
                    weight={cat.weight}
                    origin={cat.origin}
                />
            ))}
        </div>
    );
};

export default BigCats;