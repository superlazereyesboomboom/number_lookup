import React from 'react';
import './App.css';
import Title from './components/Title.js';
import Number_entry from './components/number_entry.js';
import Field_box from './components/field_box.js';



//store auth token in safe spot. Also, I need to  switch to a Trial account token
//security - only able to access server from client
//figure out how to host client + server on AWS
//change connection to personal Twilio account

//potentially try google ads
function App() {
  

//on enter, send 'number' to the search_button

  return (
    <div className="App" >
    <Title/>
    <div style = {question_style}> Who is calling or texting?</div>
    <div style = {input_styles}>
    <Number_entry/>
    </div> 

    </div>
  );
}

const input_styles = {
  paddingTop: '5%',
};


const question_style = {
  textAlign: 'left',
  paddingTop: '5%',
  paddingLeft: '10%',
  fontWeight: 'bold',
  fontSize: '60px',
  color: '#4A3B8F'
};


export default App;
