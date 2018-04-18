import {commando} from "commando";

/**
 * Usage: /hi
 */
commando('hi', (args, player) => {
    echo(player, `Hi ${player.name}`);
});
