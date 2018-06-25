'use strict';

let
	renameFm4 = require('../lib/index.js'),
	chai = require('chai'),
	expect = chai.expect
;




// =============================================================================
describe ('getFileId() - Get correct file id', function() {
	let
		fileNames = {
			'1': 'index.html?channel=fm4&shoutcast=0&player=fm4_v1&referer=fm4.orf.at&_=1522729540062&userid=d96695eb-59cd-4970-a728-c70baf9d51a1&id=2018-03-31_1859_tl_54_7DaysSat17_55161.mp3&offset=175000'
		};

	it ('... should get the correct file ids', function() {
		expect ( renameFm4.getFileId( fileNames['1'] ) ).to.equal('2018-03-31_1859_tl_54_7DaysSat17');
	});

});



// =============================================================================
describe ('getMetaData() - Get correct file metadata from file id', function() {
	let
		fileIds = {
			'1': '2018-03-31_1859_tl_54_7DaysSat17'
		};

	it ('... should get the correct meta data', function() {
		expect ( renameFm4.getMetaData( fileIds['1'] ) ).to.eql({
			yyyy: '2018',
			mm: '03',
			dd: '31',
			dayOfWeek: 'Sat',
			startTime: '1859'
		});
	});

});





