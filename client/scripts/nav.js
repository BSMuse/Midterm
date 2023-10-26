$(() => {

    function updateHeader(user) {

        if (user !== null) {
            $('#login_container').text('Welcome ' + user.name)
        }
    }
    getuserDetails()
        .then(function(json) {
            updateHeader(json.user);
        });

});