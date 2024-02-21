import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  
    maincontainer: {
        width: "100%",
        height: "auto",
        position: "relative", 
      },
      // overlay: {
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   background: "rgba(0, 0, 0, 0.2)",
      //   height:'60vh',
      //   zIndex: 1,
      // },
      image: {
        width: "100%",
        height: "60vh",
        zIndex: 0, 
        marginBottom:"30px"

      },
      headings:{
        textAlign:'center',
        fontSize:'2.7rem',
        marginBottom:'30px',
        background: 'linear-gradient(to right, #ff8a00, #e52e71)',
        color:'transparent',
        WebkitBackgroundClip: 'text',
      },
      contentBox:{
        width:'90%',
        margin:'auto',
        marginTop:'30px',
        
      },
      productinfo:{
        width:'100%',
        textAlign:'center',
        "& p":{
            fontWeight:"500",
            fontSize:'18px',
            marginTop:'10px'
        },
        height:'20%',
        marginTop:'10px'
        
      }
});
