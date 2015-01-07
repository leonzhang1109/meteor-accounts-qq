# Meteor Acccounts QQ
#### QQ account login for meteor

##Install

`cd <your-meteor-project>`

`meteor add leonzhang1109:accounts-qq`

and also add following package as pre-req -

`meteor add service-configuration`


##Setup and Usage
1. Register your app with QQ Developer Site at following url- http://open.qq.com/

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri:`<your-server-domain>:<port>/_oauth/qq`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/qq`

3. After registration, note down the clientid and client secret.
4. Now in your app do create the `accounts.js` (or `acoounts.coffee` if you use coffeescript) and put following code inside

 so,it file looks in directory tree- `<your-app-directory>/server/accounts.js`  and put the APP id and APP secret from previous step

    ```
    ServiceConfiguration.configurations.remove({
      service: "qq"
    });
    ServiceConfiguration.configurations.insert({
      service: "qq",
      clientId: "<your-client-id>",
      scope:'basic',
      secret: "<your-client-secret>"
    });
    ```
5. Now, all things are setup, you are ready to use this package
6. Add following button code for login
```
      Meteor.loginWithQQ(function (err, res) {
          if (err !== undefined)
            console.log('sucess ' + res)
          else
            console.log('login failed ' + err)
      });
```
