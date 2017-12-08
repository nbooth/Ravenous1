import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
}

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    //term: refers to search teram in search input
    //location refers to location to serach near from location input
    //sort by represents the selected sorting option to use
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
  }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>
    });
  }

  //method checks value of searchbar input and compares it against
  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }
  }

  //changes state of sortby to that of input
  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }
  //handles change of term key in state
  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  //handles change of location key in state
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }
  //handles the total search of term, location, and sortBy when passed in by
  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()};
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>{'Let\'s go'}</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
