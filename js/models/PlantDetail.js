import React from 'react';

export const PlantDetail = ({plant}) => {
    return (
        <ul>
            <li>{plant.id}</li>
            <li>{plant.name}</li>
            <li>It should be watered every {plant.water} days</li>
            <li>{plant.light.amount}</li>
            <li>{plant.light.window}</li>
            <li>{plant.toxicity ? "It's safe for kids and pets!" : "It's not safe for kids and pets :("}</li>
        </ul>
    )
}