import React from 'react'

class NgoList extends React.Component {
  render() {
    return (
      <article className="ngo-card">
        <header className="card-thumb">
          <a href="#"><img src="http://lorempicsum.com/futurama/370/245/3"/></a>
        </header>

        <div className="card-body">
          <div className="card-category">
            <a href="#">Photos</a>
          </div>
          <h5 className="card-title">
            <a href="#">We're on a highway to hell!</a>
          </h5>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
        </div>

        <footer className="card-footer">
          <button className="card-button">Accept</button>
          <button className="card-button">Reject</button>
        </footer>
      </article>
    )
  }
}

export default NgoList
