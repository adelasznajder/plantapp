import React from 'react';


export const UserPlantDetail = ({plant}) => {
    const style = {
        height: "300px",
        width: "500px" ,
        display: "block"
    }
    return (
        <div className="card mb-3">
            <h3 className="card-header">{plant.name}</h3>
            <img style={style} src="https://i.picsum.photos/id/530/500/300.jpg?hmac=j--jJHATejOgK-I27Ud6d8nsWMTOfLETVR3wh8ZuM40" alt="Card image"/>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">ID: {plant.id}</li>
            <li className="list-group-item-primary">{plant.species}</li>
        </ul>
        </div>
    )
}