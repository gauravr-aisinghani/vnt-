import { useStyles } from "./MyAccountCss"
import { TextField,Button } from "@mui/material"
export default function MyAccount(){
    let classes=useStyles()
    return (
        <div className={classes.mainContainer}>
           <div className={classes.box}>
            <h1 style={{fontSize:'3rem',fontWeight:'bold',textAlign:'center'}}>Login</h1>
            <h3>Username or email address  <span style={{color:'blue'}}> *</span></h3>
            <TextField  label="Username " variant="outlined" />

            <h3>Password  <span style={{color:'blue'}}> *</span></h3>
            <TextField  label="Password " variant="outlined" />

            <Button variant="contained" style={{marginTop:'25px'}}>Login</Button>


            </div>
        </div>
    )
}