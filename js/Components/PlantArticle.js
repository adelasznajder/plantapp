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


    if (item === "") return <h1 className="plantlist-title">Plant could not be found :(</h1>;
    return (
        <>
            <div className="article-header">
                <h1>{item.name}</h1>
                <h2>User-Name</h2>
            </div>
            <div className="article-info">
                <p className="article-text">Article text</p>
                <ul>
                    <li>Water: {item.water}</li>
                    <li>Light: {item.light.amount}</li>
                    <li>Window: {item.light.window}</li>
                    <li>Is it toxic? {item.toxicity}</li>
                </ul>
                <div className="img-container">
                    <img alt="monstera deliciosa"
                        src="https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
                </div>
            </div>

        </>
    )
}