import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from 'semantic-ui-react';

const fields = [
    {
        name: "artist",
        label: "Artist",
        placeholder: "John Williams",
        required: true
    },
    {
        name: "title",
        label: "Title",
        placeholder: "Title",
        required: true
    },
    {
        name: "length",
        label: "Length",
        placeholder: "3:11"
    },
    {
        name: "spotify",
        label: "Spotify URL",
        placeholder: "https://"
    },
    {
        name: "lyrics",
        label: "Lyrics URL",
        placeholder: "https://"
    },
    {
        name: "gitartab",
        label: "Gitar Tab URL",
        placeholder: "https://"
    }
]

const defaultFields = fields.reduce((acc, curr) => ({...acc, [curr.name]: ""}), {});

const useForm = (defaultFields) => {
  const [values, setValues] = useState(defaultFields);
  const reset = useCallback((newState) => setValues(newState), []);
    
  return {values, setValues, reset};
}

const useValidatedForm = (defaultFields) => {
  const {values, setValues, reset} = useForm(defaultFields);
  const [ error, setError ] = useState({}); 

  useEffect(() => {
    const newError = {};
    fields.forEach((field) => {
      if(field.required && values[field.name].trim() === ""){
        newError[field.name] = `The ${field.label} field is required.`;
      }
    });
    setError(newError);
  }, [values]);

  const isError = Object.values(error).some((message) => message);

  return {values, setValues, reset, error, isError};
}

const AddOrEditTrack = ({open, close, onSubmit, track}) => {

  const {values, setValues, reset, error, isError} = useValidatedForm(defaultFields);
    
    useEffect(() => {
      if(open){
        reset({ ...defaultFields, ...track });
      }
    }, [open, reset, track])

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(values);

      if(isError) return;
      close();
    }

    const handleChange = (event) => {
      setValues({...values, [event.target.name] : event.target.value});
    }
    
    return(
        <Modal className="ui modal" open={open} onClose={close}>
    <i className="close icon" onClick={close}></i>
    <div className="header">Add new Track</div>
    <div className="content">
      <div className="description">
        <form id='add-new-track-form' className="ui form three column grid" onSubmit={handleSubmit}>
            {fields.map(field => (
                <div key={field.name} className="column field">
                <label htmlFor={field.name}>{field.label}</label>
                <input value={values[field.name]} onChange={handleChange} type="text" name={field.name} id={field.name} placeholder={field.placeholder}/>
              </div>
            ))}
        </form>
        {isError && <ul className="ui negative message">{Object.entries(error).map(([key, message]) => (
          <li key={key}>{message}</li>
        ))}</ul>}
      </div>
    </div>
    <div className="actions">
      <div className="ui black deny button" onClick={close}>
        Cancel
      </div>
      <button type="submit" form="add-new-track-form" className="ui positive right labeled icon button" onClick={handleSubmit}>
        Add
        <i className="plus icon"></i>
      </button>
    </div>
  </Modal>
    )
}

export default AddOrEditTrack;