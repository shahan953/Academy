import React from 'react';
import { connect } from 'react-redux';
import{ Route, Redirect } from 'react-router-dom';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
  isAuthenticated ? 
    <Redirect to={'/authorized'}/>
  :
  <Route {...rest} component={(props)=> {
      return (
        <div>
            <Component {...props}/>
        </div>
        )
  }}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})

export default connect(mapStateToProps)(PublicRoute);