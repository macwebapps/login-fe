/**
 * Created by mac on 25/4/17.
 */
$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8090/login/user",
    type: 'GET',
    headers: {
      'Authorization':'Basic dXNlcjp1c2Vy'

      //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
      //'Content-Type':'application/json'
    }
  }).then(function(data, status, jqxhr) {
    $('.cors-response').append(JSON.stringify(data));
    console.log(jqxhr);
  });
});

