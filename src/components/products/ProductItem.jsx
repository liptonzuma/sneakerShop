import React,{useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


function ProductItem({product,setItems,items,getProductDetails}) {
    useEffect(()=>{
    })
    return (
        <div className="item m-lg-4 m-2" data-aos="fade-up">
               <Grid item sm={4} md={2} xs={6} >
    
               <Link className="link" to="/sneakerShop/product"> <Button onClick={getProductDetails}>
                 <img src={product.image} alt=""/>
                 </Button>
                 </Link>
                 </Grid>
                 <div className="detailsd">
                     <p className="lead">{product.name}</p>
                     <div className="price-area">
                     <small className="price">${product.price}.00</small>
                   <Button> <i onClick={setItems} className="icon fa fa-shopping-cart btn"></i></Button> 
                     </div>
                   </div>
        </div>
    )
}

export default ProductItem
