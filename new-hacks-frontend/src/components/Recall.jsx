import React from 'react'
import '../styles/Recall.css'

const Recall = (props) => {

  const words = props.subsetwords.map(word => <li className='keywordItem'>{word}</li>);

  if (!props.used){
    return <></>
  } else {
    return (
      <>
      <div className='recallContainer'>
        <h1 className='recallHeader'>Active Recall</h1>
        <p dangerouslySetInnerHTML={ {__html: props.summary} } className='summaryBold'></p>
      </div>
      <div className='keywordsContainer'>
        <p className='keywordsHeader'><b>Keywords:</b></p>
        <ul className='keywordsList'>
          {words}
        </ul>
      </div>
    </>
    )
  }
}

export default Recall