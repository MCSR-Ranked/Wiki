# Filtered Seeds

## Explanation
MCSR Ranked uses its own Seed Filter to select vanilla seeds which satisfy certain conditions.
- In Ranked and Casual modes, filtered seeds are used in all matches.
- In Private rooms, filtered seeds are used by default, but can be turned off by disabling the "Use Filtered Seed" match rule.
- As of v5.8.18: there are 1,000,000 seeds total, and old seeds have been removed from the pool.

For more efficient filtering and usability, the Overworld and Nether are filtered via independent seeds. Therefore, strategies that can infer some RNG in the Nether, such as Divine Travel, will not work.

## Seed Type Distribution
|    Elo*    | Village | Shipwreck | Desert Temple | Ruined Portal | Buried Treasure |
| :--------: | :-----: | :-------: | :-----------: | :-----------: | :-------------: |
|  0 ~ 599 †  |   55%   |    15%    |      30%      |      0%       |       0%        |
| 600 ~ 1199 † |   30%   |    25%    |      25%      |      20%      |       0%        |
|   1200+    |   20%   |    20%    |      20%      |      20%      |       20%       |

*: Based on the average Elo Rate of all players in the match.

†: Taiga and Tundra villages do not appear in Ranked mode for Coal and Iron ranks (Elo 0-899).

In Private Rooms, each seed has a 20% distribution, like the 1200+ range.

## Overworld Types

As of version v5.8.18, the intended overworld structure can be generated in any quadrant from spawn; position-based structure finding (e.g., +X, +Z assumption in all previous versions) no longer reliably works.

### Village
- Spawns within 7 chunks
- Contains a guaranteed Blacksmith*
- 3 lava pools are guaranteed near the Village OR the Blacksmith contains 8+ Obsidian for an enter with Blacksmith lava
- Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools, but the artificial ones are guaranteed.
- Taiga villages always have 10+ Obsidian enters (lava pools do still exist)
- Iron Golem always drops 4 Iron (never 3 or 5)
- At least 7 Iron (or 4 Iron + 3 Diamonds) (including golem) with food in chests or haybales
- A River biome is guaranteed around the Village structure
- Village seeds with 8-9 Obsidian and not enough Iron will no longer appear

*: The guaranteed Blacksmith is usually a weaponsmith, but can instead be a toolsmith in Desert and Taiga villages.

### Shipwreck
- Spawns within 4 chunks
- 2 Magma Ravines are guaranteed within 10 chunks of the Shipwreck
  - Filtered Magma Ravines are not generated in Frozen Ocean Biomes
- At least 7 Iron (or 4 Iron + 3 Diamonds) and some food in food chest
- Suspicious stew CANNOT give poison
- No other shipwrecks, buried treasures, or irrelevant block entities near spawn (e.g. dungeons)
- Shipwreck chests will not be buried [mostly...]

### Desert Temple
- Spawns within 5 chunks
- 3 lava pools are guaranteed near the temple
- Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- Some food in chests (😋 rotten flesh)
- Nearby access to wood [mostly...]
- A River biome is guaranteed around the Desert Temple structure

### Ruined Portal
- Spawns within 3 chunks
- Enterable with Obsidian or Bucket
  - Ruined Portal seeds with Lava Pool (incompletable with Obsidian) will appear more frequently than previous versions
- There's a chance that there won’t be enough Iron for an Iron Pickaxe
- Food in chest or animals within 5 chunks with a Flint and Steel / Fire Aspect Sword
- A light is guaranteed! (e.g. Flint and Steel, Fire Charge, Flint and extra iron nuggets)
- Guaranteed at least 18 iron nuggets, excluding those needed to make the Bucket or Flint and Steel if needed.
- A River biome is guaranteed around the Ruined Portal structure

### Buried Treasure
- Spawns within 5 chunks
- 2 Magma Ravines are guaranteed within 10 chunks of the Buried Treasure
  - Filtered Magma Ravines are not generated in Frozen Ocean Biomes
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- No other buried treasures, shipwrecks, or irrelevant block entities near spawn (e.g. dungeons)

## Nether Requirements

### Bastion Remnant
- Closest Bastion Remnant is always the intended Bastion Remnant, it will be at least 10 chunks closer than any other Bastion Remnant to 0,0*
- Intended Bastion Remnant is within 14 chunks of 0,0*
- Intended Bastion Remnant always has 3+ Iron and 5+ Obsidian somewhere in the ramparts' chests (or center chest for Housing)
- Stables Bastion Remnant has at least 1 good gap
- Open terrain check from approximate nether entry to the Bastion Remnant
- When using pie-ray in Bastion Remnant, the probability of detecting a Treasure Bastion is significantly reduced.

*: This means that the X coordinate is 0 and the Z coordinate is 0.

### Fortress
- Fortress origin is within 16 chunks of the intended Bastion Remnant
- Open terrain check from the Bastion Remnant to the Fortress

## The End
For the most part, The End uses the same seed as the Overworld seed. There is no filtering condition, so any seed can be selected regardless of its End generation.

## RNG
For the most part, RNG seed uses the same seed as the Overworld seed. Check this [document](./rng)
