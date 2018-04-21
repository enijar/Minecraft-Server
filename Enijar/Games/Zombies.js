const utils = require('../../../modules/utils');
const inventory = require('../../../modules/inventory');
const items = require('../../../modules/items');

export default class Zombies {
    constructor(player, block) {
        this.player = player;
        this.block = block;
        this.wave = 0;
        this.difficulty = 2;
        this.maxWave = 1;
        this.arena = {
            size: 13,
            center: {
                x: 78,
                y: 66,
                z: -64
            }
        };
        this.zombieIds = [];
    }

    start() {
        console.log('GAME STARTED: Zombies');
        console.log(this.player);
        console.log(this.block);

        // Remove block
        this.block.setType(org.bukkit.Material.AIR);

        events.entityDeath(event => {
            if (this.zombieIds.length === 0 && this.wave === this.maxWave) {
                return;
            }

            const index = this.zombieIds.indexOf(event.entity.getEntityId());

            if (index > -1) {
                this.zombieIds.splice(index, 1);
            }

            if (this.zombieIds.length === 0) {
                if (this.wave === this.maxWave) {
                    this.end();
                    return;
                }

                this.nextWave();
            }
        });

        this.nextWave();
    }

    end() {
        org.bukkit.Bukkit.dispatchCommand(this.player, `title @a title [{"text":"Zombies Complete!","color":"gold"}]`);

        inventory(this.player).add(items.cookie(64));
    }

    nextWave() {
        this.wave++;

        org.bukkit.Bukkit.dispatchCommand(this.player, `title @a title [{"text":"Wave ${this.wave}","color":"gold"}]`);

        // const zombies = Math.round(this.difficulty * this.wave);
        const zombies = 1;
        const location = this.player.location;

        // Spawn zombies
        for (let i = 0; i < zombies; i++) {
            const zombie = this.player.location.world.spawnEntity(location, org.bukkit.entity.EntityType.ZOMBIE);
            zombie.setBaby(false);
            this.zombieIds.push(zombie.getEntityId());
        }
    }
}
