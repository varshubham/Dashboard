import React from 'react'
import { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import { Link } from "react-router-dom"



const Navbar = () => {
    const a = useContext(DataContext)
    useEffect(() => {
        fetch('http://localhost:5000/api/data/distinct/topic').then(response => response.json()).then(data => a.setTopic(data))
        fetch('http://localhost:5000/api/data/distinct/region').then(response => response.json()).then(data => a.setRegion(data))
        fetch('http://localhost:5000/api/data/distinct/sector').then(response => response.json()).then(data => a.setSector(data))
    }, [])

    const clickevent = (e) => {
        a.setState(e);        
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand " style={{ marginLeft: "40px" }} to="/">Dashboard</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link >
                            </li>
                            <li className="nav-item dropdown" >
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Topic
                                </Link >
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ height: "350px", overflow: "auto" }}>

                                    {a.topic && a.topic.map((data) => {
                                        return <li key={data} role="button"><Link className="dropdown-item" to={`/topic/${data}`} onClick={() => { clickevent(data) }} >{data}</Link ></li>
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown" >
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Region
                                </Link >
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ height: "350px", overflow: "auto" }}>

                                    {a.region && a.region.map((data) => {
                                        return <li key={data} role="button"><Link className="dropdown-item" to={`/region/${data}`} onClick={() => { clickevent(data) }} >{data}</Link ></li>
                                    })}
                                </ul>
                            </li>
                            <li className="nav-item dropdown" >
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sector
                                </Link >
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ height: "350px", overflow: "auto" }}>

                                    {a.sector && a.sector.map((data) => {
                                        return <li key={data} role="button"><Link className="dropdown-item" to={`/sector/${data}`} onClick={() => { clickevent(data) }} >{data}</Link ></li>
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
