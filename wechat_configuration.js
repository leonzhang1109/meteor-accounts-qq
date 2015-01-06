Template.configureLoginServiceDialogForWechat.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForWechat.fields = function () {
  return [
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
