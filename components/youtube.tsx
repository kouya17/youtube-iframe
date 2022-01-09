import React, { useState } from 'react';
import YouTube, { Options } from 'react-youtube';
import { YouTubePlayer } from "youtube-player/dist/types";

const Example = () => {
  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [operations, setOperations] = useState([] as string[])
  const [download, setDownload] = useState("");
  function addOperation(ope: string) {
    setOperations([...operations, `${new Date()},${ope}`])
  }
  function _onReady(event: { target: YouTubePlayer }) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
    addOperation('ready')
  }
  function _onError(event: { target: YouTubePlayer }) {
    addOperation('error')
  }
  function _onPlay(event: { target: YouTubePlayer }) {
    addOperation(`{"event": "play", "currentTime": ${event.target.getCurrentTime()}}`)
  }
  function _onPause(event: { target: YouTubePlayer }) {
    addOperation(`{"event": "pause", "currentTime": ${event.target.getCurrentTime()}}`)
  }
  function _onEnd(event: { target: YouTubePlayer }) {
    addOperation(`{"event": "end", "currentTime": ${event.target.getCurrentTime()}}`)
  }
  const handleDownload = () => {
    setDownload('data:text/plain;charset=utf-8,' + encodeURIComponent(operations.join('\n')));
  }

  return (
    <div>
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={_onReady}
        onError={_onError}
        onPlay={_onPlay}
        onEnd={_onEnd}
        onPause={_onPause}
      />
      <div>{operations.map((ope) => {
        return (
          <li key={ope}>
            {ope}
          </li>
        )
      })}</div>
      <button><a href={download} download="download.txt" onClick={handleDownload}>download</a></button>
    </div>
  )
}

export default Example