# RNG Standardization

## Explanation
For fair competive between players, MCSR Ranked does standardize some RNG(Random Number Generator)s of the game by **RNG Seed**. As result, every players in the match will have same rates or same orders in same seed.

In filtered seed, RNG Seed is same as Overworld seed. In private room, you can use different RNG Seed.

This document will describe standardized stuff based on RNG Seed.

## Piglin Barters
- Barters for Ender Pearls and Obsidians increased
- 6 Obsidians is guaranteed in the first 72 barter trades (8 Gold Blocks)
- 3 Ender Pearl trades are guaranteed in the first 72 barter trades (8 Gold Blocks)
- Same trades and in same trade order for all players in the match 

## Entity Drop Loots 
- Blaze Rod from Blaze rates are standardized
- Ender Pearl from Enderman rates are standardized
- Iron golem will always drop 4 Irons
- Food drops from animals and Hoglins are standardized

## Block Drop Loots
- Flint from Gravel rates are standardized
- Stick from Dead Bush rates are standardized
- Apple from Leaves rates are standardized 

## Item Usages
- Ender eye throw break rates are standardized
  - Also, 2nd throw eye will never breaks
- Hunger effect rates from Rotten Flesh is standardized 
- Endermite spawn rates from Ender Pearl throw is standardized
- Wool drops rates from sheep with shear uses are standardized

## Ender Dragon 
- Ender Dragon picks a standard node for zero cycle between 0-15 rather the regular 0-20 in vanilla, so it can still fly away, but the chance is lower and will be the same for all players in the match
- Ender dragon will force perch after 2 minutes 50 seconds (Ingame time) from spawned time or last perched time

## Mob Spawner
- Blaze spawning positions in spawners are standardized as the mod will check for up to 4 coordinates in the spawner space to spawn, and if it's not blocked by block, entity or light it will spawn
::: details Details about Spawner standardization logic
The mod tries to attempt up to 4 spots in the spawner. These 4 spots are the same for both runners no matter which spawner. If any fire, block, entity or yourself is blocking the spot, you will NOT get that blaze. The time for these 4 spots to be chosen is the same, and thus this is why the blaze x,y,z are exactly the same as well. The 4 spots the mod tries to spawn are vanilla style, so it will have a large chance closer to the center of spawner. 
:::
- Magma Cube spawning positions and sizes are standardized

## Mob Behaviors
- Monsters will not spawn in Bastion Remnant except built-in entities (Can be toggle in Private room setting)
- Monsters will not spawn in Desert Temple 
- Zombified Piglins are not trying to pathfinding into Bastion Remnant
- Ghasts are not spawn within 5 chunks from the player
- Drowned will never spawn with held Trident
- Elder Guardian will never give Mining fatigue effect to player
- Phantom spawn and cycle is standardized
- Rain/storm cycle is standardized
- Villager trade offers are standardized

## Player & Portal Behabiors
- Player's spawn coordinates are standardized
- Initial Nether entry location is standardized by spawn coordinates. The Y level behaviour is standardized to 64. 
::: details
Every portal is treated like you are building on Y64 in the overworld, however this does not guarantee Y64 in the Nether. If the Nether is buried from Y64-Y31, then your portal will be Y30. Regardless, the portal is standardized for X,Y,Z.
:::
- First blind portal* Y height to never be more than 5 blocks lower than your Nether Y height, so you get caved much less

*: First portal from Nether for travel to Stronghold.