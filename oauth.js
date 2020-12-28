const authorizeButton = document.getElementById('oauth-btn');
const scopes = "https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive.readonly"
const responseType = "token"
const clientId = "356942811395-6nkmdmnvpn25ddo7niunucs8odnoo406.apps.googleusercontent.com"
const reDirectURI = "https://dev.api.roehl.com.cn/app/login/google"

const btn = document.getElementById("btn")
btn.onclick = function() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': clientId,
                'redirect_uri': reDirectURI,
                'response_type': 'code',
                'scope': scopes,
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

