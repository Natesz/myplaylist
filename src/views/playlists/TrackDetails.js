import React from 'react';

const TrackDetails = ( {artist, title, length, thumbnailURL, spotifyURL, chordsURL, lyricsURL} ) => {
    return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={thumbnailURL} alt="" />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta"><span>{artist}</span><span>{length}</span></div>
            <div className="extra">
                {spotifyURL && (
              <a
                href={spotifyURL}
                className="ui button tiny green button"
              >
                <i className="spotify icon"></i>
                Listen on Spotify
              </a>
                )}
                {chordsURL && (
              <a
                href={chordsURL}
                className="ui button tiny teal button"
              >
                <i className="microphone icon"></i>
                Show lyrics
              </a>
                )}
                {lyricsURL && (
              <a
                href={lyricsURL}
                className="ui button tiny orange button"
              >
                <i className="guitar icon"></i>
                Show chords
              </a>
                )}
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TrackDetails;