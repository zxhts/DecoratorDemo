import React, { Component } from 'react';
// eslint-disable-next-line 
import {PageDecorator} from './PageDecorator';

@PageDecorator
class App extends Component {
   render(){
     return (
        <div style={{width:'400px', height:'300px'}}>
           <p>我是App页面</p>
           <p>{this.props.value}</p>
           <p>{`我来自${this.props.address}，我今年${this.props.age}岁。`}</p>
        </div>     
     )
   }
}

export default App;