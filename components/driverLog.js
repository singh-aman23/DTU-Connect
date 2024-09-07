import classes from './driverLog.module.css';
export default function DriverLog(){
    return <>
        <div className={classes.container}>
            <h1 className={classes.heading} >Today's Schedule</h1>
            <table className={classes.table} >
              <tr>
                <th className={classes.tableHeading} > Bus Id </th>
                <th className={classes.tableHeading} > From </th>
                <th className={classes.tableHeading} > To </th>
                <th className={classes.tableHeading} > Arrival Time </th>
                <th className={classes.tableHeading} > Departure Time </th>
              </tr>
              <tr>
                <td> DL 9901 </td>
                <td> saket </td>
                <td> janakpuri </td>
                <td> 11:00am </td>
                <td> 12:15pm </td>
              </tr>
              <tr>
                <td> DL 9802 </td>
                <td> lajpatnagar </td>
                <td> pitampura </td>
                <td> 1:10pm </td>
                <td> 1:50pm </td>
              </tr>
              <tr>
                <td> DL 9911 </td>
                <td> rohini </td>
                <td> vasant vihar </td>
                <td> 2:30pm </td>
                <td> 3:15pm </td>
              </tr>
            </table>
          </div>

    </>
}