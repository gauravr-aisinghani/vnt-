import { makeStyles } from "@mui/styles";
export const useStyles=makeStyles({
    maincontainer:{
        
        background:`url('/src/assets/background.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor:'#000',
       
        height:'100vh',
        width:'100vw',
        overflow: 'hidden',  
        color: '#fff',   
       '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',  
        zIndex: 1,  
    },

    },
    nav:{
        width:'80%',
        height:'10%',
       
        marginTop:'1rem'
        
    },
    logo:{
     zIndex:2
    },
  
    box:{
        padding:20,
        margin:10,
        background:'#FFF',
        width:800,
        borderRadius:10,
    },
    headingstyle:{
        letterSpacing:1,
        fontWeight:'bold',
        fontFamily: 'Poppins,sans-serif',
    },
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    }
    
    
})