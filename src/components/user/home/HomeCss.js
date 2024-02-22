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
        position:'abosolute',
        zIndex:'1', 
        marginTop:'10vh'
      },
      headings:{
        textAlign:'center',
        fontSize:'2.7rem',
        background: 'linear-gradient(to right, #ff8a00, #e52e71)',
        color:'transparent',
        WebkitBackgroundClip: 'text',
      },
      contentBox:{
        width:'90%',
        margin:'auto'
      },
      productinfo:{
        width:'100%',
        textAlign:'center',
        "& p":{
            fontWeight:"500",
            fontSize:'18px'
        },
        height:'40vh',
      }
});
