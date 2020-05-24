import React from 'react';
import { NavLink } from 'react-router-dom';

const PlaylistLists = ({playlist, addNew}) => {
  
    return(
        <div className="ui very relaxed selection list">
          {playlist.map(({title, id, tracks}) => (
              <NavLink to={`/playlists/${id}`} key={id} className="item">
                <i className="large compact disc middle aligned icon"></i>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="description">{`${tracks.length} songs`}</div>
                </div>
              </NavLink>
            ))}
          
          <div className="item" id="newPlaylist" onClick={addNew}>
            <i className="large green plus middle aligned icon"></i>
            <div className="content">
              <div className="header">New</div>
              <div className="description">Create a new playlist</div>
            </div>
          </div>
        </div>
    )
}
/*
PlaylistLists.propTypes = {
  clicked: PropType.func.required
}*/

export default PlaylistLists;