$(() => {

  function updateHeader(user) {
    if (user !== null) {
      $('#login_container').text('Welcome ' + user)
    }
  }
  getuserDetails()
    .then(function(user) {
      console.log("user is", user.users.name);
      updateHeader(user.users.name);
    });

});