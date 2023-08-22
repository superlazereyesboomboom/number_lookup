import { Paper } from '@mui/material';
import search from './search.png'
import twilio from './twilio3.png'

const title= () =>{


    return(
    <Paper style = {styles}>
      <div> <img src={search} width="50" height="50" />
       Lookup a number!  </div>  
    
    <div> <img src={twilio}  width="50" height="50" />  Powered By Twilio</div>
       
    </Paper>)
}

const styles ={

    backgroundColor: '#29BF89',
    color: 'white',
    paddingTop: "20px",
    paddingLeft: "5%",
    paddingBottom: "1%",
    fontSize: 30,
    height: '15%',
    fontWeight: 'bold',
    textAlign: 'left',
    display: 'flex',
  alignItems: 'center',
  gap: "50%"
}

const twilio_style = {
    float: 'right',

}

export default  title