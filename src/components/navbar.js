import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../imgs_svgs/logo.svg';

import settingicon from '../imgs_svgs/settingicon.svg';
import usericon from '../imgs_svgs/usericon.svg';




import '../css/navbar.css'

class Navigbar extends React.Component {

	text(text) {}
	
	render() {return (
		<div>
			
		<Navbar className="colorcorrect" id = "over">
		<Nav.Link href='/Main' className="linktag">
			<img src={logo} className="colorcorrect logo" alt="logo" />
		</Nav.Link>
			<form className="form-inline colorcorrect">
				<input className="form-control mr-sm-2" id="overyde" type="search" placeholder="Have something in mind?" aria-label="Search" />
			</form>
			<div className = "colorcorrect rightpart">	
				<Nav.Link href='/Profile' className="linktag">	
					<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-badge-fill colorcorrect" c fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
					</svg>
				</Nav.Link>
				<Nav.Link href='/Preferences' className="linktag">
					<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots colorcorrect" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
					</svg>
				</Nav.Link>
			</div>
		</Navbar>
		</div>
		);
	};
}

export default Navigbar;



// import React from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import logo from '../imgs_svgs/logo.svg';

// import settingicon from '../imgs_svgs/settingicon.svg';
// import userprof from '../imgs_svgs/usericon.svg';




// import '../css/navbar.css'

// class Navigbar extends React.Component {

// 	text(text) {}
	
// 	render() {return (
// 		<div>
			
// 		<Navbar className="navbar navbar-dark shawdow colorcorrect" id = "over">
// 		<img src={logo} className="colorcorrect logo" alt="logo" />
// 			<form class="form-inline colorcorrect">
// 				<input class="form-control mr-sm-2" id="overyde" type="search" placeholder="Have something in mind?" aria-label="Search" />
// 			</form>
// 			<div className = "colorcorrect rightpart">	
// 				<img src={userprof} alt="logo" />
// 				<img src={settingicon} alt="logo" />

// 			</div>

// 		</Navbar>
// 		</div>
// 		);
// 	};
// }

// export default Navigbar;