# Filtered Seed

## Explanation
MCSR Ranked uses its own Seed Filter to filtering the seeds that satisfy certain conditions from  vanilla seeds and uses them as filtered seed.
- In Ranked and Casual modes, filtered seeds will be used in all matches.
- In Private rooms, it can be used by enable "Filtered Seed" match option.

For more efficient filtering and usability, the overworld and nether will be filtered via independent seeds. Therefore, strategies that can infer some RNG in the Nether, such as the Divine strategy, will not work.

## Seed Type Distribution
| Elo*       | Village | Shipwreck | Desert Temple | Ruined Portal | Buried Treasure |
| :--------: | :-----: | :-------: | :-----------: | :-----------: | :-------------: |
| 0 ~ 599    | 55% | 30% | 15% | --% | --% |
| 600 ~ 1199 | 30% | 30% | 20% | 20% | --% |
| 1200+      | 20% | 20% | 20% | 20% | 20% |

*: It is based on the average Elo rate of all players in the match.

## Overworld Types

### Village
- Spawn within 7 chunks
- 3 lava pools guaranteed at around of village OR enough 8+ Obsidians with blacksmith lava
- The artificial lava pools look close to vanilla behavior and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- Taiga villages will only intend 10+ Obsidian enters (still lava pools are exists)
- Golem only drops 4 Irons, never 3 or never 5.
- At least 7 Irons (or 4 Irons + 3 Diamonds) (including golem) and some food in chests or haybales

### Shipwreck
- Spawn within 4 chunks
- 2 Magma ravines within 10 chunks of Shipwreck
- At least 7 Irons (or 4 Irons + 3 Diamonds) and some food in food chest
- Suspicious stew CANNOT be poison.
- No other shipwrecks, buried treasures, or irrelevant block entities near spawn (i.e dungeons)
- Shipwreck chests will not be buried [mostly...]

### Desert Temple
- Spawn within 5 chunks
- 3 lava pools guaranteed at around of temple
- The artificial lava pools look close to vanilla behavior and are the 3 guaranteed ones! There may be more vanilla lava pools but the artificial ones are guaranteed.
- At least 7 Irons (or 4 Irons + 3 Diamonds)
- Some food in chests (😋 rotten flesh)
- Nearby access to wood [mostly...]


### Ruined Portal
- Spawn within 3 chunks
- Enterable with Obsidian or Bucket (50/50)
- There's chances to won’t be enough Iron for Iron Pickaxe
- Food in chest or animals within 5 chunks + Flint and Steel/Fire Aspect Sword
- A light is guaranteed! (i.e Flint and Steel, Fire Charge, Flint and extra iron nuggets)
- Guaranteed at least 18 iron nuggets, excluding those needed to make the Bucket.

### Buried Treasure
- Spawn within 5 chunks
- 2 Magma ravines within 10 chunks of Buried Treasure
- At least 7 Irons (or 4 Irons + 3 Diamonds)
- No other buried treasures, shipwrecks, or irrelevant block entities near spawn (i.e dungeons)

## Nether Requirements

### Bastion Ramnant
- Closest Bastion Ramnant is always the intended Bastion Ramnant, it will be at least 10 chunks closer than any other Bastion Ramnant to 0,0*
- Intended Bastion Ramnant is within 14 chunks of 0,0*
- Intended Bastion Ramnant always has 3+ Irons and 5+ Obsidians somewhere in the ramparts (or center chest for housing)
- Stables Bastion Ramnant must be have at least 1 good gap

*: it does mean X coodinate at 0 and Z coodinate at 0. (0, 0)

### Fortress
- Fortress origin within 16 chunks of the Bastion Ramnant
- Open terrain check from approximate nether entry to Bastion Ramnant, and from Bastion Ramnant to Fortress

## The End
Mostly, The End does same seed as Overworld seed. And there is no filtering condition, so any seed can filtered out.

## RNG
Mostly, RNG seed does same seed as Overworld seed. Check this [document](./rng)