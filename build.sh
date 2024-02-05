#!/usr/bin/env bash

export TZ=America/Los_Angeles
TODAY=$(date +"%Y-%m-%d")
YESTERDAY=$(date -v-1d +"%Y-%m-%d" 2>/dev/null || date -d "yesterday 13:00" +"%Y-%m-%d")

export OURA_SLEEP_SCORE=$(curl "https://api.ouraring.com/v2/usercollection/daily_sleep?start_date=$TODAY" -H "Authorization: Bearer $OURA_PAT" | jq .data[0].score)
export OURA_ACTIVITY_CAL=$(curl "https://api.ouraring.com/v2/usercollection/daily_activity?start_date=$YESTERDAY&end_date=$TODAY" -H "Authorization: Bearer $OURA_PAT" | jq .data[0].active_calories)

pnpm build
