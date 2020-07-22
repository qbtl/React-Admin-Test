/* eslint-disable no-undef */
var mgr = new Oidc.UserManager(window.app_settings.oidc_client);

mgr.signinSilentCallback()