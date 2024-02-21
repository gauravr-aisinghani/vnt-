import { Grid } from "@mui/material"
import { useStyles } from "./AboutCss"
function About() {
  let classes=useStyles()
  return (
    <div>
      <Grid container spacing={2} className={classes.mainContainer} >
      <Grid item xs={12} md={6} className={classes.contentBox}>
        <h2>
        Creator of quality designs and thinker of fresh ideas.
        </h2>
      </Grid>
      <Grid item xs={12} md={6} >
           <img src="src/assets/potrait-background.jpg" alt="" className={classes.heroImg}  />
      </Grid>
      </Grid>
     
    </div>
  )
}

export default About
