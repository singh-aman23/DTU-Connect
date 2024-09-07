import Link from "next/link";
import classes from "./page.module.css";

export default function Home({ searchParams }) {
  return (
    <>
      <div className={classes.container}>
        <Link href="/user">
          <div className={classes.login}>USER LOGIN</div>
        </Link>
        <Link href="/driver">
          <div className={classes.login}>DRIVER LOGIN</div>
        </Link>
      </div>
    </>
  );
}
