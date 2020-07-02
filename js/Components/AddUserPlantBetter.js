import React, {useState, useEffect} from 'react';

import {UserPlantApiService} from "../services/UserPlantService";
import {UserPlantModel} from "../models/UserPlantModel";
import {DataPlantApiService} from "../services/DataPlantService";
import {PlantDetail} from "../models/PlantDetail";
import {UserPlantDetail} from "../models/UserPlantDetail";

const UserDataService = new UserPlantApiService();
const DataService = new DataPlantApiService();


export const AddUserPlant = () => {
    const [plant, setPlant] = useState(new UserPlantModel());
    const [allSpecies, setAllSpecies] = useState([]);


    const handleChangePlantData = e => {
        const {name, value} = e.target;
        setPlant(prev => ({
                ...prev,
                [name]: value
            })
        );
    };

    const getSpecies = () => {
        DataService.getAll(
            data => setAllSpecies(data),
            err => console.log(err)

        )
    };

    const sendForm = () => {
        UserDataService.addUserPlant(
            plant,
            data => setPlant(data),
            err => console.log(err)
        )

    };

    const handleSubmit = e => {
        sendForm();
        e.preventDefault();
    };

    useEffect(() => {
        getSpecies();
    }, []);

    /*  const formStyle = {
          display: "flex",
          flexDirection: "column"
      };*/

    if (plant.id) return <UserPlantDetail plant={plant}/>

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container push-spaces">
                    <h1 className="display-4">Add a plant to your garden</h1>
                    <p className="lead">Please fill in the form below. Thank you!</p>
                </div>
            </div>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>What do you call your plant?</label>
                        <input className="form-control" name={"name"} type={"text"} value={plant.name}
                               onChange={handleChangePlantData} placeholder="for example: Little Monster, Babushka, Just a Plant, That Green Thing"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Species: </label>
                            <select className="custom-select" name={"species"}>
                                {allSpecies.map(plant =>
                                    <option value={plant.name}>
                                        {plant.name}
                                    </option>)}
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit"> Submit!</button>
                </form>
            </fieldset>
        </>
    )
};

