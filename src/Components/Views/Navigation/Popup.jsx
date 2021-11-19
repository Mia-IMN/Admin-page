import React from 'react'

const Popup = ({Profiler}) => {
    return (
        <div className="Popup">
            <p className="p" onClick={Profiler}>Profile</p>
            <p className="p">Log Out</p>
        </div>
    )
}

export default Popup
