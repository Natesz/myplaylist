import React, { useState, useContext } from 'react';

import { TracksContext } from '../../state/TracksProvider';
import Track from './Track';
import AddOrEditTrack from './AddOrEditTrack';

const Tracks = () => {
  const { tracks, addNewTrack, editTrack } = useContext(TracksContext);

  /* const [ tracks, setTracks ] = useState(exampleTracks); */
  const [ open, setOpen ] = useState(false);
  const [ editedTrack, setEditedTrack] = useState({});
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

 /*  const deleteTrack = (trackId) => {
    setTracks(newTrackList => newTrackList.filter(track => track.id !== trackId));
  } */

  /* const addNewTrack = (newTrack) => {
    const maxTrackId = tracks.reduce((acc,curr) => Math.max(acc, curr.id), 0);
    setTracks([...tracks, {...newTrack, id:maxTrackId+1}]);
  } */

  /* const editTrack = (editedTrack) => {
    const mapper = (track) => {
      return track.id === editedTrack.id ? editedTrack : track;
    }
    setTracks(newTrackList => newTrackList.map(mapper));
  } */

  const startToEdit = (track) => {
    setEditedTrack(track);
    handleOpen();
  }

  const startToAddNew = () => {
    setEditedTrack({});
    handleOpen();
  }

  const handleSubmit = (track) => {
    if(typeof track.id === "number"){
      editTrack(track);
    }else{
      addNewTrack(track);
    }
  }

    return (
<>
  <div className="ui container">
    <button onClick={startToAddNew} className="ui right floated green button" id="newModal">
      <i className="plus icon"></i>
      New track
    </button>
    <h1>Tracks</h1>
    <table className="ui celled striped table">
      <thead>
        <tr>
          <th>Artist</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map(track => (
          <Track key={track.id} track={track} onEdit={() => startToEdit(track)}/>
        ))
        }
      </tbody>
    </table>
  </div>

  <AddOrEditTrack open={open} close={handleClose} onSubmit={handleSubmit} track={editedTrack}/>
  </>
    )
}

export default Tracks;
