import React, {useState, useEffect} from "react";


export const PlantArticle = ({id}) => {
    const [item, changeItem] = useState("");
    const API = "http://localhost:3000";

    const getPlants = () => {
        fetch(`${API}/species/${id}`)
            .then(resp => resp.json())
            .then(data => changeItem(data))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getPlants();
    }, []);


    if (item === "") return (
        <div className="alert alert-dismissible alert-secondary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>We're sorry!</strong> It looks like you don't have any plants yet!
        </div>);
    return (
        <>
            <div className="card border-secondary mb-3">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                    <img className="img-fluid" src="https://i.picsum.photos/id/530/500/300.jpg?hmac=j--jJHATejOgK-I27Ud6d8nsWMTOfLETVR3wh8ZuM40" alt="Card image"/>
                    <h4 className="card-title">User plant name</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <ul>
                        <li>Water: {item.water}</li>
                        <li>Light: {item.light}</li>
                        <li>Window: {item.window}</li>
                        <li>Is it toxic? {item.toxicity}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}