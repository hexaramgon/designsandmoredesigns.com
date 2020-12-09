import logo from '../imgs_svgs/logo.svg';
import '../App.css';
import '../css/form.css';

import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {

	return (
        <div className="center-container">
            <div className="form-container-login">
                <form className="form" action={"/Main"}>
                    <img src={logo} alt=""/>
                    <div className="form-inputs">
                        <input type="text" name="username" className="form-input"
                        placeholder="Username or Email"/>
                    </div>
                    <div className="form-inputs">
                        <input type="password" name="password" className="form-input"
                        placeholder="Password"/>
                    </div>
                    <button className="form-input-btn" type="submit" href="/Main">Log in</button>
                    <span className="form-input-other">
                        Don't have an account?<br/>
                        Register <Link to="/Register">here</Link>.
                    </span>
                </form>
            </div>
            <div className = "blue-circ"></div>
            <div className = "blue-circ-1"></div>
            <div className = "blue-circ-2"></div>
            <div className = "blue-circ-3"></div>
            <div className = "blue-circ-4"></div>
            <div className = "blue-circ-5"></div>


        </div>
	);
};

export default SignIn;