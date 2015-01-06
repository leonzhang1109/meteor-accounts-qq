Wechat = {};

Oauth.registerService('wechat', 2, null, function(query) {

  var response = getTokenResponse(query);
  var accessToken = response.access_token;
  var identity = response.user;

  var serviceData = _.extend(identity, {accessToken: response.access_token});

  return {
    serviceData: serviceData,
    options: {
      profile: { name: identity.full_name },
      services: { wechat: identity }
    }
  };
});

var getTokenResponse = function (query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'wechat'});

  if (!config)
    throw new ServiceConfiguration.ConfigError();

  var response;
  try {
    response = HTTP.post(
      "https://api.wechat.com/cgi-bin/token", {
        params: {
          code: query.code,
          appid: config.clientId,
          redirect_uri: OAuth._redirectUri("wechat", config),
          secret: OAuth.openSecret(config.secret),
          grant_type: 'authorization_code'
        }
      });

    if (response.error) // if the http response was an error
        throw response.error;
    if (typeof response.content === "string")
        response.content = JSON.parse(response.content);
    if (response.content.error)
        throw response.content;
  } catch (err) {
    throw _.extend(new Error("Failed to complete OAuth handshake with Wechat. " + err.message),
                   {response: err.response});
  }

  return response.content;
};

Wechat.retrieveCredential = function(credentialToken, credentialSecret) {
  return Oauth.retrieveCredential(credentialToken, credentialSecret);
};
