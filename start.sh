#!/bin/sh

exec dfx --version&
exec dfx deploy --network=ic --no-wallet
