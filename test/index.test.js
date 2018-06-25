// var assert = require('assert');
var
	renameFm4 = require('../lib/index.js'),
	chai = require('chai'),
	expect = chai.expect
;





// =============================================================================
describe ('Read files', function() {

	describe ('getHandlebarsLayout()', function() {
		var
			fileExists = tug.getHandlebarsLayout( 'index.hbs' ),
			fileWithSlash = tug.getHandlebarsLayout( '/index.hbs' ),
			fileNoLayout = tug.getHandlebarsLayout( '' ),
			fileUndefined = tug.getHandlebarsLayout( ),
			fileWithoutExtension = tug.getHandlebarsLayout( 'index' ),
			fileDoesntExist = tug.getHandlebarsLayout( 'dajhgDFJHadsfjsdFJGsdjh.hbs' )
		;

		it ('... should get the correct layout files', function() {
			expect ( fileExists ).to.match(/Here is index/);
			expect ( fileWithSlash ).to.match(/Here is index/);
			expect ( fileNoLayout ).to.match(/Here is default/);
			expect ( fileUndefined ).to.match(/Here is default/);
			expect ( fileWithoutExtension ).to.match(/Here is index/);
			expect ( fileDoesntExist ).to.match(/Here is default/);
		});

	});

});





