import React from 'react'

function Subscribe() {
    return (
        <div className="container mb-4" 
        style={
            {background:'linear-gradient(115deg,rgba(0,0,0,0.8),rgba(0,0,0,.9)),url(assets/images/bg.webp)'
            ,backgroundAttachment:'local',
            backgroundPosition:'center',
            backgroundBlendMode:'color-burn'
        }}
            >
            <h1 className="w-100 mr-auto text-center text-light pt-3">Get in touch</h1>
            <p className="lead text-light text-center"
            style={{opacity:.7}}
            >Subscribe to our daily newsLetters and be the first to
            recieve promo codes.
            </p>
            <div className="forms subscribe p-5">
            <form className="form-group d-flex w-75 pb-5">
                <input type="text" className="form-control mx-2 w-75" placeholder="Leave a comment"/>
                <input type="submit" className="form-control btn w-25 p-2" value="send" style={{background:'black',color:'white'}} />
            </form>
            </div>
        </div>
    )
}

export default Subscribe
