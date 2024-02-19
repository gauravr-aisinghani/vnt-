import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    footer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw',
        backgroundColor:'#d7d9ff;',
        padding:'10vh 0vh',
        fontSize:'1.2vw'
    },
    links:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw',
        marginBottom:'5vh'
    },
    link:{
        textDecoration:'none',
        color:'#000',
        fontWeight:'bolder',
    },
    socialLinks:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2vw'
    },
    slink:{
        border:'0.1vh solid gray',
        borderRadius:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'0.6vw',
        color:'#000'
    },
    p:{
        fontSize:'1.2vw'
    }
})