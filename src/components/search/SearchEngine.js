import React from 'react'


class Search extends React.Component {
  render() {
    return (
      <div>
      <div className="row Profile">
      <input id="query" type="text" className="col span-8-to-9 searchBox" placeholder="Search"></input>
      <div className="col span-1-to-9 dropdown">
      <div className="dropbtn">
      <div className="dropbtnLines"></div>
      <div className="dropbtnLines"></div>
      <div className="dropbtnLines"></div>

      </div>

      <div className="dropdown-content">
      <a href="#">Volunteer</a>
       <a href="#">NGO</a>
   </div>
 </div>
 </div>
      <button className="search">search</button>

      </div>
    )
  }
}

export default Search
