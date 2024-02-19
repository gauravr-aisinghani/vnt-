import { useStyles } from "./HomeCss";
import { Grid } from "@mui/material";
export default function Home() {
  let classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <div className={classes.overlay}></div>
      <img
        src="src/assets/background.jpg"
        alt="Your Alt Text"
        className={classes.image}
      />
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Hoodies and sweatshirts</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product2.jpeg"  style={{width:'100%',height:"60%"}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
         


        </Grid>
          
      </div>

      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Jeans</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
         


        </Grid>
          
      </div>
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>T-Shirts</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>

         


        </Grid>
          
      </div>
      <div className={classes.contentBox}>
        <h2 className={classes.headings}>Shirts</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <img src="src/assets/product1.jpeg"  style={{width:'100%'}}/>
            <div className={classes.productinfo}>
            <h3>Haters Slogan Hoodie- Olive Green</h3>
            <p>&#x20B9;2000</p>
            </div>

          </Grid>

         


        </Grid>
          
      </div>
    </div>
  )
}
