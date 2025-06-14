import React from 'react'

const PopUp = ({message}) => {
  return (
    <div className='popup-overlay'>
        <div className="popup-box">
            <p>{message}</p>
        </div>
    </div>
  )
}

export default PopUp
