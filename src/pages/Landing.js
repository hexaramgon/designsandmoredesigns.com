import logo from '../imgs_svgs/logo.svg';
import '../css/landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/button'
import Dot from '../components/dot'

import React from 'react';
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import Slideshow from '../components/slideshow';


const Landing = () => {

const maintext = useSpring({
    delay: 500,
    opacity: 1,
    from: { opacity: 0 },
  })

  const buttonone = useSpring({
    delay: 1500,
    opacity: 1,
    from: { opacity: 0 },
  })

  const buttontwo = useSpring({
    delay: 1500,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <div className="grid-container">
      
      <section className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </section>

      <section className="button">
      <Link to="/SignIn"><Button text= "Sign In" type={"override"} /></Link>
      <Link to="/Register"><Button text= "Register" type={"override"}/></Link>
      </section>

      <section className="image">
       <Slideshow className = "parent" id = "rest" />
        <div  className = "child" id = "grey"></div>
      </section>

      <section className="mainn">
              <animated.h1 style={maintext} className = "maintxt">Forget about deciding where to eat, let us handle it.</animated.h1>
      </section>

      <section className="bowl">
          <Dot />
          <span className="dot"></span>
      </section>

    </div>
  );
}

export default Landing;