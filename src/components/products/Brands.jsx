import React from 'react'

function Brands() {
    return (
        <div className="container m-auto">
            <div className="container brands d-flex p-4">
                <div className="brand">
                    <img className="img-fluid w-25" src="assets/images/nike.png" alt="" />
                </div>
                <div className="brand">
                    <img className="img-fluid w-25" src="assets/images/fila.png" alt="" />
                </div>
                <div className="brand">
                    <img className="img-fluid w-75" src="assets/images/puma.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Brands
