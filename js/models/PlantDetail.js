import React from 'react';

export const PlantDetail = ({plant}) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">{plant.id}</li>
            <li className="list-group-item-primary">{plant.name}</li>
            <li className="list-group-item">It should be watered every {plant.water} days</li>
            <li className="list-group-item">{plant.light}</li>
            <li className="list-group-item">{plant.window}</li>
            <li className="list-group-item">{plant.toxicity ? "It's safe for kids and pets!" : "It's not safe for kids and pets :("}</li>
        </ul>
    )
}