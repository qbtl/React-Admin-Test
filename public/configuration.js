/* eslint-disable no-unused-vars */

var apiUri = window.location.protocol + "//" + window.location.hostname;

var app_settings = {
    "oidc_client": {
        authority: `${apiUri}:3001/`,
        client_id: 'test-admin',
        client_secret: 'test-secret',
        redirect_uri: `${apiUri}:3000/signin-callback.html`,
        post_logout_redirect_uri: `${apiUri}:3000/signout-callback.html`,
        response_type: 'code',
        scope: 'openid email roles offline_access',

        //popup_redirect_uri:'http://127.0.0.1:8000/implicit/popup-signin.html',
        //popup_post_logout_redirect_uri:'http://127.0.0.1:8000/implicit/popup-signout.html',

        silent_redirect_uri: `${apiUri}:3000/silent-callback.html`,
        accessTokenExpiringNotificationTime: 5,
        automaticSilentRenew: true,
        //silentRequestTimeout:10000,

        filterProtocolClaims: false,
        loadUserInfo: true
    }
}