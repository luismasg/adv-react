import React, { useRef } from 'react'
import flowerVideo from '../assets/flower.mp4'
import './styles.scss'
export default function Video() {
  return (
    <div className="ref6-videouseRef">
      <div className="pa3">
        <div className="fl w-100 pa2">
          <video src={flowerVideo} />
        </div>
        <button onClick={() => {}}>play</button>
      </div>
      <div className="fl w-25 pa2">
        <button onClick={() => {}}>pause</button>
      </div>
    </div>
  )
}
