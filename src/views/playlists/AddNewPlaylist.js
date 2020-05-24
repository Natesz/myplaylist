import React, {useState, useEffect, useRef } from 'react';
import { Modal } from 'semantic-ui-react';

const AddNewPlaylist = ({ open, close, onSubmit }) => {

    const inputRef = useRef(null);
    const [ titleValue, setTitleValue ] = useState("");
    const [ error, setError ] = useState(null);

    useEffect(() => {
      if(open){
        setTitleValue("");
        inputRef.current.focus();
      }
    },[open])

    const handleSubmit = () => {

        const trimmedInput = titleValue.trim();
        if(trimmedInput === ""){
            setError("This field is required!");
            return;
        }else{
            setError(null);
        }

        onSubmit({title: titleValue });
        close();
    }

    const handleChange = (event) => {
        setTitleValue(event.target.value);
    }

    return(
    <Modal className="ui modal" open={open} onClose={close}>
    <i className="close icon" onClick={close}></i>
    <div className="header">Add new Playlist</div>
    <div className="image content">
      <div className="description">
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input ref={inputRef} required type="text" placeholder="My Playlist" value={titleValue} onChange={handleChange}/>
          </div>
          {error && <p className="ui negative message">{error}</p>}
        </div>
      </div>
    </div>
    <div className="actions">
      <div className="ui black deny button" onClick={close}>
        Cancel
      </div>
      <button className="ui positive right labeled icon button" onClick={handleSubmit}>
        Add
        <i className="plus icon"></i>
      </button>
      
    </div>
  </Modal>
    )
}

export default AddNewPlaylist;