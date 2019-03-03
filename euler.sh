#!/usr/bin/env bash

# example (run solutions 1-11): ./euler.sh {0001..0011}
for num in "$@"
do
    echo "Running ./src/solutions/pe$num.ts"
    ts-node "./src/solutions/pe$num.ts"
done
