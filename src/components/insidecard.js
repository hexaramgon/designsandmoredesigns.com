import React from 'react';
import bobamap from '../imgs_svgs/map1.png'
import '../App.css'
import pizzamap from '../imgs_svgs/pizzamap.png'
import mexicanmap from '../imgs_svgs/mexicanmap.png'
import hamburgermap from '../imgs_svgs/burgermap.png'



/* Bootstrap Button importated wrong, have to fix in later build s*/



class Insidecard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          restnumb: '',
          costs:'',
          rate: '',
          allerg: '',
          foodnum: 'hu',
          map: bobamap
        };
      }

    render() {

      const componentDidUpdate = (prevProps) => {
        if(this.state.foodnum !== this.props.foodnumb){
            updatestate();
        }
      }
      
      const maps = [bobamap, pizzamap, hamburgermap, mexicanmap];
      
      const updatestate = () => {
        const numrest = [12, 5, 2, 6];
        const cost = ['$3.29', '$7.35', '$9.05', '$8.99'];
        const rating = [3.6, 4.2, 4.1, 3.9];
        const maps = [bobamap, pizzamap, hamburgermap, mexicanmap];
        const allergy = ['nut', 'lactose', 'lactose', 'none'];
        this.setState({
          restnumb: numrest[this.props.foodnumb],
          costs:cost[this.props.foodnumb],
          rate: rating[this.props.foodnumb],
          allerg: allergy[this.props.foodnumb],
          maper: maps[this.props.foodnumb],
          foodnum: this.props.foodnumb});
      }

      
      if (componentDidUpdate()) {
        this.setState({map:this.state.maper})
        updatestate()
      }

      console.log(this.state.foodnum)


      let x = '';

      console.log(this.state.foodnumm)

        switch(this.props.type) {
            case "map":
              return (
                  <div className = "temp">
                    <img src={bobamap} className = "temp2" alt="map" />  
                </div>
              )
            case "recomend":
              return(
                  <div className = "colorcorrect">
                    <h4 id = "h4-fix">  {this.state.restnumb} Resturants Nearby </h4>
                    <hr></hr>
                    <h4 id = "h4-fix"> Average Cost </h4>
              <h2 id = "h2-fix"> {this.state.costs}</h2>
                    <hr></hr>
                    <h4 id = "h4-fix"> Average Rating </h4>
              <h2 id = "h2-fix"> {this.state.rate}</h2>
                    <hr></hr>
                    <h4 id = "h4-fix"> Possible Allergy: {this.state.allerg} </h4>
                </div>
                )
            default:
                return(<h2 id = "h2-fix" >Resturants</h2>)
          }

    }
  }


  export default Insidecard;