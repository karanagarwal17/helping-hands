import React from 'react'

class NgoList extends React.Component {

  render() {
    const data = this.props.data
    return (
      <article className="ngo-card">
        <header className="card-thumb">
          <a href="#"><img src="http://lorempicsum.com/futurama/370/245/3"/></a>
        </header>

        <div className="card-body">
          <div className="card-category">
            <a href="#">{data.head_name}</a>
          </div>
          <h5 className="card-title">
            <a href="#">{data.org_name}</a>
          </h5>
          <p className="card-description">Phone: {data.phone_number}</p>
          <p className="card-description">City: {data.address.city}</p>
          <p className="card-description">Email: {data.email}</p>
        </div>

        <footer className="card-footer">
          <button className="card-button" onClick={this.props.accept(data._id)}>Accept</button>
          <button className="card-button" onClick={this.props.reject(data._id)}>Reject</button>
        </footer>
      </article>
    )
  }
}

export default NgoList
