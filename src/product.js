import { Link } from "react-router-dom";
import {useContext,useState,useEffect} from "react"
import UserContext from "./usercontext"
export default function Product(){
  let prodata=useContext(UserContext)
  let [UserList, setUserList] = useState([]);
  useEffect(async () => {
    let pusers = await fetch("https://60a77f763b1e13001717643d.mockapi.io/users/product");
    let puserData = await pusers.json();
    console.log(puserData);
    setUserList([...puserData])
},[])
    return <>
   <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Product List</h1>
<p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
For more information about DataTables, please visit the </p>

<Link to="/productedit">Add New Product</Link>

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Product Price</th>
                        <th>rating</th>
                        <th>View Product</th>
                        </tr>
                </thead>
               
                <tbody>
              { UserList.map((obj)=>{
                  return <>
                      <tr>
                      <th> {obj.id}</th>
                      <th>{obj.productname}</th>
                      <th>{obj.productdiscription}</th>
                      <th>{obj.productprice}</th>
                      <th>{obj.rating}</th>
                      <td><Link to={obj.edit}>View product discription</Link></td>
                      </tr>
                      </>
              })
               }

{ prodata.produtList.map((obj)=>{
                  return <>
                      <tr>
                      <th> {obj.ID}</th>
                      <th>{obj.productName}</th>
                      <th>{obj.Description}</th>
                      <th>{obj.productprice}</th>
                      <th>{obj.Rating}</th>
                      <td>Action</td>
                      </tr>
                      </>
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