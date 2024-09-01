import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className={classes.content}>USER SIGNUP/LOGIN PAGE</p>
      <div className={classes.container}>
        <Link href="/search" className={classes.link}>
          <button className={classes.btn}>Click to Continue</button>
        </Link>
      </div>
    </>
  );
}
