import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import {PlantList} from "./Components/PlantList";



const App = () => <PlantList />;

ReactDOM.render(<App />, document.getElementById("app"));