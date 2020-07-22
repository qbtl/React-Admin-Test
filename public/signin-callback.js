/* eslint-disable no-undef */
var mgr = new Oidc.UserManager(window.app_settings.oidc_client)
var url = apiUri + ':' + window.location.port;

mgr.signinRedirectCallback().then(function (user) {
    console.log("signin response success", user);
    window.location.assign(url + '/')
}).catch(function (err) {
    console.log(err);
});