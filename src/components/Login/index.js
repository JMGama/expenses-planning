import React from "react";

export const Login = () => {
	return (
		<div style={{ "justify-content": "center", "align-items": "center", "min-height": "100vh", "display": "flex" }}>
			<div className="card">
				<div className="card-body">
					<form className="container">
						<h3 className="text-center card-title">Sign In</h3>

						<div className="form-group">
							<label className="font-weight-bold">Email address</label>
							<input type="email" className="form-control" placeholder="Enter email" />
						</div>

						<div className="form-group">
							<label className="font-weight-bold">Password <u><a href="#" className="font-weight-lighter font-italic">Forgot?</a></u>
							</label>
							<input type="password" className="form-control" placeholder="Enter password" />
						</div>

						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customCheck1" />
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
