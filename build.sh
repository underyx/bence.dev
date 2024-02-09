#!/usr/bin/env bash

export TZ=America/Los_Angeles
TODAY=$(date +"%Y-%m-%d")

export OURA_SLEEP_SCORE=$(curl "https://api.ouraring.com/v2/usercollection/daily_sleep" -H "Authorization: Bearer $OURA_PAT" | jq .data[-1].score)
export OURA_ACTIVITY_CAL=$(curl "https://api.ouraring.com/v2/usercollection/daily_activity?end_date=$TODAY" -H "Authorization: Bearer $OURA_PAT" | jq .data[-1].active_calories)

pnpm build
