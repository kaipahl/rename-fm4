#!/usr/bin/env bash

# Creates zero bytes test files
# 1. Create filelist.txt with all MP3 file names (via BBEdit)
# 2. ./create-files.sh
# 3. Zero bytes test files are generated in the project root
# 4. Move them into test/fixtures
# 5. Try the rename via node index.js test/fixtures
# 6. If it works, put the real files into it
for i in `cat test/filelist.txt | sed '/^$/d;s/^ *//;s/ *$//'`;
  do mkdir -p `dirname $i`;
     touch `echo $(dirname $i)$(echo "/")$(basename $i)`;
  done
