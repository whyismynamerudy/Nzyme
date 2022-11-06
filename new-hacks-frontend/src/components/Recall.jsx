import React from 'react'

const Recall = (props) => {

  const words = props.subsetwords.map(word => <li>{word}</li>);

  if (!props.used){
    return <></>
  } else {
    return (
      <div>
        <h1>Active Recall</h1>
        <p>{props.summary}</p>
        <p>Keywords:</p>
        <ul>
          {words}
        </ul>
      </div>
    )
  }
}

export default Recall