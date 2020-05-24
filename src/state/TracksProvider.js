import React, {createContext, useState} from 'react';
import { exampleTracks } from '../domain/track';

export const TracksContext = createContext();

export const TracksProvider = ({children}) => {
    const [ tracks, setTracks ] = useState(exampleTracks);

    const addNewTrack = (newTrack) => {
        const maxTrackId = tracks.reduce((acc,curr) => Math.max(acc, curr.id), 0);
        setTracks([...tracks, {...newTrack, id:maxTrackId+1}]);
      }

      const editTrack = (editedTrack) => {
        const mapper = (track) => {
          return track.id === editedTrack.id ? editedTrack : track;
        }
        setTracks(newTrackList => newTrackList.map(mapper));
      }

      const deleteTrack = (trackId) => {
        setTracks(newTrackList => newTrackList.filter(track => track.id !== trackId));
      }

    const value = { tracks, addNewTrack, editTrack, deleteTrack }
    
    return <TracksContext.Provider value={value}>{children}</TracksContext.Provider>;
};
