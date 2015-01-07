QQ = {};

QQ.requestCredential = function (options, credentialRequestCompleteCallback) {
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({service: 'qq'});
  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(
      new ServiceConfiguration.ConfigError());
    return;
  }
  var credentialToken = Random.secret();
  var loginStyle = OAuth._loginStyle('qq', config, options);
  var scope = (options && options.requestPermissions) || ['basic', 'likes', 'relationships', 'comments'];
  var flatScope = _.map(scope, encodeURIComponent).join('+');

  var loginUrl =
    'https://graph.qq.com/oauth2.0/authorize' +
      '?client_id=' + config.clientId +
      '&response_type=code' +
      '&scope=' + flatScope +
      '&redirect_uri=' + OAuth._redirectUri('qq', config) +
      '&state=' + OAuth._stateParam(loginStyle, credentialToken);

  OAuth.launchLogin({
    loginService: "qq"
    , loginStyle: loginStyle
    , loginUrl: loginUrl
    , credentialRequestCompleteCallback: credentialRequestCompleteCallback
    , credentialToken: credentialToken
  });
};
