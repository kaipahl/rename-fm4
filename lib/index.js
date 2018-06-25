'use strict';

let
	fs = require('fs')
;


module.exports = {




	/**
	 * Get all files of a directory
	 *
	 * @param {string} directory - eg: 'src/_templates/partials'
	 * @returns {Array} - array of object names (files and directories), eg ['foo.mp3', 'bar.mp3']
	 *
	 * @example getAllObjectsInDir('src/_templates/partials') --> ['foo.mp3', 'bar.mp3']
	 */
	getAllFilesInDir: function( directory ) {
		return fs.readdirSync( directory );
	},



	/**
	 * @param {string} fileName
	 * @returns {string}
	 */
	getFileId: function( fileName ) {
		let fileId,
			regexFileId = /^.*&id=(.*)_\d{5}\.mp3.*$/,
			regexResult;

		regexResult = regexFileId.exec(fileName);
		fileId = regexResult[1];

		return fileId
	},


	/**
	 *
	 * @param {string} fileId
	 * @returns {{yyyy: string, mm: string, dd: string, dayOfWeek: string, startTime: number}}
	 *
	 * @example getMetaData('2018-03-31_1859_tl_54_7DaysSat17')
	 */
	getMetaData: function( fileId ) {
		let metaData = {
			yyyy: '',
			mm: '',
			dd: '',
			dayOfWeek: '',
			startTime: '0'
		},
			regexMetaData = /^(\d{4})-(\d{2})-(\d{2})_(\d{4})_tl?_54_7Days(\w{3})\d{1,2}$/,
			regexResult;

		regexResult = regexMetaData.exec( fileId );
		metaData.yyyy = regexResult[1];
		metaData.mm = regexResult[2];
		metaData.dd = regexResult[3];
		metaData.dayOfWeek = regexResult[5];
		metaData.startTime = regexResult[4];

		return metaData;
	},


	/**
	 * @param {string} oldFileName
	 * @returns {string}
	 */
	convertToNewFileName: function( oldFileName ) {
		let newFileName,
			fileId,
			fileMetaData;

		fileId = this.getFileId( fileId );
		fileMetaData = this.getMetaData( fileId );
		newFileName = fileId;

		return newFileName;
	},


	// ==============================================
	/**
	 * Hauptroutine
	 */
	main: function ( dir, param ) {
		let
			that = this,
			/** @type {String[]} files - Array with paths/filenames of each page */
			fileNames;

		console.log( 'directory', dir );
		fileNames = that.getAllFilesInDir( dir );

		fileNames.forEach( function( fileName ) {
			let newFileName;

			newFileName = that.convertToNewFileName( fileName );

			console.log( 'File', newFileName );

		});

	}


};






