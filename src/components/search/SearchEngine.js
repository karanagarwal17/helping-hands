import React from 'react'


class Search extends React.Component {
  render() {
    return (
      <div>
      <input id="query" type="text" className="searchBox" placeholder="Search"></input>
      <select className="searchDropBox">
       <option value="volunteer">Volunteer</option>
       <option value="ngo">Ngo</option>
     </select>
     <br/>

      <button class="search">search</button>
      </div>


    )
  }
}

export default Search
