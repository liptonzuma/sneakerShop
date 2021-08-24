import { Button } from '@material-ui/core'
import React from 'react'

function ProductDetails({itemDetails}) {
    return (
        <div className="w-100 m-auto mt-5">

            <div className="container row text-center m-auto">
                <img src={itemDetails.image} alt="" className="img-fluid col-md-6" />
                <div className="col-md-6">
                    <div className="row m-auto ">
                    <img src={itemDetails.details[0]} alt="" className="w-50" />
                    <img src={itemDetails.details[1]} alt="" className="w-50" />
                    <img src={itemDetails.details[2]} alt="" className="w-50" />
                    <img src={`assets/images/${itemDetails.brand.toLowerCase()}.png`} alt={itemDetails.brand} className="logo w-50"/>
                </div>
                </div>
                <div className="button">
                    <Button variant="contained" color="primary" onClick={()=>window.history.back()}> <i className="fa fa-chevron-left"></i>back</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
