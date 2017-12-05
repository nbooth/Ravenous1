import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render(){
    //imports business component through iteration of each element from app
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map( business =>
            <Business business={business}/>
          )
        }
      </div>
    );
  }
}

export default BusinessList;
