# Filtered Seeds

## Explanation
MCSR Ranked uses its own Seed Filter to select vanilla seeds which satisfy certain conditions.
- In Ranked and Casual modes, filtered seeds are used in all matches.
- In Private rooms, it can be used by enabling the "Filtered Seed" match option.

For more efficient filtering and usability, the overworld and nether are filtered via independent seeds. Therefore, strategies that can infer some RNG in the Nether, such as the Divine Travel strategy, will not work.

## Seed Type Distribution
| ELO*       | Village | Shipwreck | Desert Temple | Ruined Portal | Buried Treasure |
| :--------: | :-----: | :-------: | :-----------: | :-----------: | :-------------: |
| 0 ~ 599    | 55% | 30% | 15% |  0% |  0% |
| 600 ~ 1199 | 30% | 30% | 20% | 20% |  0% |
| 1200+      | 20% | 20% | 20% | 20% | 20% |

*: Based on the average ELO Rate of all players in the match.

In Private Room, each seeds have 20% distribution like 1200+ range.

## Overworld Types

### Village
- Spawns within 7 chunks
- Contains a guaranteed Blacksmith
- 3 lava pools are guaranteed near the Village OR the Blacksmith contains 8+ Obsidian for an enter with blacksmith lava
- Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- Taiga villages always have 10+ Obsidian enters (lava pools do still exist)
- Golem only ever drops 4 Iron, never 3 or never 5.
- At least 7 Iron (or 4 Iron + 3 Diamonds) (including golem) with food in chests or haybales

### Shipwreck
- Spawns within 4 chunks
- 2 Magma Ravines within 10 chunks of the Shipwreck
- At least 7 Iron (or 4 Iron + 3 Diamonds) and some food in food chest
- Suspicious stew CANNOT be poison
- No other shipwrecks, buried treasures, or irrelevant block entities near spawn (i.e dungeons)
- Shipwreck chests will not be buried [mostly...]

### Desert Temple
- Spawns within 5 chunks
- 3 lava pools guaranteed near to the temple
- Artificial lava pools look similar to vanilla and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- Some food in chests (😋 rotten flesh)
- Nearby access to wood [mostly...]

### Ruined Portal
- Spawns within 3 chunks
- Enterable with Obsidian or Bucket (50/50)
- There's a chance that there won’t be enough Iron for an Iron Pickaxe
- Food in chest or animals within 5 chunks with a Flint and Steel / Fire Aspect Sword
- A light is guaranteed! (i.e Flint and Steel, Fire Charge, Flint and extra iron nuggets)
- Guaranteed at least 18 iron nuggets, excluding those needed to make the Bucket.

### Buried Treasure
- Spawns within 5 chunks
- 2 Magma Ravines within 10 chunks of the Buried Treasure
- At least 7 Iron (or 4 Iron + 3 Diamonds)
- No other buried treasures, shipwrecks, or irrelevant block entities near spawn (i.e dungeons)

## Nether Requirements

### Bastion Remnant
- Closest Bastion Remnant is always the intended Bastion Remnant, it will be at least 10 chunks closer than any other Bastion Remnant to 0,0*
- Intended Bastion Remnant is within 14 chunks of 0,0*
- Intended Bastion Remnant always has 3+ Iron and 5+ Obsidian somewhere in the ramparts' chests (or center chest for housing)
- Stables Bastion Remnant must have at least 1 good gap
- Open terrain check from approximate nether entry to the Bastion Remnant

*: This means that the X coodinate is 0 and Z coodinate is 0. (0, 0)

### Fortress
- Fortress origin is within 16 chunks of the intended Bastion Remnant
- Open terrain check from the Bastion Remnant to the Fortress

## The End
For the most part, The End uses the same seed as Overworld seed. And there is no filtering condition, so any seed can be selected regardless of its End generation.

## RNG
For the most part, RNG seed uses the same seed as Overworld seed. Check this [document](./rng)
