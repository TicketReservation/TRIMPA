import React, { useState, useEffect } from 'react';
import style from "../css/admindashboard.css";
import FlightDashboard from './flightsdashboard';
import StaticsDashboard from './staticsdashbord';
import axios from 'axios';
import UserDashboard from './userdashbord';
import Adduser from './adduserdashbord';
import AddFlight from './addflight';

function Admin() {
    const [view, setView] = useState("UserDashboard");
    const [data, setdata] = useState([]);
    const [flight, setflight] = useState([]);
    const [updater, setupdater] = useState(true);

    const changeView = (view) => {
        setView(view);
    }

    const fetch = () => {
        axios.get("http://localhost:3000/api/user/")
            .then((response) => setdata(response.data))
            .catch((err) => console.log(err));
    }

    const fetchflight = () => {
        axios.get("http://localhost:3000/api/flight/")
            .then((response) => setflight(response.data))
            .catch((err) => console.log(err));
    }

    const add = (body) => {
        axios.post("http://localhost:3000/api/user", body)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    }

    const addflight = (body) => {
        axios.post("http://localhost:3000/api/flight/newFlight", body)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
    }

    const deletee = (id) => {
        axios.delete(`http://localhost:3000/api/user/del/${id}`)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
        setupdater(!updater);
    }

    const deleteflight = (id) => {
        axios.delete(`http://localhost:3000/api/flight/${id}`)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));
        setupdater(!updater);
    }

    useEffect(() => {
        fetch();
        fetchflight();
    }, [updater]);

    const renderView = () => {
        if (view === "FlightDashboard") {
            return <FlightDashboard changeView={changeView} flight={flight} deleteflight={deleteflight} addflight={addflight} />;
        } else if (view === "StaticsDashboard") {
            return <StaticsDashboard  data={data}  flight={flight}  changeView={changeView} />;
        } else if (view === "UserDashboard") {
            return <UserDashboard changeView={changeView} data={data} deletee={deletee} add={add} />;
        } else if (view === "add") {
            return <Adduser changeView={changeView} fetch={fetch} data={data} deletee={deletee} add={add} setupdater={setupdater} />;
        } else if (view === "addflight") {
            return <AddFlight changeView={changeView} flight={flight} deleteflight={deleteflight} addflight={addflight} />;
        }
    }

    return (
        <div>{renderView()}</div>
    );
}

export default Admin;
