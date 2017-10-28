import React from 'react'
import Header from './Header'
import FollowingCard from './FollowingCard'

class Following extends React.Component {
  render() {
    return (
      <div className="following">
        <Header />
        <div className="col span-4-of-4 hero">
        </div>

        <div className="col span-4-of-4 following-card">
        <FollowingCard/>
        </div>


        /*className="col span-4-of-4 hero">
        NGOdata
        Here we can give the same NGOCard.js file to look at the following NGOs*/

      </div>
    )
}
}
export default Following
