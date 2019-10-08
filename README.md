# rename-fm4
Rename FM4 files 


1. Create `/test/filelist.txt` with all MP3 file names (via BBEdit)
2. Execute Shell-Script: `./create-files.sh`
3. Zero bytes files are generated in `/test/fixtures`
4. Test rename via `node index.js test/fixtures`
5. Put the MP3 files into fixture and let rename them.
