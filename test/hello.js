/**
 * Created by mac on 25/4/17.
 */
$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8090/login",
    type: 'POST',
    headers: {
      'Content-Type': 'application/json'

      //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
      //'Content-Type':'application/json'
    },
    data : JSON.stringify({ "username": "user", "password" : "user" })
  }).then(function(data, status, jqxhr) {
    $('.cors-response').append(JSON.stringify(data));
    console.log(jqxhr);
  });
});

