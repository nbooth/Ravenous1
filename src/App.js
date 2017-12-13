//import React from 'react';
import './App.css';
import React, { Component } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  //simulator for pressing butron to search
  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({'businesses': businesses});
    });
    //console.log(this.state.businesses);
  }
  //<BusinessList businesses={this.state.businesses} />
  render() {
    //imports businesslist and hence its class in order to create a component
    //add searchBar functionality inside of <SearchBar/> component
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
