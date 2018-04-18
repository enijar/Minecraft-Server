import {commando} from "../../server/scriptcraft/plugins/commando/commando";

/**
 * Usage: /hi
 */
commando('hi', (args, player) => {
    echo(player, `Hi ${player.name}`);
});
