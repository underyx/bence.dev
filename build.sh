#!/usr/bin/env bash
export OURA_SLEEP_SCORE=$(curl https://api.ouraring.com/v2/usercollection/daily_sleep -H "Authorization: Bearer $OURA_PAT" | jq .data[0].score)

pnpm build
