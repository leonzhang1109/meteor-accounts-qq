# Meteor Acccounts Wechat
#### Wechat account login for meteor

##Install

`cd <your-meteor-project>`

`meteor add leonzhang1109:accounts-wechat`

and also add following package as pre-req -

`meteor add service-configuration`


##Setup and Usage
1. Register your app with Wechat Developer Site at following url- http://dev.wechat.com/

2. Fill out the given form but make sure that redirect url as shown as follows-

  OAuth redirect_uri:`<your-server-domain>:<port>/_oauth/wechat`

  For e.g.redirect url for localhost : `http://localhost:3000/_oauth/wechat`

3. After registration, note down the AppId and AppSecret.
4. Now in your app do create the `accounts.js` (or `acoounts.coffee` if you use coffeescript) and put following code inside

 so,it file looks in directory tree- `<your-app-directory>/server/accounts.js`  and put the APP id and APP secret from previous step

    ```
    ServiceConfiguration.configurations.remove({
      service: "wechat"
    });
    ServiceConfiguration.configurations.insert({
      service: "wechat",
      appId: "<your-app-id>",
      scope:'basic',
      secret: "<your-app-secret>"
    });
    ```
5. Now, all things are setup, you are ready to use this package
6. Add following button code for login
```
      Meteor.loginWithWechat(function (err, res) {
          if (err !== undefined)
            console.log('sucess ' + res)
          else
            console.log('login failed ' + err)
      });
```
