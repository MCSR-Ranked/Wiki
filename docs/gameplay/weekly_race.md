# Weekly Race

## Explanation

Weekly Race is a set seed style gamemode in Ranked where the goal is to get the single fastest run on a given seed with an unlimited number of attempts. Each week, the seed is changed and the leaderboard for the previous week is locked with no new submissions accepted. Weekly Race uses the same [RNG standardization](./rng) as [match making](./matchmaking), but not the same [filtered seeds](./seed). The seeds are handpicked by Ranked staff, and the style of seeds vary greatly each week.

Weekly Race resets Monday at 12:00am UTC.

## Interface

The Weekly Race menu features the current week's leaderboard, up to the top 50 runs. The current week is listed at the top of the menu, with the option to view previous weeks' leaderboards. The time and date that Weekly Race resets is displayed in the user's local timezone, though note that the listed timezone may not match the timezone the user currently observes if in daylight savings or summer time.

Clicking a run on the leaderboard gives the option to watch the [replay](./replay_system) for the run.

## Gameplay

### Objective

The goal of Weekly Race is to defeat the dragon and pass through the exit portal as fast as possible. Upon completion, the player is frozen in place and the final time of the run is displayed, accompanied by the words "New Best!" if the run is faster than the player's current personal best run, or "Completed!" if it's the first run the player has completed or not faster than the player's personal best. After a moment, the player will be returned to the menu.

### Resetting

Resetting the world is possible through the "Reset World" button on the pause screen, or by pressing the Reset Race World key which is configurable through Ranked Settings > Generic Settings > Ranked Controls. Ranked has a custom implementation of SeedQueue, and can speed up resetting greatly. "Max Queued Race Worlds" as well as "Thread Priority (Race)" can be configured through Ranked Settings > Reset World Settings.

### Ghosts

Ghosts are the outline of a player from the replay of a submitted run. In both Standard and Practice mode, if a run on the leaderboard was selected before the player started Weekly Race a ghost will accompany the player in the world. The visibility settings for ghosts can be adjusted in Ranked Settings > Replay & Ghost Settings. 

## Modes

There are two modes available to play in Weekly Race, Standard and Practice.

### Standard Mode

Standard mode is entered by pressing the "Start" button, and is only avaliable for the current week. Only runs completed in Standard mode will be submitted to the leaderboard. The player's gamemode is set to survival, and cheats are permanently disabled. The Open to Lan button is disabled, so there is no way to enable cheats in Standard mode.

### Practice Mode

Practice mode is entered by pressing the "Practice" button. Practice mode is avaliable for any week, current or previous, and runs completed in Practice mode will not be submitted. While in Practice mode, the text "Practice" is always displayed at the top of the screen. Cheats are always enabled in Practice mode. If the player shift clicks the "Practice" button to enter Practice mode, the default gamemode will be creative, otherwise it's survival.

## Achievements

*Main article: [Achievements](./achievements)*

Weekly Race rewards top placements with achievements. Top 15, 10, 5, and 1 get unique achivements, and the achivement badge counts how many of each placements the player has achieved. A player can only get one placement achievement per week, so for example placing 8th would reward a top 10 achievement, but not a top 15 achievement.

## Community

The official Ranked discord server has a Weekly Race focused channel, \#weekly-race. There is also an unofficial discord server focused entirely on Weekly Race, https://discord.gg/kSD7RrpT9Z
