import React from 'react';

export class DataPlantApiService {
     API = "http://localhost:3000";

    addUserPlant = (plantToAdd, successCallback, errorCallback) => {
        fetch(`${this.API}/species`, {
            method: "POST",
            body: JSON.stringify(plantToAdd),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    };

    getPlantId = (id, successCallback, errorCallback) => {
        fetch(`${this.API}/species/${id}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    };

    getAll = (successCallback, errorCallback) => {
        fetch(`${this.API}/species`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }
}
