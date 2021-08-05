import React from 'react';
import ProgressBar from '../comps/ProgressBar';

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setError('');
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {/* {file && <>{file.name}</>} */}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
