import React from 'react';
import PropTypes from 'prop-types';
import { MdUpload } from "react-icons/md";
import { UploadButton } from './style'

function index({id, name, accept, cb}) {
  return (
    <UploadButton>
          <label htmlFor="profilePicture">
              <MdUpload/>
          </label>
          <input type="file" id={id} name={name} accept={accept} {...cb} />
    </UploadButton>
  ) 
}

index.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    accept: PropTypes.string.isRequired,
    cb: PropTypes.object
}

export default index;
