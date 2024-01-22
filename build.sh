#!/usr/bin/env bash
export OURA_SLEEP_SCORE=$(curl https://api.ouraring.com/v2/usercollection/daily_sleep -H "Authorization: Bearer $OURA_PAT" | jq .data[-1].score)

pnpm build
