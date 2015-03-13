Template.configureLoginServiceDialogForQq.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl({replaceLocalhost: true});
  }
});

Template.configureLoginServiceDialogForQq.fields = function () {
  return [
    {property: 'clientId', label: 'App Id'},
    {property: 'secret', label: 'App Secret'}
  ];
};
