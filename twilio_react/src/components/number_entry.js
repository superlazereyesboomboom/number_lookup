import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Field_box from './field_box.js';
//import { Alert,AlertTitle } from '@mui/material';
const Number_entry = () => {
const [error,set_error] = React.useState('')
const [name_init,name_update] = React.useState({'lineTypeIntelligence': {'carrier_name': '','type':''}})
const [number,number_input] = React.useState('')
const [loading,isLoading] = React.useState(false)

//maybe move this useSTate to app.js so that this component can
function unpack(number){
    const test = fetchdata(number).then((value) => {is_valid_number(value.data)})
 
 }

 function keypress(e){
    
    //it triggers by pressing the enter key and checks for length
  if (e == 'Enter' && (number.length == 12)) {

    return unpack(number)
  }
  else if (e == 'Enter') {
    set_error('please check the format of the number')
  }
  else if(error.length>0){
    set_error('')
  }

};


function buttonpress(number) {
    if(number.length == 12){
        return unpack(number)
    }
    else{
        set_error('please check the format of the number')
    }

}

function is_valid_number(data){
if (data.valid == true) {
    console.log('hello')
    name_update(data)
}
    else{
        console.log('trigger')
        set_error('not a valid number')
    }

}
async function fetchdata(number){
    isLoading(true)
    await sleep(5000)
    isLoading(false)
    const response = await fetch(`http://localhost:5000/home?phone_number=${number}`)
    const con_resp = await response.json();
    console.log({data:con_resp})
    return {data:con_resp}

}


    return(

        <SafeAreaView>
            <div style = {alignment}>
            <div>
            { error &&
            <Alert style = {error_style} severity="error">
            {error}
            
          </Alert>}
          </div>

            <TextInput
                style = {styles}
                onChangeText={number_input}
                value  = {number}
                placeholder= "Example Number Format '+14159929960'"
                maxLength = {12}
                onKeyPress={ (event) => { keypress(event.nativeEvent.key) }}
                >

            </TextInput>
            

        

            <Button 
            style = {button_style} 
            variant = "contained" 
            color = 'secondary' 
            onClick = {() =>{ buttonpress(number) }}

            >Search</Button>


<div style = {fit_box()}>
    <Field_box name = "Caller Name"  isLoading = {loading} variable = {name_init.callerName}/>
    <Field_box name = "Carrier Name" isLoading = {loading}  variable = {name_init['lineTypeIntelligence']['carrier_name']}/>
    <Field_box name = "Phone Type"  isLoading = {loading}  variable = {name_init['lineTypeIntelligence']['type']}/>
    </div>
</div>



        </SafeAreaView>
    )
}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve,ms))
}




const styles = {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 400,
      backgroundColor: 'white',
      borderRadius: '10px',
      fontSize: '20px',
      

};

const button_style = {
    height: '50px',
    fontWeight: 'bold',
    borderRadius: '20px',
    width: '90px',

}

const alignment = {
    justifyContent: "center",
    
 //   position:'fixed'

}

const error_style = {
    borderRadius: '20px',
    marginLeft: '5%',
    marginRight: '70%',
    position: 'absolute',
  
}

const box_style = {
    gap: '20%',
    justifyContent: "center",
    paddingTop: '5%',
    display: 'flex', 
  };
/*
const box_style_small = {
    gap: '20%',
    justifyContent: "center",
    paddingTop: '5%',
    alignItems: 'center',

}
*/
const fit_box = () => {
 //   if (window.innerWidth >1050){
        return box_style
    /*   }
    else{
       return box_style_small
    }*/

}
export default Number_entry

//#4A3B8F