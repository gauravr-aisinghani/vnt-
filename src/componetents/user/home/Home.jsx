import { useStyles } from "./HomeCss";
export default function Home() {
  let classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <nav className={classes.nav}>
        <img src="logo.png" width="250" className={classes.logo} />
      </nav>
    </div>
  );
}
