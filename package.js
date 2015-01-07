Package.describe({
  summary: "QQ account login for meteor",
  "version": "0.2.2",
  "git": "https://github.com/leonzhang1109/meteor-accounts-qq",
  "name": "leonzhang1109:accounts-qq"
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.add_files('qq_client.js', 'client');
  api.add_files('qq_server.js', 'server');
  api.add_files("qq.js");

  api.export('QQ');

  api.add_files([
    'qq_configuration.html',
    'qq_configuration.js',
    'qq_login_button.css'
  ],'client');
});
