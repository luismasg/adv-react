import React, { useRef } from 'react'
import flowerVideo from '../assets/flower.mp4'

export default function Video() {
  const ref = useRef(null)
  return (
    <div>
      <div className="pa3">
        <div className="fl w-100 pa2">
          <video src={flowerVideo} ref={ref} />
        </div>
        <button
          onClick={() => {
            if (ref.current !== null) {
              ref.current.play()
            }
          }}
        >
          play
        </button>
      </div>
      <div className="fl w-25 pa2">
        <button
          onClick={() => {
            if (ref.current !== null) {
              ref.current.pause()
            }
          }}
        >
          pause
        </button>
      </div>
    </div>
  )
}
