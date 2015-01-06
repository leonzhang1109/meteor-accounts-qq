Accounts.oauth.registerService('wechat');

if (Meteor.isClient) {
  Meteor.loginWithWechat = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Wechat.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.wechat'],
    forOtherUsers: [
      'services.wechat.username',
      'services.wechat.full_name',
      'services.wechat.profile_picture'
    ]
  });
}
