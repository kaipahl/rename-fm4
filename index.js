let renameFm4 = require('./lib');

let dir,
	param = '';

dir = process.argv[2];
if ( process.argv.length > 3 ) {
	param = parseInt(process.argv[3]);
}


renameFm4.main( dir, param );
