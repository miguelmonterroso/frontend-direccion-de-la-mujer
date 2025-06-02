var axios = require('axios');
var data = '{\n    "apiuser" : "B7mRJF",\n    "password" : "ik5HDJ",\n    "key": "3174-1628-2373-7173-9198"\n}';

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://app.tilopay.com/api/v1/loginSdk',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
