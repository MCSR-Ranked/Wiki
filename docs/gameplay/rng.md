# RNG Standardization

## Explanation
For a fair and competitive nature, MCSR Ranked standardizes some RNG (Random Number Generation) through the **RNG Seed**. As a result, all players in the match will experience the same loot rates in the same order.

The RNG Seed is same as Overworld seed by default. In private room, you can use a different RNG Seed.

This document will describe what is standardized based on RNG Seed.

## Piglin Barters
- Barter chances for Obsidian is increased by approximately 3.5%
- 6 Obsidian and 3 ender pearl trades are guaranteed for every 72 barters (8 Gold Blocks)
- All players in the match have the same trades in the same order

## Entity Drop Loot
- Blaze Rod rates from Blazes are standardized
- Ender Pearl rates from Endermen are standardized
- Iron Golems will always drop 4 Iron
- Food drops from animals and Hoglins are standardized

## Block Drop Loot
- Flint rates from Gravel are standardized
- Sticks rates from Dead Bushes are standardized
- Apples rates from Leaves are standardized

## Item Usage
- Eye of Ender throw break rates are standardized
  - Also, the 2nd eye throw will never break
- Hunger effect rates from Rotten Flesh is standardized
- Endermite spawn rates from Ender Pearl throws is standardized
- Wool rates from sheep while using shears are standardized

## Ender Dragon
- Ender Dragon picks a standard node for zero cycle between 0-15 rather the regular 0-20 in vanilla, so it can still fly away, but the chance is lower and will be the same for all players in the match
- Ender Dragon will force perch after 2 minutes 50 seconds (in-game time) from the spawned time or the last perched time

## Mob Spawners
- Blaze spawning timings are standardized
- Blaze spawning positions in spawners are standardized
::: details Details about Spawner standardization logic
The mod tries to attempt up to 4 spots in the spawner. These 4 spots are the same for both runners no matter which spawner. If any fire, block, entity or yourself is blocking the spot, you will NOT get that blaze. The time for these 4 spots to be chosen is the same, and thus this is why the blaze x,y,z are exactly the same as well. The 4 spots the mod tries to spawn are vanilla style, so it will have a large chance closer to the center of spawner.
:::
- Magma Cube spawning positions and sizes are standardized

## Mob Behavior
- Monsters do not spawn in Bastion Remnants except built-in entities (Can be toggled in Private Room settings)
- Monsters do not spawn in Desert Temples
- Zombified Piglins avoid pathfinding into Bastion Remnants
- Ghasts do not spawn within 5 chunks of the player
- Drowned never spawn with a held Trident
- Elder Guardians never afflict the player with Mining Fatigue
- Phantoms spawn and cycle is standardized
- Rain/storm cycle is standardized
- Villager trade offers are standardized

## Player & Portal Behaviors
- Player spawn coordinates are standardized
- Initial Nether entry location is standardized by spawn coordinates. The Y level behaviour is standardized to 64.
::: details
Every portal is treated like you are building on Y64 in the overworld, however this does not guarantee Y64 in the Nether. If the Nether is buried from Y64-Y31, then your portal will be Y30. Regardless, the portal is standardized for X,Y,Z.
:::
- First blind portal* will always spawn on the surface if built at Nether Y level 48 or above, so you rarely get caved.

*: First portal from Nether for travel to Stronghold.
