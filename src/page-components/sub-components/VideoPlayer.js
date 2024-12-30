import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'

import video1 from './../Images/banner.mp4';
// import poster from './../Images/poster.jpg';

function VideoPlayer() {
  return (
    <>
    <Video autoPlay loop muted controls>
        <source src={video1}  type="video/mp4"/>
    </Video>
    </>
  )
}

export default VideoPlayer