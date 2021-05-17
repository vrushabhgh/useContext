export default function Productcard(props){
   
    
    return<>
   <h1>Product View{props.match.params.id}</h1>
   <div class="card" >
  <img src="https://ii1.pepperfry.com/media/catalog/product/r/e/568x625/red-microfibre-250-gsm-bath-towel---set-of-3-by-bathe---soak-red-microfibre-250-gsm-bath-towel---set-iicjzp.jpg" class="card-img-top" alt="..." width="150px"height="300px"/>
  <div class="card-body">
    <h3 class="card-title"><b text-color="black">Tasty Granite Towels</b></h3>
    <p class="card-text">Bathe  Soak Microfibre Towels Very Soft - Excellent Absorption - Quick Dry - No Odour - Bacteria Free -Wrinkle Free - Easy To Wash - No Chemicals </p>
    <button class="btn btn-primary">Buy Product</button>
  </div>
</div>
    </>
}