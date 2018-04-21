const commando = require('../../commando/commando').commando;
const bkBukkit = org.bukkit.Bukkit;
const bkEntityType = org.bukkit.entity.EntityType;

const game = {
    wave: 1,
    zombies: 5
};

commando('hi', (args, player) => {
    echo(player, `Hi ${player.name}!`);

    // Send title to player
    bkBukkit.dispatchCommand(server.consoleSender, `title @a title [{"text":"Wave ${game.wave}","color":"gold"}]`);

    // Spawn zombies
    for (let i = 0 ; i < game.zombies * game.wave; i++) {
        player.location.world.spawnEntity(player.location, bkEntityType.ZOMBIE);
    }

    game.wave++;
});
