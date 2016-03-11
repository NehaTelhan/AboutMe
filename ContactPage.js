//Overall viewmodel for this screen
function EmailViewModel() {
var self = this;

  this.subjectTitle = ko.observable("Subject");
  this.bodyText = ko.observable("Type your message here");
  this.sender = ko.observable("Your name here");

  this.fullMessage = ko.computed(function() {
    return "Subject: " + this.subjectTitle() + "Message: " + this.bodyText() + "From: " + this.sender();
  }. this);
}

//Activates knockout.js
ko.applyBindings(new EmailViewModel());
