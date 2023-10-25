$(() => {

    function updateHeader(user) {

        if (user !== null) {
            <div class="icons">
                <p id="login_container"></p>
                <i alt="Spyglass icon">Search</i>
                <i alt="Handbasket icon">Cart</i>
                <i alt="Portrait silhouette">User</i>
            </div>
            $('#login_container').text(user.name)
        }
    }
    getuserDetails()
        .then(function(json) {
            updateHeader(json.user);
        });

});