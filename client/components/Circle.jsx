import React, {Component} from 'react';

class Circle extends Component {
  constructor(props){
    super(props)
  }

  render(){
    // we might be getting 4 people instead of 1, then we can figure out how to display each circle
    const display = [];
    const group = this.props.group;
    for (let i = 0; i < group.length; i++){
      display.push(<p key={i}>{group[i].firstname} {group[i].lastname}</p>)
    }
    console.log('act passed in: ', this.props.act)
    return (
      <div className='circle'>
        {display}
        <p>Activity: {this.props.act}</p>
      </div>
    );
  }
}

export default Circle;
