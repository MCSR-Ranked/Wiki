# RNG Standardization

## Explanation
For a fair and competitive nature, MCSR Ranked standardizes some RNG (Random Number Generation) through the **RNG Seed**. As a result, all players in the match will experience the same loot rates in the same order.

The RNG Seed is same as Overworld seed by default. In a private room, you can use a different RNG Seed.

This document will describe what is standardized based on RNG Seed.

## Piglin Barters
- Barter chances for Obsidian are increased by ~35%
- At least 6 Obsidian is guaranteed every 72 barters (8 Gold Blocks)
- Exactly 3 Ender Pearl trades are guaranteed every 72 barters (8 Gold Blocks)
- All players in the match have the same trades in the same order

## Mob Drop Loot
### All item drop rates from mobs are standardized, some important examples are:
- Food drops from animals and Hoglins
- Blaze Rods from Blazes
- Ender Pearls from Endermen
#### Some item drops are forced:
- Iron Golems always drop 4 Iron (never 3 or 5)

## Block Drop Loot
### All item drop rates from blocks are standardized, some important examples are:
- Sticks from Dead Bushes
- Apples from Leaves
- Flint from Gravel
- Gilded Blackstone from Gilded Blackstone
- Glowstone Dust from Glowstone

## Item Usage
- Hunger effect rates from Rotten Flesh is standardized
- Effects from Suspicious Stew are standardized
  - Also, Suspicious Stew can never give Poison
- Wool rates from shearing sheep are standardized
- Endermite spawn rates from Ender Pearl throws are standardized per dimension
- Eye of Ender throw break rates are standardized
  - Also, the 2nd eye throw will never break

## Mob Behavior
- Villager trade offers are standardized
- Drowned never spawn with a held Trident
- Elder Guardians never afflict the player with Mining Fatigue
- Monsters and Bats do not spawn in Desert Temples
- Monsters do not spawn in Bastion Remnants except built-in entities
- Zombified Piglins avoid pathfinding into Bastion Remnants
- Magma Cube splitting amount is standardized
- Ghasts do not spawn within 5 chunks of the player
- Mob spawns are standardized by position

## Mob Spawners
- Magma Cube spawning positions and sizes are standardized 
- Blaze spawning timings are standardized
- Blaze spawning positions in spawners are standardized
::: details Details about Spawner standardization logic
The mod tries to attempt up to 4 spots in the spawner. These 4 spots are the same for both runners no matter which spawner. If any fire, block, entity or yourself is blocking the spot, you will NOT get that blaze. The time for these 4 spots to be chosen is the same, and thus this is why the blaze x,y,z are exactly the same as well. The 4 spots the mod tries to spawn are vanilla style, so it will have a large chance closer to the center of spawner.
:::
- Zombie Spawners are replaced with either a Skeleton Spawner or a Spider Spawner

## Player & Portal Behaviors
- Player spawn coordinates are standardized
- Initial Nether entry location is standardized by spawn coordinates. The Y level behaviour is standardized to 64.
::: details
Every portal is treated like you are building on Y64 in the overworld, however this does not guarantee Y64 in the Nether. If the Nether is buried from Y64-Y31, then your portal will be Y30. Regardless, the portal is standardized for X,Y,Z.
:::
- First blind portal* will always spawn on the surface if built at Nether Y level 48 or above, so you rarely get caved.
- The amount of already filled in End Portal Frames per End Portal is the same between all Strongholds.

*First portal from Nether for travel to Stronghold.

## Stronghold
All the strongholds in the seed generate with the same rooms and the same layout. 
Strongholds can still be slightly different because of caves, dungeons and mineshafts.

## Ender Dragon
- The sequence of target block height offsets is standardized within each phase
  - The target block height offset for zero cycles is 0-15 blocks, as opposed to the 0-20 in vanilla
- Direction changes are standardized within each phase
- Strafe rolls are standardized
- Perch rolls are standardized
  ::: details Strafe/perch standardization details
  When the dragon spawns or rolls a strafe, a standardized random number between 0 and 1 is chosen. The dragon strafes when the probability of having not yet rolled a strafe drops below the random number.

  Perch standardization is similar, however the dragon also perches if the probability of having not yet rolled a perch drops below 0.1.
  :::
