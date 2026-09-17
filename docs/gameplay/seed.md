# Filtered Seeds

## Explanation
MCSR Ranked uses its own Seed Filter to select vanilla seeds which satisfy certain conditions.
- In Ranked and Casual modes, filtered seeds are used in all matches.
- In Private rooms, filtered seeds are used by default, but can be turned off by disabling the "Use Filtered Seed" match rule.

For more efficient filtering and usability, the overworld and nether are filtered via independent seeds. Therefore, strategies that can infer some RNG in the Nether, such as the Divine Travel strategy, will not work.

## Seed Type Distribution
|    Elo*    | Village** | Shipwreck | Desert Temple | Ruined Portal | Buried Treasure |
| :--------: | :-------: | :-------: | :-----------: | :-----------: | :-------------: |
|  0 ~ 599   |    55%    |    15%    |      30%      |      0%       |       0%        |
| 600 ~ 1199 |    30%    |    25%    |      25%      |      20%      |       0%        |
|   1200+    |    20%    |    20%    |      20%      |      20%      |       20%       |

*Based on the lowest Elo of all players in the match. <br>
**Snowy and Taiga Villages only appear at 900+ Elo.

In Private Rooms, the seed type distribution is the same as in the 1200+ Elo range.

## Overworld Types

### Village
- Spawns within 7 chunks
- Contains a guaranteed Blacksmith*
- At least 7 Iron (or 4 Iron + 3 Diamonds) (including golem) with food in chests or haybales
  - With 10+ Obsidian the only guaranteed Iron is from the golem
- Iron Golem always drops 4 Iron (never 3 or 5)
- A River Biome is guaranteed within 6 chunks of the center of the village
- 3 lava pools are guaranteed near the Village OR the Blacksmith contains 8+ Obsidian for an enter with Blacksmith lava
  - Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- Taiga villages always have 10+ Obsidian enters (lava pools do still exist)

*The guaranteed Blacksmith is usually a Weaponsmith, but can instead be a Toolsmith in Desert and Taiga Villages or an Armorer in Snowy Villages.

### Shipwreck
- Spawns within 4 chunks
- At least 7 Iron (or 4 Iron + 3 Diamonds) and some food in food chest
- Suspicious stew CANNOT give poison
- No other shipwrecks, buried treasures, or irrelevant block entities near spawn (e.g. dungeons)
- Shipwreck chests will not be buried [mostly...]
- 2 Magma Ravines are guaranteed within 10 chunks of the Shipwreck
  - Filtered Magma Ravines are not generated in Frozen Ocean Biomes

### Desert Temple
- Spawns within 5 chunks
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- Some food in chests (😋 rotten flesh)
- Nearby access to wood [mostly...]
- A River biome is guaranteed within 6 chunks of the Desert Temple
- 3 lava pools are guaranteed near the temple
  - Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.

### Ruined Portal
- Spawns within 3 chunks
- Guaranteed at least 18 iron nuggets, excluding those needed to make the Bucket or Flint and Steel if needed
  - There's a chance that there won’t be enough Iron for an Iron Pickaxe
- Food in chest or animals within 5 chunks with a Flint and Steel / Fire Aspect Sword
- A light is guaranteed! (e.g. Flint and Steel, Fire Charge, Flint and extra iron nuggets)
- Enterable with Obsidian or Bucket (80/20)

### Buried Treasure
- Spawns within 5 chunks
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- No other buried treasures, shipwrecks, or irrelevant block entities near spawn (e.g. dungeons)
- 2 Magma Ravines are guaranteed within 10 chunks of the Buried Treasure
  - Filtered Magma Ravines are not generated in Frozen Ocean Biomes

## Nether Requirements

### Bastion Remnant
- Closest Bastion Remnant is always the intended Bastion Remnant, it will be at least 10 chunks closer than any other Bastion Remnant to 0,0*
- Intended Bastion Remnant is within 14 chunks of 0,0*
- Open terrain check from approximate nether entry to the Bastion Remnant
- Intended Bastion Remnant always has 3+ Iron and 5+ Obsidian somewhere in the ramparts' chests
  - For Housing this can be in any chest
  - For Bridge the Iron can be in the Lodestone chest
- Stables Bastion Remnant has at least 1 good gap

*This means that the X coordinate is 0 and Z coordinate is 0. (0, 0)

### Fortress
- Fortress origin is within 16 chunks of the intended Bastion Remnant
- Open terrain check from the Bastion Remnant to the Fortress

## The End
For the most part, The End uses the same seed as Overworld seed. And there is no filtering condition, so any seed can be selected regardless of its End generation.

## RNG
For the most part, RNG seed uses the same seed as Overworld seed. Check this [document](./rng)
