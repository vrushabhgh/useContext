import {useState,useContext} from "react";
import UserContext from "./usercontext"
export default function Usercreate() {

    let userData=useContext(UserContext)
let [fristName,setfristName]= useState("");
let [lastName,setlasttName]= useState("");
let [Email,setEmail]= useState("");
let [password,setpassword]= useState("");

let  usersubmit = (e) => {
    e.preventDefault()
    console.log({
        fristName,
        lastName,
        Email,
        password

    })

    userData.setuserList([...userData.userList,{
        fristName,
        lastName,
        Email,
        password

    }])
}

    return <>
        <form onSubmit={usersubmit}>
            <div className="container">
                <h2>User Form</h2>
                <div className="row">
                    <div className="col-6">
                        <label>Frist name</label>
                        <input type="text" className="form-control" value={fristName} onChange={(e)=>setfristName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label>Last  name</label>
                        <input type="text" className="form-control" value={lastName} onChange={(e)=>setlasttName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label>Email</label>
                        <input type="text" className="form-control" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary mt-5" >submit</button>
                </div>



            </div>
        </form>

    </>



}