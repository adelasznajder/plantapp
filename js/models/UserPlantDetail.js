import React from 'react';

export const UserPlantDetail = ({plant}) => {
    return (<ul>
            <li>{plant.id}</li>
            <li>{plant.name}</li>
            <li>{plant.species}</li>
        </ul>
    )
}