export class UserPlantApiService {
    API_URL = "http://localhost:3000";

    addUserPlant = (plantToAdd, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/userplants`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    getUserPlantId = (id, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/userplants/${id}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    getAll = (successCallback, errorCallback) => {
        fetch(`${this.API_URL}/userplants`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }
}
