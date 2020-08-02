const express = require('express');
const app = express();
const axios = require('axios');

app.get('/hello-f1/*', (req, res) => {
    var newpatahparam = req.path.split('/hello-f1/')[1]
    var url = 'http://ergast.com/api/'+newpatahparam
    axios.get(url)
        .then(response => {
          //console.log(response);
          //console.log(response.data);
          //console.log(response.status);
          //console.log(response.statusText);
          //console.log(response.headers);
          //console.log(response.config);
          return res.send(response.data);
        })
        .catch(error => {
          console.log(error);
          return res.send(error.response.data);
        }); 
  
  });

  app.listen(3000, () =>
  console.log(`F1 api will be listening on port 3000 !`),
);
