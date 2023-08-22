import { Paper } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const Caller_name = (props) => {
    const [loading,isLoading] = React.useState(false)
    const[temp_value,new_value] = React.useState('')
    return(
        <div>
        <div>
            { props.isLoading &&
            <CircularProgress style = {loading_style}/>}
          </div>

        <Paper style = {styles} elevation = {10} >
            <div style = {{color: "#29BF89"}}> {props.name}</div>

            <div style = {{color: "#4A3B8F" ,marginTop: '20%'}}> {props.variable}</div>
        </Paper>
        </div>
    )
}

const styles = {
    width: '250px',
    height: '250px',
    whiteSpace: 'pre-wrap', 
    fontSize: 30,
    overflowWrap: 'break-word',
    backgroundColor: 'ECECEC',
    color: '#29BF89',
    borderRadius: '20px',
    
}

const loading_style = {
    marginTop: '5%',
    marginLeft: '-1%',
    position: 'absolute'
}

export default Caller_name