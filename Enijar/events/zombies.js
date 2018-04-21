import Zombies from "../Games/Zombies";

const ZOMBIE_GAME_BLOCK = {
    x: 78,
    y: 66,
    z: -64
};

events.blockDamage(event => {
    const block = event.getBlock();

    if (!(
            block.x === ZOMBIE_GAME_BLOCK.x &&
            block.y === ZOMBIE_GAME_BLOCK.y &&
            block.z === ZOMBIE_GAME_BLOCK.z)
    ) {
        return;
    }

    const player = event.getPlayer();
    const zombies = new Zombies(player, block);

    zombies.start();
});
