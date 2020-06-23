import React, { useState, useEffect } from "react";


export const PlantList = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://api.ipify.org")
            .then(response => response.text())
            .then(ip => {
                setData(ip);
            });
    });

    if (data === false) {
        return <h1>Ustalam adres IP...</h1>;
    } else {
        return <h1>Twoje IP: {data}</h1>;
    }
};