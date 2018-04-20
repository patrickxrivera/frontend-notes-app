import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAuthStatusFrom } from '../../../reducers/auth';

export default (ComposedComponent) => {
  class Authentication extends Component {
    PropTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => ({
    isAuthenticated: getAuthStatusFrom(state)
  });

  return connect(mapStateToProps)(Authentication);
};
