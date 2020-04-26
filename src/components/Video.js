import React, { Component } from 'react'
import ReactPlayer from 'react-player'
// /Users/humanitec/portfolio/src/components/Video.js
// /Users/humanitec/portfolio/src/videos/video.mp4
class Video extends Component {
    render () {
        return (
        <div>
            <ReactPlayer
            className='react-player'
            url= '../videos/video.mp4'
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
        )
    }
}

export default Video;