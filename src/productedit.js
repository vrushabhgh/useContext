import {useState,useContext} from "react";
import UserContext from "./usercontext"
export default function Proedit() {
    let userprodata=useContext(UserContext)

    let [ID,setID]=useState("");
    let [productName,setproductName]=useState("");
    let [Description,setDescription]=useState("");
    let [productprice,setproductprice]=useState("");
    let [Rating,setRating]=useState("");

    let usersubmit=(e)=>{
        e.preventDefault()
        console.log({
            ID,
            productName,
            Description,
            productprice,
            Rating

        })

        userprodata.setprodutList([...userprodata.produtList,{
            ID,
            productName,
            Description,
            productprice,
            Rating

        }])
    }


    return <>
        <h1>Product Edit</h1>
        <form onSubmit={usersubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <label>ID</label>
                        <input type="text" className="form-control" value={ID} onChange={(e)=>setID(e.target.value)}/>
                    </div>
                    <div className="col-5">
                        <label>Product Name</label>
                        <input type="text" className="form-control" value={productName} onChange={(e)=>setproductName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label>Description</label>
                        <input type="text" className="form-control" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className="col-6">
                        <label>Product Price</label>
                        <input type="text" className="form-control" value={productprice} onChange={(e)=>setproductprice(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label>	Rating</label>
                        <input type="text" className="form-control" value={Rating} onChange={(e)=>setRating(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary mt-5" >submit</button>

                </div>
            </div>
        </form>

    </>


}