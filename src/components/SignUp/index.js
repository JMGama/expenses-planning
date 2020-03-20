import React, { useState } from "react";

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export const SignUp = (props) => {
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()
    const [birthday, setBirthday] = useState()

    // const validatePassword = password =>{

    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            firstName,
            lastName,
            email,
            password,
            birthday,
            country,
            region
        }
        fetch(
            `http://localhost:3001/api/v1/auth/signup`,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then(res => {
            if (res.status === 200) {
                res.json().then(userData => {
                    props.history.push('/login')
                })
            }
        })
    }

    return (
        <div style={{ "justify-content": "center", "align-items": "center", "min-height": "100vh", "display": "flex" }}>
            <div className="card">
                <div className="card-body">
                    <form className="container" onSubmit={handleSubmit}>
                        <h3 className="text-center card-title">Sign Up</h3>


                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label font-weight-bold>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" required onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label font-weight-bold>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" required onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label font-weight-bold>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" required onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label font-weight-bold>Repeat password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" required onChange={e => setRePassword(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Birthday</label>
                            <input type="date" className="form-control" placeholder="" required onChange={e => setBirthday(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label>Country</label>
                                    <CountryDropdown required className="form-control" value={country} onChange={(val) => setCountry(val)} />
                                </div>
                                <div className="col">
                                    <label>Region</label>
                                    <RegionDropdown required className="form-control" country={country} value={region} onChange={(val) => setRegion(val)} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="login">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div >
    );
};
