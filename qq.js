Accounts.oauth.registerService('qq');

if (Meteor.isClient) {
  Meteor.loginWithQq = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Qq.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.qq'],
    forOtherUsers: ['services.qq.nickname']
  });
}
