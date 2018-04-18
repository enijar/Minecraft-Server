var commando = require('../commando/commando').commando;

/**
 * Usage: /hi
 */
commando('hi', function (args, player) {
    console.log('HI', args, player);
    echo(player, 'Hi ' + player.name);
});
