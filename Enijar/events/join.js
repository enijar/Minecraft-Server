/* global events */

events.playerJoin(function (event) {
    var message = '§6Welcome, ' + event.player.name +' to the Enijar server!';

    echo(event.player, message);
});
