import React from 'react';
// import ReactDom from 'react-dom';
import testImg from '../../static/jpg/test-js.jpg';
import './style.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      testImg,
    }
  }
   render(){
     // console.log('testImg',testImg);
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
