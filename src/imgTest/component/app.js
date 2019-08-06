import React from 'react';
import testImg from '../../../static/jpg/test-js.jpg';
import './style.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      testImg,
    }
  }
   render(){
     return (
       <div>hello world!
         <img src="/static/test-html.jpg" alt="xxx"/>
         <img src={testImg}  alt=""/>
         <div className={'bg'}>

         </div>
       </div>
     )
   }
}
