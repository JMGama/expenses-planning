import React, { useState } from "react";

import { useUser } from '../../context/user-context'

import { Redirect } from "react-router-dom";

export const Login = () => {
	const userContext = useUser()

	const handleSubmit = (e) => {
		e.preventDefault()
		let data = {
			email: e.target.email.value,
			password: e.target.password.value,
			remember: e.target.remember.checked
		}
		fetch(
			`http://localhost:3001/api/v1/auth/login`,
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
				res.json().then(response => {
					userContext.setUser(response.user)
					userContext.setToken(response.token)
					// Save token in the local storage
					localStorage.setItem('authToken', response.token)
				})
			}
		})
	}



	return (
		<div style={{ "justifyContent": "center", "alignItems": "center", "minHeight": "100vh", "display": "flex" }}>
			<div className="card">
				<div className="card-body">
					<form className="container" onSubmit={handleSubmit}>
						<h3 className="text-center card-title">Sign In</h3>

						<div className="form-group">
							<label className="font-weight-bold">Email address</label>
							<input name="email" type="email" className="form-control" placeholder="Enter email" />
						</div>

						<div className="form-group">
							<label className="font-weight-bold">Password <u><a href="#" className="font-weight-lighter font-italic">Forgot?</a></u>
							</label>
							<input name="password" type="password" className="form-control" placeholder="Enter password" />
						</div>

						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input name="remember" type="checkbox" className="custom-control-input" id="customCheck1" />
								<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
							</div>
						</div>

						<button type="submit" className="btn btn-primary btn-block">Submit</button>
						<p className="forgot-password text-right">
							Not a member? <u><a className="font-weight-lighter font-italic" href="#">Sign up now</a></u>
						</p>
					</form>
				</div>
			</div>
		</div>
	);



};
