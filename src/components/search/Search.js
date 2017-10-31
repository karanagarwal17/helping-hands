import React from 'react'
import Dashboard from '../Dashboard'
import Header from '../Header'
import SearchEngine from './SearchEngine'

class Search extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row Profile">
          <div className="col span-1-of-4">
            <Dashboard active="search"/>
          </div>
          <div className="col span-3-of-4 searchContainer">
            <SearchEngine />
          </div>
        </div>
      </div>

    )
  }
}

export default Search
