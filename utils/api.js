//api call

const axios = require('axios');

 var gitResponse;

 function getUser(username){
 gitResponse = axios.get(`https://api.github.com/users/${username}`)
    .then(function(response) {
      // console.log(response);
      // console.log(response.data.avatar_url);
      // console.log(response.email);

      return  response;
    })

    .catch(function(error){
      console.log(error);
    })
    console.log(gitResponse)
    return gitResponse;
    
  }

  // function getUser(email){
  //   gitResponse = axios.get(`https://api.github.com/users/${email}`)
  //   .then(functon(response) {
  //     console.log(response);
  //   return response;
  //   })
  // }


module.exports = getUser;
