import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'


class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { tweetsId } = this.props
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {tweetsId.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
            
          ))}
        </ul>
      </div>
    )
  }
}


function mapStateToProps({ tweets }) {
  return {
    tweetsId: Object.keys(tweets)
      .sort((a,b) => tweets[b].timeStamp - tweets[a].timeStamp).reverse()
  }
}


export default connect(mapStateToProps)(Dashboard)