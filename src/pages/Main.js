import React, { useState, useEffect } from 'react';
import Foodcircle from '../components/foodcircle';
import '../App.css';
import Card from '../components/card';
import $ from 'jquery';
import Navigbar from '../components/navbar'
import Button from '../components/button';

const randum = (x) => {
    let num = Math.random() * 10;
    let rounded = Math.round(num);
    while (rounded >= x)
      rounded = Math.abs(rounded -  Math.round(Math.random() * 10));
    return rounded;
  }

  var numb = randum()
  const person = "Oski"

// const enlargeImg = (img) => { 

//     img.style.transform = "scale(1.5)"; 
//     img.style.transition = 
//       "transform 0.25s ease"; 
// } 


  const handleClick = (func ,count) => {
    $('.horiz').removeClass('fade-in-left' + String(count - 1));
    $('.horiz').addClass('fade-in-left' + String(count));
    setTimeout(
      function() {
          func(count + 1);
      }
      .bind(this),
      500
  );
    };

const Main = () => {


  const [count, setCount] = useState(0);


	return (
		<div className = "bg"> 
            < Navigbar />
            <div className = "horiz">
              <Button 
                  type = {"reselect"} 
                  text = {"Reselect?"} 
                  func = {() => handleClick(setCount, count)}
              > 
              </Button>
                < Foodcircle user={person} foodnum={count} />
                < Card  typer = {"recomend"} foodnum={count} />
                < Card typer = {"map"}/>
            </div>

            <div className = "horiz" >
                < Card typer = {"available"} />
                < Card typer = {"available"}/>
                < Card typer = {"available"}/>
                < Card typer = {"available"}/>

            </div>
		</div>
        
        

	);
};

export default Main;
