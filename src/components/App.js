import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }



  render() {
  
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav />
            {this.props.loading === true ? null
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' render={() => (<NewTweet title={'Compose New Tweet'} />)} />
              </div>}}
          </div>
        </Fragment>
      </Router>
      
    )
  }
  // <Dashboard />
}

function mapStateToProps({ loading }) {
  return {
    loading: loading === null
  }
}

export default connect(mapStateToProps)(App)