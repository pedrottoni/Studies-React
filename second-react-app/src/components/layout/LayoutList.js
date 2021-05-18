import classes from "./LayoutList.module.css";
import MainNavigation from "./MainNavigation";

function LayoutList(props) {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default LayoutList;
