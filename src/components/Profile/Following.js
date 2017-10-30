import React from 'react'
import FollowingCard from './FollowingCard'

class Following extends React.Component {
  render() {
    return (
      <div>
        <div className="followingCard">
          <FollowingCard/>
        </div>
        <div className="followingCard">
          <FollowingCard/>
        </div>
      </div>

    )
  }
}

export default Following
