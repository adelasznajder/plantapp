import React from 'react';

export class UserPlantApiService {
    API = "http://localhost:3000";

    addUserPlant = (plantToAdd, successCallback, errorCallback) => {
        fetch(`${this.API}/userplants`, {
            method: "POST",
            body: JSON.stringify(plantToAdd),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    getUserPlantId = (id, successCallback, errorCallback) => {
        fetch(`${this.API}/userplants/${id}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    getAll = (successCallback, errorCallback) => {
        fetch(`${this.API}/userplants`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }
}
