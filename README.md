# rename-fm4
Rename FM4 files 

Generally speaking this is a two step process:
- Create dummy files to check if file name replacements is working
- If yes: do it with the real files

## Preparation

- Move all FM4 MP3 files in '/fm4-src`

## Create dummy files

1. Create `test/filelist.txt` with all MP3 file names (via BBEdit: new text file, move fm4-src-folder into the new text file --> creates listing --> copy listing into filelist.txt)
2. Execute Shell-Script: `./create-files.sh`
3. Zero bytes files are generated in `/test/fixtures`
4. Test rename via `node index.js test/fixtures`

## Rename real files

5. Rename the real files with `node index.js /Volumes/Musikplatte/fm4-src`
   `node index.js /Volumes/Musikplatte/fm4-src`

## Tests

The unit tests in `test/*.test.js` use Node.js' built-in test runner (`node:test` and
`node:assert/strict`). The project has no dependencies, so nothing needs to be installed:

```
npm test
```

This runs `node --test`, which finds and executes `test/index.test.js`.

Supported Node.js version: **18 or newer** (verified with Node 18, 20, 22 and 24).
The tests do not need the generated `test/fixtures` files.

Wallaby.js (optional) is configured in `wallaby.conf.js` via the automatic `node:test`
detection, which requires Node.js **22.3.0 or newer** and uses the `node` executable
found on your `PATH`.
