import React from 'react'
import "../Loading/Loading.css"

const Loading = () => {
  return (
    <>
      <div className="spinnerCSS spinner-border text-dark" role="status">
        <span className="visually-hidden"></span>
      </div>
      <h3>Loading..</h3>
    </>
  )
}

export default Loading