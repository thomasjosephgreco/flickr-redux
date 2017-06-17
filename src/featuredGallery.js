import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewImages from './features/gallery/components/IterateImages';
import { connect } from 'react-redux'
import * as Actions from './features/gallery/state/reducer'
import { fetchImages, fetchFeaturedGallery } from './api'
import {bindActionCreators} from 'redux';

class FeaturedGallery extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchFeaturedGallery())
  }

  render() {
    return (
      <div className="image-page">
        <ViewImages />
      </div>
    );
  }
}



export default connect()(FeaturedGallery);
