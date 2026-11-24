'use strict';

const
	{ describe, it } = require('node:test'),
	assert = require('node:assert/strict'),
	renameFm4 = require('../lib/index.js')
;




// =============================================================================
describe ('getFileId() - Get correct file id', function() {
	let
		fileNames = {
			'1': 'index.html?channel=fm4&shoutcast=0&player=fm4_v1&referer=fm4.orf.at&_=1522729540062&userid=d96695eb-59cd-4970-a728-c70baf9d51a1&id=2018-03-31_1859_tl_54_7DaysSat17_155161.mp3&offset=175000'
		};

	it ('... should get the correct file ids', function() {
		assert.strictEqual( renameFm4.getFileId( fileNames['1'] ), '2018-03-31_1859_tl_54_7DaysSat17' );
	});

});



// =============================================================================
describe ('getMetaData() - Get correct file metadata from file id', function() {
	let
		fileIds = {
			'1': '2018-03-31_1859_tl_54_7DaysSat17'
		};

	it ('... should get the correct meta data', function() {
		assert.deepStrictEqual( renameFm4.getMetaData( fileIds['1'] ), {
			yyyy: '2018',
			mm: '03',
			dd: '31',
			dayOfWeek: 'Sat',
			startTime: '1900'
		});
	});

});



// =============================================================================
describe ('roundOffTime() - Round Off time', function() {
	let
		timeStrings = {
			'1': '1400',
			'2': '1359'
		};

	it ('... should get the correct meta data', function() {
		assert.strictEqual( renameFm4.roundOffTime( timeStrings['1'] ), '1400' );
		assert.strictEqual( renameFm4.roundOffTime( timeStrings['2'] ), '1400' );
	});

});
