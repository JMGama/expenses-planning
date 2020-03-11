import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export const SignUp = () => {
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()


    return (
        <div style={{ "justify-content": "center", "align-items": "center", "min-height": "100vh", "display": "flex" }}>
            <div className="card">
                <div className="card-body">
                    <form className="container">
                        <h3 className="text-center card-title">Sign Up</h3>


                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label font-weight-bold>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" required />
                                </div>
                                <div className="col">
                                    <label font-weight-bold>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" required />
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label font-weight-bold>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" required />
                                </div>
                                <div className="col">
                                    <label font-weight-bold>Repeat password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Birthday</label>
                            <input type="date" className="form-control" placeholder="" required />
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
