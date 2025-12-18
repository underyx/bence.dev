#!/usr/bin/env bash

export TZ=America/Los_Angeles
TODAY=$(date +"%Y-%m-%d")

SLEEP_RAW=$(curl "https://api.ouraring.com/v2/usercollection/daily_sleep" -H "Authorization: Bearer $OURA_PAT" | jq .data[-1].score)
ACTIVITY_RAW=$(curl "https://api.ouraring.com/v2/usercollection/daily_activity?end_date=$TODAY" -H "Authorization: Bearer $OURA_PAT" | jq .data[-1].active_calories)

# If jq returns null (no data), export "missing" instead
export OURA_SLEEP_SCORE=$([[ "$SLEEP_RAW" == "null" ]] && echo "missing" || echo "$SLEEP_RAW")
export OURA_ACTIVITY_CAL=$([[ "$ACTIVITY_RAW" == "null" ]] && echo "missing" || echo "$ACTIVITY_RAW")

pnpm build
