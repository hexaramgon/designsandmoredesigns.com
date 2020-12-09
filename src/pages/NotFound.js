import React from 'react';

import axios from 'axios';

import error from '../imgs_svgs/error.png'


// const url = "`https://wdb-indecisive.herokuapp.com/selections/filter-menu/1/?format=json`";
// const config = {
//    url,
//    headers: {
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
// }
// const {data, setData} = useState({});
//     useEffect(() => {
//         axios(config)
//         .then(response => {
//             setData(response);
// 			console.log(data)
			
// 		}}}


export default class PersonList extends React.Component {
  state = {
	persons: [],
	name: ''
  }

  // componentDidMount() {
  //   axios.get(`https://wdb-indecisive.herokuapp.com/selections/`)
  //     .then(res => {
	
	// 	var persons = (res.data);
	// 	var inter = persons[0]
	// 	console.log(inter)

	// 	this.setState({ persons: inter, name: inter.name });


  //     })
  // }


  render() {
	console.log(this.state.name)

    return (
      <ul>
        <h1>{this.state.name}</h1>
        <img src = {error} className = "error-pic"></img>

      </ul>
    )
  }
}