import "./ProductCard.css"
function ProductCard ({Product}) {

// const priceStyle={
//     color:"grey",
//     fontSize:"20px",
// }
// const titleStyle={
//     fontSize:"25px",
//     color:"blue",
//     fontWeight:"bold"
// }
// const availableStyle={
//     color:"green"
// }
// const notavailableStyle={
//     color:"red"
// }   
// const productcardStyle={
//     border:"2px solid black",
//     width:"300px",
//     padding:"10px",
//     margin:"10px",
//     boxShadow:"2px 2px 10px grey",
// }
    return(


         <div className="product-card">
            <h2 className="title">{Product.ProductName}</h2>
            <p className="price">{Product.ProductPrice}</p>
            {/* <p>{Product.isavaliable?<p className="available">INSTOCK</p>:<p className="notavailable">OUTOFSTOCK</p>}</p> */}
            

           

       

    </div>
    )
}
export default ProductCard