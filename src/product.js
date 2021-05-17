import { Link } from "react-router-dom";
import {useContext} from "react"
import UserContext from "./usercontext"
export default function Product(){
  let prodata=useContext(UserContext)
    let valuedata=[
        {
          id: "1",
          product_name: "Tasty Granite Towels",
          product_price: "143.00",
          product_description: "Pants",
          rating: 4,
          edit:"/productcard/1"
          
        },
        {
          id: "2",
          product_name: "Licensed Steel Chicken",
          product_price: "716.00",
          product_description: "Bacon",
          rating: 5,
          edit:"/productcard/2"
          
        },
        {
          id: "3",
          product_name: "Generic Steel Hat",
          product_price: "449.00",
          product_description: "Computer",
          rating: 3,
          edit:"/productcard/3"
         
        },
        {
          id: "4",
          product_name: "Handmade Fresh Mouse",
          product_price: "426.00",
          product_description: "Soap",
          rating: 2,
          edit:"/productcard/4"
          
        },
        {
          id: "5",
          product_name: "Licensed Granite Chips",
          product_price: "512.00",
          product_description: "Chair",
          rating: 4,
          edit:"/productcard/5"
         
        },
        {
          id: "6",
          product_name: "Intelligent Wooden Keyboard",
          product_price: "731.00",
          product_description: "Table",
          rating: 4,
          edit:"/productcard/6"
          
        },
        {
          id: "7",
          product_name: "Intelligent Hammer",
          product_price: "331.00",
          product_description: "Hammer",
          rating: 5,
          edit:"/productcard/7"
         
        },
      ];
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
              { valuedata.map((obj)=>{
                  return <>
                      <tr>
                      <th> {obj.id}</th>
                      <th>{obj.product_name}</th>
                      <th>{obj.product_description}</th>
                      <th>{obj.product_price}</th>
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