import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { searchImages } from '../../api';
import {selectImageAction, searchMediaAction} from './reducer'
import './style.css';
import {bindActionCreators} from 'redux';

import * as Actions from './reducer';
import SelectedImage from './SelectedImage'
const ViewImages = ({images, selectImageAction, searchMediaAction, selectedImage = images[0]}) => {
  let input;
 
  return (
   <div className="image-scroller">
    <div>
      <SelectedImage {...selectedImage}/>
    </div>
     <div>
      <input type="text" ref = { 
        (node) => { input = node }
      } />
      <button onClick={() => { 
        searchMediaAction(input.value);
        input.value = '' 
      }
      }>Search Images</button>
    </div>
      <div>
       <h2>All Images Gallery</h2>
      </div>
       <div className="image-thumbs">
      {images.map((image, i) => (
       <div key={i} onClick={() => selectImageAction(image)}>
          <img src={image.mediaUrl} />
        </div>
      ))} </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    images: state.images,
    selectedImage: state.selectedImage,
  }
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapActionCreatorsToProps)(ViewImages)