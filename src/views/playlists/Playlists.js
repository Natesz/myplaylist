import React, {useState, useContext} from 'react';
import { exampleTracks } from '../../domain/track';
import { useParams } from 'react-router-dom';
import { PlaylistsContext } from '../../state/PlaylistsProvider';
import { TracksContext } from '../../state/TracksProvider';
import TrackDetails from './TrackDetails';
import PlaylistLists from './PlaylistLists';
import Playlist from './Playlist';
import AddNewPlaylist from './AddNewPlaylist';

const Playlists = () => {
  
const { playlistId, trackId } = useParams();
const selectedPlaylistId = Number(playlistId);
const selectedTrackId = Number(trackId);

const { tracks } = useContext(TracksContext);
const { playlists, addNewPlaylist } = useContext(PlaylistsContext);
 console.log({tracks})
const [ open, setOpen ] = useState(false);

const playlistsWithTracks = playlists.map(playlist =>({
  ...playlist,
  tracks: playlist.tracks
    .map(trackId => tracks.find(track => track.id === trackId))
    .filter(track => track)
}))

const selectedPlaylist = playlistsWithTracks.find(({id}) => id===selectedPlaylistId);
const selectedTrack = exampleTracks.find(({id}) => id===selectedTrackId);

const handleOpen = () => {setOpen(true)};
const handleClose = () => {setOpen(false)};

/* const addNewPlaylist = ({title}) => {
  const maxId = playlists.reduce((acc,curr) => Math.max(acc,curr.id),0);
  setPlaylists([...playlists, {id: maxId+1, title: title, tracks: []}])
} */

    return (
<>
  <div className="ui container">
    <h1>My Playlists</h1>
    <div className="ui stackable two column grid">
      <div className="ui six wide column">
        <h3>Playlists</h3>
        <PlaylistLists addNew={handleOpen} playlist={playlistsWithTracks}/>
      </div>
        { selectedPlaylist && <Playlist {...selectedPlaylist}/>}
    </div>
    <div className="ui divider"></div>
    <TrackDetails {...selectedTrack}/>
  </div>

  <AddNewPlaylist open={open} close={handleClose} onSubmit={addNewPlaylist}/>
  </>
)
    }

export default Playlists;