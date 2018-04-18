var commando = require('../../commando/commando').commando;
var bkBukkit = org.bukkit.Bukkit;
var bkEntityType = org.bukkit.entity.EntityType;

var game = {
    wave: 1,
    zombies: 5
};

/**
 * Usage: /hi
 */
commando('hi', function (args, player) {
    console.log('HI', args, player);
    echo(player, 'Hi ' + player.name + '!');

    // Send title to player
    bkBukkit.dispatchCommand(server.consoleSender, 'title @a title [{"text":"Wave ' + game.wave + '","color":"gold"}]');

    // Spawn zombie

    for (var i = 0 ; i < game.zombies * game.wave; i++) {
        player.location.world.spawnEntity(player.location, bkEntityType.ZOMBIE);
    }

    game.wave++;
});
