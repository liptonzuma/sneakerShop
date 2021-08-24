import React from 'react'

function Notification({notification}) {
    return (
        <div className="container mt-5 text-center p-5">
           { notification === ""? <small className="mt-5 pt-5">No Notification</small>:
            <p className="alert alert-success">
                {notification}
            </p>
           }
        </div>
    )
}

export default Notification
