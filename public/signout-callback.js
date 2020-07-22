/* eslint-disable no-undef */
var mgr = new Oidc.UserManager(window.app_settings.oidc_client);
var url = apiUri + ':' + window.location.port;
console.log(url)
mgr.signoutRedirectCallback().then(function (resp) {
    console.log("signout response success", resp);
    window.location.assign(url + '/')
}).catch(function (err) {
    console.log(err);
});