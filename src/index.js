import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  raed from "/home/raed/Desktop/project/app/src/raed.jpg" ; 

import ProfilePhoto from "/home/raed/Desktop/project/app/src/Component/Profile/ProfilePhto.js"; 
import FullName from "/home/raed/Desktop/project/app/src/Component/Profile/FullName.js" ; 
import Address from "/home/raed/Desktop/project/app/src/Component/Profile/Adress.js" ;



function Page(){
    return(
      <div>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </div>
      );
  
}
ReactDOM.render(<Page/> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
