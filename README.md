# rename-fm4
Rename FM4 files 


1. Create `/test/filelist.txt` with all MP3 file names (via BBEdit)
2. Execute Shell-Script: `./create-files.sh`
3. Copy the zero bytes files to `/test/fixtures`
4. Test rename via `node index.js test/fixtures`
