
import React from 'react';
import {useSpring, animated} from 'react-spring'
import boba from '../imgs_svgs/boba.jpg'
import burger from '../imgs_svgs/hamburger.jpg'
import pizza from '../imgs_svgs/pizza.jpg'
import mexican from '../imgs_svgs/mexican.jpg'





const Foodcircle = ({user, foodnum}) => {

  const foods = ['Boba Tea', 'Pizza', 'Burgers', 'Mexican'];
  const foodpics = [boba, pizza, burger, mexican]

  console.log(foodnum)


  const intro = useSpring({
    delay: 1000,
    opacity: 1,
    from: { opacity: 0 },
  })

  const other = useSpring({
    delay: 2000,
    opacity: 1,
    from: { opacity: 0 },
  })

      return (
        <div className = "vert">
          <h5 className = "intro" > Hello {user} </h5>
          <h5 className = "intro" > Why don't you try... </h5>
      <animated.h1 style={intro} className = "foodtxt"> {foods[foodnum]}</animated.h1>
          <animated.div style = {other} className = "bluecirc parenthree"> </animated.div>    
          <animated.img style = {other} src={foodpics[foodnum]} className="pic childthree" alt="logo" />  
        </div>
      );
  }



  export default Foodcircle;