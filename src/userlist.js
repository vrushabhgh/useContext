import { Link } from "react-router-dom";
import {useContext} from "react"
import UserContext from "./usercontext"
export default function Userlist() {
    let users = useContext(UserContext)
    return <>
        <div className="container-fluid">


            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
    For more information about DataTables, please visit the </p>
            <Link to="/Usercreate">Create</Link>


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Frist Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Frist Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.userList.map((obj) => {
                                        return <tr>
                                            <td>{obj.fristName}</td>
                                            <td>{obj.lastName} </td>
                                            <td>{obj.Email}</td>
                                            <td>{obj.password}</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                            <td><Link to="/useredit/1">User Edit</Link></td>
                                        </tr>

                                    })
                                }




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </>


}