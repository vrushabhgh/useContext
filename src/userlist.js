import { Link } from "react-router-dom";
import {  useEffect, useState } from "react"

export default function Userlist() {

   
    let [UserList, setUserList] = useState([]);

    useEffect(async () => {
        let users = await fetch("https://60a77f763b1e13001717643d.mockapi.io/users/users");
        let userData = await users.json();
        console.log(userData);
        setUserList([...userData])
    },[])

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

                            {
                                UserList.map((obj) => {
                                    return <tr>
                                        <td>{obj.fristname}</td>
                                        <td>{obj.lastname} </td>
                                        <td>{obj.email}</td>
                                        <td>{obj.password}</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                        <td><Link to="/useredit/1">User Edit</Link></td>
                                    </tr>

                                })
                            }





                        </table>
                    </div>
                </div>
            </div>
        </div>

    </>


}