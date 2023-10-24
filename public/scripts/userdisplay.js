$(() => {

    function updateHeader(user) {

        if (user !== null) {
            $('#login_container').text(user.name)
        }
    }
    getuserDetails()
        .then(function(json) {
            updateHeader(json.user);
        });
});