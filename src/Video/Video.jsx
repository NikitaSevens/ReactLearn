import { useState } from 'react'
import './Video.css'

function Video(props) {
  const {title, img , description} = props
  const [likesCount, setLikesCount] = useState(0);

  const increseLikes = () => {
    setLikesCount(likesCount + 1);
    //console.log(title, likesCount);
  }
    return (
      <>
        <div className='video'>
          <img className='video-img' src={img} alt="video image"/>
          <p>{title}</p>
          <p>{description}</p>
          <div className='video-footer'>
            <p>Лайки: {likesCount}</p>
            <button onClick={increseLikes}>Лайк</button>
          </div>
        </div>
      </>
    )
  
}

export default Video