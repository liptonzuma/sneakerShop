import React from 'react'
import Button from '@material-ui/core/Button'
import Carousel from 'react-material-ui-carousel'

const CarouselItem=()=>{
    return(
    <div className="row c-item">
     <div className="col-md-5 m-auto pt-5" data-aos="slide-right">
        <h1 className="display-3  px-5 text-dark">
          <span className="text-purple">Air </span>Force 1
       </h1>
       <p className="lead px-5">
         Buy it <span className="text-purple"> QUALITY</span>, Buy it <span className="text-purple"> LESS EXPENSIVE</span>.
       </p>
       <div className="price px-5">
        <p className="text-bold lead">Price <span className="text-purple amount">$230</span></p>
       </div>
      <div className=" mx-5 mat">
    <Button className="buy">Buy now</Button>
      </div>
       </div>
       <div className="col-md-7 m-auto">
           <img data-aos="fade-up" src="assets/images/air.png" alt="" className="img-fluid" />
      </div>  
      
      </div>
    )
}
const CarouselItem1=()=>{
    return(
    <div className="row c-item">
     <div className="col-md-5 m-auto pt-5" data-aos="fade-left">
        <h1 className="display-3  px-5 text-dark">
          <span className="text-pink ">Air </span>Jordan 1
       </h1>
    
       <p className="lead px-5">
         Buy it <span className="text-pink"> QUALITY</span>, Buy it <span className="text-pink"> LESS EXPENSIVE</span>.
       </p>
       <div className="price px-5">
        <p className="text-bold lead">Price: <span className="text-pink amount">$230</span></p>
       </div>
      <div className=" mx-5 ">
    <Button className="bg-pink">Buy now</Button>
      </div>
       </div>
       <div className="col-md-7 m-auto">
           <img data-aos="fade-down" src="assets/images/center.png" alt="" className="img-fluid" />
      </div>  
      
      </div>
    )
}
const CarouselItem2=()=>{
    return(
    <div className="row c-item">
     <div className="col-md-5 m-auto  pt-5" data-aos="slide-left">
        <h1 className="display-3  px-5 text-dark pt-2">
          <span className="text-danger ">Air </span>MAX
       </h1>
       <p className="lead px-5">
         Buy it <span className="text-danger"> QUALITY</span>, Buy it <span className="text-danger"> LESS EXPENSIVE</span>.
       </p>
       <div className="price px-5">
        <p className="text-bold lead"> Price: <span className="text-danger amount">$230</span></p>
       </div>
      <div className=" mx-5 ">
    <Button className="bg-red">Buy now</Button>
      </div>
       </div>
       <div className="col-md-7 m-auto ">
           <img data-aos="fade-down" src="assets/images/air-max.png" alt="" className="img-fluid" />
      </div>  
      
      </div>
    )
}

function LandingPage() {
    return (

        <Carousel stopAutoPlayOnHover={false}
         animation="slide" className="header"
         >
            <CarouselItem />
            <CarouselItem1 />
            <CarouselItem2 />

        </Carousel>
    //    <header className="header mt-5 row"
    // //    style={{
    // //     background:'linear-gradient(115deg,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(assets/images/bg.webp)',
    // //         }}
    //    >
    //        <div className="col-md-5 m-auto" data-aos="fade-down">
    //        <h1 className="display-3  px-5 text-dark">
    //           <span className="text-pink ">Air </span>Force 1
    //        </h1>
    //        <p className="lead px-5">
    //            Buy it <span className="text-pink"> QUALITY</span>, Buy it <span className="text-pink"> LESS EXPENSIVE</span>.
    //        </p>
    //        <div className=" mx-5 mat">
    //        <Button className="buy">Buy now</Button>
    //        </div>
    //        </div>
    //        <div className="col-md-7 m-auto">
    //            <img data-aos="fade-down" src="assets/images/air.png" alt="" className="img-fluid" />
    //        </div>
           

    //    </header>
    )
}

export default LandingPage
