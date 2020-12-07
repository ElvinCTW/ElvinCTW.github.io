function init() {
  gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    gapi.auth2.init({
      client_id: '230518717986-rs97e5pu20dcmm4f0m0d5kq33g4s9hln.apps.googleusercontent.com'
    }).then((onInit, onError) => {

    })


  });
}

const authorizeButton = document.getElementById('oauth-btn');
