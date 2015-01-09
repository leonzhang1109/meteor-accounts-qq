Accounts.oauth.registerService('qq');

if (Meteor.isClient) {
  Meteor.loginWithQq = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    QQ.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.qq'],
    forOtherUsers: [
      'services.qq.username',
      'services.qq.full_name',
      'services.qq.profile_picture'
    ]
  });
}
