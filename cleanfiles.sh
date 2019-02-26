#!/usr/bin/env bash

# wipe out windows return characters
find {spec,src}/ package* tsconfig* -type f | xargs  sed -i -e 's/\r//g'
