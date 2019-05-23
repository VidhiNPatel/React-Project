const apiKey= '8HKCnMacqspXL6wduGaAc9BD8I1-232Ud560PZ-6USpzk-VBbu4-CiEJmCsDabsPW5Kcl9bYaFL1x2hfbaPHi-_dBmYHQSdz-7Yn52fOZxlGmHepoMei856hMwznXHYx';

const Yelp = {
  search(term , location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}` ,
                    { headers : {
                      Authorization: `Bearer ${apiKey}`
                      }
                    }
                  ).then((response) => {
                      return response.json();
                  }).then((jsonResponse) => {
                      if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map((business) => {
                          return {
                            id : business.id,
                            imageSrc : business.image_url,
                            name :business.name,
                            address : business.location.address1,
                            city : business.location.city,
                            state : business.location.state,
                            zipCode : business.location.zip_code,
                            category : business.categories[0].title,
                            rating : business.rating,
                            reviewCount : business.review_count
                          }
                        });
                      }
                  });
    }
}

export default Yelp;