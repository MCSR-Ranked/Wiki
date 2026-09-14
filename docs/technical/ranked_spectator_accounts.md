# Ranked Spectator Accounts

## Explanation
Ranked Spectator Accounts, usually called RSA, are special accounts for public tournaments, competitions, and events. They are meant for event production, not normal ranked or casual play.

RSA can host larger private rooms, use event production features, open live spectator tools, and write live match data for overlays.

## Getting RSA
To request RSA, join the MCSR Ranked Discord and create a ticket. Include detailed event information, such as:

- Tournament or event name
- Main stream link
- Event date and time
- Minecraft account names that need RSA
- How long the accounts need RSA access

After the event is reviewed, staff will ask for the RSA duration and Minecraft nicknames. During the approved period, RSA can be used for testing and for the event.

After an account receives RSA access, restart the Minecraft instance before trying to use RSA features. If the game was already open when access was granted, the client may not pick up the updated account state until restart.

## Private room features
By default, private rooms have a max player limit of `32` plus the host. If the private room host is an RSA, the room can be increased up to `100` players.

If `No Logs Mode` is enabled in private room rules, the room limit can be increased up to `300` players. In this mode, match data is not sent to the API and the filtered seed option does not work.

RSA also has supporter-style private room features, such as custom private room names.

If an RSA generates a ranked world, cheats are enabled for that world.

## Auto-accept join requests
RSA can automatically accept private room join requests from an `auto_accept.txt` file. This works with the private room `Join Requests` feature.

The file is located in the MCSR Ranked global data folder:

```text
<user home>/mcsrranked/auto_accept.txt
```

Typical paths are:

| OS | Path |
| --- | --- |
| Windows | `C:/Users/USER_NAME/mcsrranked/auto_accept.txt` |
| macOS | `/Users/USER_NAME/mcsrranked/auto_accept.txt` |
| Linux | `/home/USER_NAME/mcsrranked/auto_accept.txt` |

If the file does not exist, the mod creates an empty file.

Add one player per line. Each line can be a nickname or UUID. UUIDs can be written with or without dashes.

```text
RedLime
f67a12a9-aabf-4f48-bb0d-28d26e09562e
c4d2cce5a4594868b61bdd717d178636
```

The mod normalizes entries by removing dashes, lowercasing them, and trimming whitespace. Empty lines are ignored. The file is reloaded when its modification time changes.

## Live spectator tools
RSA has live spectator tools for following match progress during an online match.

### Match spectator command
Spectators can open match data screens with `/matchspectate`:

```text
/matchspectate timelines
/matchspectate split_compare
/matchspectate players
```

These commands are only available while an online match is playing and the local player is a spectator.

| Command | Screen |
| --- | --- |
| `/matchspectate timelines` | Match timeline screen. |
| `/matchspectate split_compare` | Split comparison screen. |
| `/matchspectate players` | Match players screen. |

These screens use the match timeline list and non-spectator player list. Spectator accounts are excluded from the compared player list.

While spectating a playing match, the mod also keeps the matching spectator entries available in the game mode selection menu:

- Match timelines
- Match splits comparison
- Match players

### Live replay controller
RSA spectators can also use live replay tooling. In this mod version, the separate controller window is only initialized on Windows desktop environments. It is not created in headless environments.

When available, the controller is a separate Swing window titled `Replay Remote Controller`.

The controller is shown for spectator accounts when the match reaches the `START_GEN` status. The window is set to always stay on top while the match is starting. When the match reaches `END`, the controller is no longer forced on top, is sent behind other windows, and resets its match/replay state.

The controller includes:

- A status label showing either the current match status or current elapsed time.
- A player list. Clicking a player changes the replay focus to that player.
- `Follow Camera`
- `Follow Dimension`
- `Ghost Mode`
- `Display Name Tag`
- Live replay time controls with a numeric second value from `5` to `300`.
- `Before`, `After`, and `Live` buttons for moving around the live replay timeline.

The live replay controller is separate from `spectate_match.json`. The controller changes the in-game spectator/replay view. The JSON file is the data source for external overlays and tools.

There is also an in-game replay spectator menu. When a replay processor is active, the mod replaces the normal spectator command group with ranked replay controls. These controls are for interacting with the replay view from inside Minecraft.

## Live match data
RSA writes `spectate_match.json` while an online match is active. This file is intended for external stream overlays and tournament tools.

This is especially important when `No Logs Mode` is enabled, because that mode does not send match data to the API.

The file is a snapshot of the current match state. It is not an event log. Each write replaces the whole file with the latest data.

In a normal launcher setup, the file is written here:

```text
<user home>/mcsrranked/spectate_match.json
```

Typical paths are:

| OS | Path |
| --- | --- |
| Windows | `C:/Users/USER_NAME/mcsrranked/spectate_match.json` |
| macOS | `/Users/USER_NAME/mcsrranked/spectate_match.json` |
| Linux | `/home/USER_NAME/mcsrranked/spectate_match.json` |

The mod uses the `<user home>/mcsrranked` folder when it is readable and writable. If it is not, the mod falls back to `<minecraft game dir>/mcsrranked`.

### Reading the file safely
The mod writes the whole JSON file asynchronously. There is no lock file and no explicit file lock, so a reader can catch the file while it is being written.

Consumers should keep the last successfully parsed snapshot. A failed read or failed JSON parse should not clear the overlay.

A safe read loop is:

1. Check that `spectate_match.json` exists.
2. Optionally skip work if the file modification time has not changed.
3. Read the entire file as UTF-8.
4. Parse the JSON.
5. Validate the expected top-level fields.
6. If parsing succeeds, replace the in-memory snapshot.
7. If parsing fails, keep using the previous good snapshot.

Some filesystems have coarse modification times. If exact change detection matters, compare file size, hash the contents, or parse at the interval your tool uses.

### Top-level format
The JSON has this general shape:

```json
{
  "matchType": "PRIVATE",
  "category": "ANY",
  "gameMode": "default",
  "startTime": 1779153579055,
  "players": [],
  "completes": [],
  "inventories": {},
  "counts": {},
  "timelines": []
}
```

| Field | Description |
| --- | --- |
| `matchType` | Match type. Known values are `CASUAL`, `RANKED`, `PRIVATE`, `EVENT`, and `RUSH`. |
| `category` | Speedrun IGT category ID, such as `ANY`. |
| `gameMode` | Match game mode type. The normal mode is `default`. The mod also contains `most_percent` and `scout_route`. |
| `startTime` | Match start timestamp in Unix milliseconds once populated. Do not assume it is meaningful before the match start flow. |
| `players` | Player roster. |
| `completes` | Finished players, sorted by completion time ascending. |
| `inventories` | Latest tracked inventory and stat snapshot for each player, keyed by UUID. |
| `counts` | Reserved in this mod version. The writer creates it but does not populate it. |
| `timelines` | Timeline events in match-state list order. |

Use the 32-character UUID string, without dashes, to join `players`, `timelines`, `inventories`, and `completes`.

### Match lifecycle
Before the run starts, the file can contain match metadata and the player roster. Once the run is underway and `startTime` is set, treat it as stable.

During play:

- `timelines` grows as events arrive.
- Existing timeline entries should be treated as immutable.
- `inventories[uuid]` is replaced as inventory and stat updates arrive.
- Inventory keys can be missing or present with value `0`.
- `completes` fills as players finish.

For resets, use a timeline entry with:

```text
type = "projectelo.timeline.reset"
```

Do not infer a reset only from inventory values returning to zero.

After the match, the file may remain on disk. Detect a new match by changes to `startTime`, the roster, or your event setup. Do not assume the file disappears.

### Players
Each `players` entry looks like this:

```json
{
  "uuid": "f67a12a9aabf4f48bb0d28d26e09562e",
  "nickname": "ignBees",
  "roleType": 0,
  "eloRate": null,
  "eloRank": null,
  "country": null
}
```

| Field | Description |
| --- | --- |
| `uuid` | Player UUID as a 32-character string with no dashes. |
| `nickname` | Display name. |
| `roleType` | Integer role badge/type used by the mod UI. |
| `eloRate` | Elo rating integer, or `null` when not present. |
| `eloRank` | Elo rank integer, or `null` when not present. |
| `country` | Country code string, or `null` when not present. |

Consumers should expect `uuid`, `nickname`, and `roleType` for each player. In private or event-style contexts, `eloRate`, `eloRank`, and `country` are commonly `null`.

The JSON is written with null values included.

### Timelines
Each `timelines` entry looks like this:

```json
{
  "uuid": "f67a12a9aabf4f48bb0d28d26e09562e",
  "type": "story.mine_stone",
  "time": 76026,
  "data": ["16", "60", "65"],
  "shown": true
}
```

| Field | Description |
| --- | --- |
| `uuid` | UUID of the player that produced the event. |
| `type` | Event type string. |
| `time` | Event time in milliseconds from the match timer. |
| `data` | Event-specific payload values as strings. JSON null values can also appear. |
| `shown` | Whether the event was shown in the in-game timeline UI. |

Timeline types:

| Type | Meaning |
| --- | --- |
| `projectelo.timeline.reset` | Reset event. |
| `projectelo.timeline.complete` | Completion event. The mod renders `data[0]` as a text argument and parses `data[1]` as a millisecond time for display. |
| `projectelo.timeline.eliminate` | Elimination event. |
| Any type not starting with `projectelo` | Minecraft advancement event. |

Advancement display names resolve through:

```text
advancements.<type>.title
```

For example, `story.mine_stone` maps to `advancements.story.mine_stone.title`.

If a timeline type ends in `.root`, the mod treats it as an advancement root event.

### Inventories
`inventories` is keyed by player UUID:

```json
{
  "f67a12a9aabf4f48bb0d28d26e09562e": {
    "oak_planks": 3,
    "planks": 3,
    "iron_nugget": 0,
    "white_bed": 0,
    "beds": 0,
    "blazeKills": 0,
    "piglinBarters": 0
  }
}
```

Tracked item keys are Minecraft item IDs without the `minecraft:` namespace. The writer includes entries currently present in the tracked inventory map, then always appends:

- `blazeKills`
- `piglinBarters`

Tracked item families and items include:

```text
planks/log variants, iron_nugget, white_bed, glowstone_dust, diamond,
gold_ingot, splash_potion, potion, blaze_powder, iron_ingot, ender_pearl,
obsidian, respawn_anchor, crying_obsidian, glowstone, string, ender_eye,
gold_block, wool variants, blaze_rod
```

Optional aliases:

| Alias | Written when the tracked map contains |
| --- | --- |
| `wools` | `white_wool` |
| `beds` | `white_bed` |
| `planks` | `oak_planks` |
| `logs` | `oak_log` |

When an alias is missing, fall back to the representative item key or `0`.

### Completes
Each `completes` entry looks like this:

```json
{
  "player": "f67a12a9aabf4f48bb0d28d26e09562e",
  "time": 738123
}
```

| Field | Description |
| --- | --- |
| `player` | UUID matching a player in `players`. |
| `time` | Completion time in milliseconds. |

Players with completion time `0` are not included. The array is sorted by `time` ascending before writing.

### Overlay usage
Common ways to consume the file:

- Use `players` as the roster and index players by UUID.
- Use `timelines` for live events such as advancements, resets, eliminations, and finishes.
- Sort timeline entries by `time` if your display needs deterministic ordering.
- Use `completes` for final standings.
- Use `inventories[uuid]` for live item counters.
- Prefer inventory aliases like `beds`, `logs`, `planks`, and `wools` when present.
- Ignore `counts` in this mod version.

Timeline and completion times in this JSON are milliseconds. `startTime` is a Unix timestamp in milliseconds. The mod converts timeline time to game ticks with:

```text
ceil(time / 50)
```

Use milliseconds for sorting and display unless your overlay specifically needs ticks.

## RSA rules
RSA is for approved event and tournament use. It is not for general play.

- Follow the MCSR Ranked Guidelines.
- Do not use RSA for purposes outside the approved event or testing period.
- Do not share RSA access with anyone who was not directly approved by staff.
- Do not use an RSA account to play ranked or casual mode.
