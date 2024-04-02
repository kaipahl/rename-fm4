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
		let fileId = '',
			regexFileId = /^.*&id=(.*)_\d{6}\.mp3.*$/,
			regexResult;

		regexResult = regexFileId.exec(fileName);
		if ( regexResult !== null ) {
			fileId = regexResult[1];
		}

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
		metaData.startTime = this.roundOffTime( regexResult[4] );

		return metaData;
	},



	/**
	 * @param {string} hhmm
	 * @returns {string}
	 */
	roundOffTime: function( hhmm ) {
		let roundedOffhhmm = '',
			hh = parseInt( hhmm[0] + hhmm[1], 10),
			mm = parseInt( hhmm[2] + hhmm[3], 10),
			hhStr,
			mmStr;

		if ( mm < 30 ) {
			mm = 0;
		} else {
			mm = 0;
			hh++;

			if (hh === 24) {
				hh = 0;
			}
		}

		hhStr = hh.toString();
		mmStr = mm.toString();

		if ( hhStr.length === 1 ) {
			hhStr = '0' + hhStr;
		}
		if ( mmStr.length === 1 ) {
			mmStr = '0' + mmStr;
		}
		roundedOffhhmm = hhStr + mmStr;

		return roundedOffhhmm;
	},


	/**
	 *
	 * @param {Object} metaData
	 * @returns {Object.<string, string>}
	 */
	getShowName: function( metaData ) {
		let showName = '';
		let showPart = '';

		if ( metaData.startTime === '1400' ) {
			showName = 'fm4-unlimited';
		}
		if ( (metaData.startTime === '2300') && (metaData.dayOfWeek === 'Fri') ) {
			showName = 'fm4-la-boum-de-luxe';
		}
		if ( (metaData.startTime === '1000') ) {
			showName = 'fm4-sunny-side-up';
		}
		if ( (metaData.startTime === '1700') && (metaData.dayOfWeek === 'Sun') ) {
			showName = 'fm4-fivas-ponyhof';
		}
		if ( (metaData.startTime === '1800') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-wintersounds';
		}
		if ( (metaData.startTime === '1800') && (metaData.dayOfWeek === 'Thu') ) {
			showName = 'fm4-wintersounds';
		}
		if ( (metaData.startTime === '1800') && (metaData.dayOfWeek === 'Fri') ) {
			showName = 'fm4-wintersounds';
		}
		if ( (metaData.startTime === '1800') && (metaData.dayOfWeek === 'Sun') ) {
			showName = 'fm4-fivas-ponyhof';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Mon') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Tue') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Thu') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Fri') ) {
			showName = 'fm4-unlimited';
		}
		if ( (metaData.startTime === '1900') && (metaData.dayOfWeek === 'Sat') ) {
			showName = 'fm4-davidecks';
		}
		if ( (metaData.startTime === '2000') && (metaData.dayOfWeek === 'Tue') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '2000') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-homebase';
		}
		if ( (metaData.startTime === '2000') && (metaData.dayOfWeek === 'Sat') ) {
			showName = 'fm4-davidecks';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Mon') ) {
			showName = 'fm4-summersongs';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Tue') ) {
			showName = 'fm4-summersongs';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-summersongs';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Thu') ) {
			showName = 'fm4-summersongs';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Fri') ) {
			showName = 'fm4-la-boum-de-luxe';
		}
		if ( (metaData.startTime === '2100') && (metaData.dayOfWeek === 'Sat') ) {
			showName = 'fm4-dalias-late-night-lemonade';
		}
		if ( (metaData.startTime === '2200') && (metaData.dayOfWeek === 'Sat') ) {
			showName = 'fm4-swound-sound-system';
		}
		if ( (metaData.startTime === '0000') && (metaData.dayOfWeek === 'Sun') ) {
			showName = 'fm4-liquid-radio';
		}
		if ( (metaData.startTime === '0300') && (metaData.dayOfWeek === 'Mon') ) {
			showName = 'fm4-soundselection-charts';
		}
		if ( (metaData.startTime === '0300') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-soundselection-fresh';
		}
		if ( (metaData.startTime === '0300') && (metaData.dayOfWeek === 'Thu') ) {
			showName = 'fm4-best-indie';
		}
		if ( (metaData.startTime === '0400') && (metaData.dayOfWeek === 'Wed') ) {
			showName = 'fm4-soundselection-sunny';
		}
		if ( (metaData.startTime === '0400') && (metaData.dayOfWeek === 'Thu') ) {
			showName = 'fm4-best-hip-hop';
		}

		return {
			showName: showName,
			showPart: showPart
		};
	},


	/**
	 * @param {string} oldFileName
	 * @returns {string}
	 */
	convertToNewFileName: function( oldFileName ) {
		let newFileName = '',
			fileId,
			fileMetaData;

		fileId = this.getFileId( oldFileName );

		if ( fileId !== '' ) {
			fileMetaData = this.getMetaData( fileId );
			fileMetaData.showObj = this.getShowName( fileMetaData );

			if ( fileMetaData.showObj.showName !== '' ) {
				if ( fileMetaData.showObj.showPart !== '') {
					newFileName = `${fileMetaData.showObj.showName}-${fileMetaData.yyyy}${fileMetaData.mm}${fileMetaData.dd}-${fileMetaData.showObj.showPart}.mp3`;
				} else {
					newFileName = `${fileMetaData.showObj.showName}-${fileMetaData.yyyy}${fileMetaData.mm}${fileMetaData.dd}.mp3`;
				}
			}
		}

		return newFileName;
	},


	/**
	 *
	 * @param {string} fileName
	 * @param {string} newFileName
	 * @param {string} path
	 */
	renameFile: function( fileName, newFileName, path ) {

		fs.renameSync( path + '/' + fileName, path + '/' + newFileName );

	},


	// ==============================================
	/**
	 * Hauptroutine
	 */
	main: function ( dir, param ) {
		let that = this,
			/** @type {String[]} files - Array with paths/filenames of each page */
			fileNames;

		fileNames = that.getAllFilesInDir( dir );

		fileNames.forEach( function( fileName ) {
			let newFileName;

			newFileName = that.convertToNewFileName( fileName );

			console.log( 'File', newFileName );

			if ( newFileName !== '' ) {
				that.renameFile( fileName, newFileName, dir )
			}

		});

	}


};






