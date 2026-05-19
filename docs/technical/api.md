# REST API

## Explanation
MCSR Ranked has a public REST API for reading ranked data such as users, matches, live data, leaderboards, and weekly races.

The full API reference is available at [docs.mcsrranked.com](https://docs.mcsrranked.com/). This page is a wiki overview for finding the API and understanding the core conventions.

## Endpoints
The API can be accessed from either base URL:

```text
https://api.mcsrranked.com/
https://mcsrranked.com/api/
```

The dedicated API domain is preferred for new tools.

## OpenAPI
The OpenAPI document is available here:

```text
https://api.mcsrranked.com/openapi.yaml
```

Use the OpenAPI document for generated clients, schema validation, or checking the exact request and response formats.

## Rate limits
Most endpoints are limited to `500` requests per `10` minutes.

For an expanded rate limit, create a ticket in the MCSR Ranked Discord and request an API key.

## Authentication
Many endpoints do not require authentication.

For endpoints that need authentication, open an MCSR Ranked instance and use:

```text
Profile > Settings > Generate & Copy API Private Key
```

Pass the key in the request header:

```text
Private-Key: YOUR_KEY_HERE
```

## Time values
The API uses two common numeric time formats:

| Type | Format |
| --- | --- |
| `Date` | Unix timestamp in seconds. |
| `Time` | Duration in milliseconds. |

This differs from `spectate_match.json`, where `startTime` is a Unix timestamp in milliseconds.

## Common objects
The API reference defines shared object types used across endpoints.

| Object | Notes |
| --- | --- |
| `UserProfile` | UUID, nickname, role type, Elo rating/rank, and country. |
| `Achievement` | Achievement ID, earned date, payload data, level, and progress fields. |
| `MatchInfo` | Match metadata, players, spectators, result, seed information, VODs, timelines, and replay availability. |
| `MatchSeed` | Filtered seed metadata such as overworld type, nether type, End tower heights, and variations. |
| `UserIdentifier` | User lookup value. Can be UUID, nickname, or `discord.ID`. |
| `MatchType` | Numeric match type enum. |

## Match data
Historical match data comes from the API. Live RSA event data comes from `spectate_match.json`.

Use the API when you need stored match data, player profiles, standings, leaderboards, or public replay availability. Use RSA live match data when you need low-latency event overlay state from a private room, especially when `No Logs Mode` is enabled.
