import { UserManager } from 'oidc-client';

const userManager = new UserManager(window.app_settings.oidc_client);

export default {
    // called when the user attempts to log in
    login: () => {
        console.log("login called")
        return new Promise((resolve, reject) => {
            userManager.signinRedirect({state: 'code'}).then(function() {
                console.log("Login pending");
                resolve()
            }).catch(function(err) {
                console.log("An error occured in the login procedure", err)
                reject()
            })
        })
    },
    // called when the user clicks on the logout button
    logout: () => {
        console.log("logout called")
        return new Promise((resolve, reject) => {
            userManager.getUser().then(function(user) {
                if (user !== null) {
                    userManager.signoutRedirect().then(function() {
                        console.log("Logout pending")
                        resolve()
                    }).catch(function(err) {
                        console.log("An error occured in the logout procedure", err)
                        reject()
                    })
                } else {
                    resolve()
                }
            }).catch(function(err) {
                console.log("An error occurred", err)
            })
        })
    },
    // called when the API returns an error
    checkError: () => {
        console.log("checkError called")
        return new Promise((resolve, reject) => {

        })
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        console.log("checkAuth called")
        return new Promise((resolve, reject) => {
            userManager.getUser().then(function(user) {

                if (user !== null) {
                    console.log("Log in as " + user.profile.sub);
                    resolve();
                } else {
                    reject();
                }
                
            }).catch(function(err) {
                console.log("Get user in checkAuth failed, please login", err);
                reject()
            })
        })
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        console.log("getPermisssions called")
        return new Promise((resolve, reject) => {
            userManager.getUser().then(function(user) {
                if (user !== null) {
                    console.log("Get User worked", user.profile.roles)
                resolve()
                } else {
                    reject()
                }
            }).catch(function(err) {
                console.log("Get user in getPermissions failed, please login", err)
                reject()
            })
        })
    },
};