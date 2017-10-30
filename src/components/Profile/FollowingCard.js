import React from 'react'

class FollowingCard extends React.Component {
  render() {
    return (
      <div>
      <div className=" row Profile">
      <div className="col span-2-of-7 HorizontalImageContainer">
      <img src="img/background.jpg" alt="Profile icon" className="hImage"/>
      </div>
      <div className="col span-4-of-7 HorizontalDetailsContainer">
      <ul>
        <li className="row Profile">
          <div className="col span-1-of-2 detailTitle">Helping hands</div>
          <div className="col span-1-of-2 ngotype">Orphanage</div>
        </li><br/>
        <li className="email">Meetaasha29@gmail.com</li><br/>
        <li>E-305 Vaishali nagar Jaipur 9782976966</li>
      </ul>
      </div>
      <div className="col span-1-of-7 HorizontalButtonContainer">
      <button class="button">Unfollow!</button>
      </div>
      </div>
      </div>
)
}
}
export default FollowingCard
