const apiKey = '5iqMMOjBHmxKIsbGNW5Uh0yzSqMkl02BGt0FrRSmApT_E7RFKyfo3bhin6C4cm02k9WIVXIUoZ4uwaeXGRXjAvED0MmrgKFXF_PfyBFHrR4XstNrJAxIgcf2x1AwWnYx';
let accessToken = '';

//https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`

const Yelp = {

  // getAccessToken(){
  //   if(accessToken){
  //     return new Promise(resolve => {
  //       resolve(accessToken);
  //     });
  //   }
  //   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`, {method: 'POST'}).then(response => {
  //     if(response.ok){
  //       return response.json();
  //     }
  //     throw new Error('Request failed!');
  //   }).then(jsonResponse => {
  //     accessToken = jsonResponse.access_token;
  //   });
  //   //request a new access token
  // },
    //prepend fetch url with anywhere in order to prevent restricted access from CORS
    search(term, location, sortBy){
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
              Authorization: `Bearer ${apiKey}`
            }
        }
        ).then(
          response => {
            if(response.ok){
              return response.json();
            }
          }
        ).then(jsonResponse => {
            if(jsonResponse.businesses){
              return jsonResponse.businesses.map(business => (
                  {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  }
              ));
            }
            throw new Error('Request failed!');
      });

  }
};

export default Yelp;
