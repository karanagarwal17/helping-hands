import React from 'react'




class FollowingCard extends React.Component {
  render() {
    return (
      <article className="ngo-card">
        <header className="card-thumb">
          <a href="#"><img src="http://lorempicsum.com/futurama/370/245/3"/></a>
        </header>

        <div className="card-body">
          <div className="card-category">
            <a href="#">Women safety</a>
          </div>
          <h5 className="card-title">
            <a href="#">Go on</a>
          </h5>
          <p className="card-description">Phone: 9782976977</p>
          <p className="card-description">City: Jaipur</p>
          <p className="card-description">Email: Meetaasha29@gmail.com</p>
        </div>

        <footer className="card-footer">
          <button className="card-button" >Unfollow</button>
        </footer>
      </article>    )
}
}
export default FollowingCard
