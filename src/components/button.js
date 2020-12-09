import React from 'react';

/* Bootstrap Button importated wrong, have to fix in later build s*/

class Button extends React.Component {
    text(text) {
        
    }

    render() {
      return (
        <div class = "firstparent"> 
        <button 
        type="button" 
        class="btn btn-primary btn-lg" 
        id={this.props.type}
        onClick={this.props.func}
        >
          {this.props.text}
        </button>
      </div>
    
      );
    }
  }


  export default Button;