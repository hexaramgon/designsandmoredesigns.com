import React from 'react';
import '../App.css';

import { useSpring, animated } from 'react-spring'
import Insidecard from './insidecard';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Card( {typer, foodnum} ) {

  // const [type, set] = useState("");



  let clicked = false;
  let test2 = null

  

  const other = useSpring({
    delay: 3200,
    opacity: 1,
    from: { opacity: 0 },
  })

  const test = () => {
    if (clicked) {
      width()
      clicked = false;
      console.log('passed')
    }
    else {
      clicked = true;
      console.log('pasfffsed')
    }
  }

  const width = () => {
    if (clicked) {
      console.log('success')
      test2 = {"height": 12 + "px"}
    }
    else {
      test2 = null
    }
  }


  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div 
    onClick = {test} 
      class= "card fade-in colorcorrect" id = "cardet"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style ={{ transform: props.xys.interpolate(trans)}}
      // style={test2}
    > 
     <Insidecard type = {typer}  foodnumb = {foodnum}></Insidecard>
    </animated.div >

  )
}


  export default Card;