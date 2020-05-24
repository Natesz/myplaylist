import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Playlist = ( {title, tracks} ) => {
    const { playlistId } = useParams();
    return(
        <div className="ui ten wide column">
        <h3>{title}</h3>
            <div className="ui very relaxed selection list">
                {tracks.map(({artist, title, id}) => (
                    <NavLink to={`/playlists/${playlistId}/${id}`} key={id} className="item">
                    <i className="large music middle aligned icon"></i>
                        <div className="content">
                        <div className="header">{title}</div>
                        <div className="description">{artist}</div>
                    </div>
                </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Playlist;

