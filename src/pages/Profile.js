import React from 'react';
import '../css/profile.css'
import Navigbar from '../components/navbar.js'
import profilepic from '../imgs_svgs/profile.jpg'
import Button from '../components/button'


const Profile = () => {
	return (
		<div >
			<Navigbar  />
			<div className = "bodybox">
			<div className = "profilecircle"></div>
			<img src = {profilepic} className = "pic" id = "marginer" alt="map" /> 
			<h3>Oskibear</h3>
				<div className = "mainbox">
					<h6> Member since November 4th, 2020 </h6>
					<h3 className = "boxtxt"> Top Foods: Tacos, Pizza, Chinese, Chicken Nuggets</h3>
					<h3 className = "boxtxt"> Top Resturants: Denny's, Artichokes, Gypsies</h3>
					<h3 className = "boxtxt">Allergies: Nut</h3>
					<h3 className = "boxtxt">Built: Different</h3>
					<h3 className = "boxtxt">Prefers: Fish</h3>
				</div>
				<Button text= "Edit Preferences" type={"override2"} className = "move" 
				/>			
				</div>
		</div>
	);
};

export default Profile;