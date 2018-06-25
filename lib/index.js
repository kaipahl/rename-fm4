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
	 *
	 * @param {string} fileName
	 * @returns {string}
	 */
	getFileId: function( fileName ) {
		let fileId;

		return fileId
	},


	/**
	 * @param {string} oldFileName
	 * @returns {string}
	 */
	convertToNewFileName: function( oldFileName ) {
		let newFileName,
			fileId;

		fileId = this.getFileId( fileId );
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






