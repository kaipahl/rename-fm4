#!/usr/bin/env bash
for i in `cat test/filelist.txt | sed '/^$/d;s/^ *//;s/ *$//'`;
  do mkdir -p `dirname $i`;
     touch `echo $(dirname $i)$(echo "/")$(basename $i)`;
  done
