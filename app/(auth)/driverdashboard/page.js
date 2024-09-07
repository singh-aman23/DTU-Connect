import DriverLog from "@/components/driverLog";
import { verifyAuth } from "@/lib/auth";
import classes from './page.module.css';
export default async function DriverDashboard(){
    const authResult = await verifyAuth();
  if (!authResult.user) {
    return redirect("/");
  }
    return <>
    <div className = {classes.container}>
        <DriverLog/>
    </div>

    </>
}