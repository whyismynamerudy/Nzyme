import React from 'react'

const Recall = (props) => {
  if (!props.used){
    return <></>
  } else {
    return (
      <div>
        <h1>Active Recall</h1>
        <p>{props.summary}</p>
      </div>
    )
  }
}

export default Recall