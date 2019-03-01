#!/usr/bin/env bash

for num in "$@"
do
    echo "Running ./src/solutions/pe$num.ts"
    ts-node "./src/solutions/pe$num.ts"
done
