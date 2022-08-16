
'use strict';

var request = require('request'),
	os = require('os');

var VERSION = '1.0.2';
var dandelionBaseURI = 'https://api.dandelion.eu/datatxt/';
var txtSimBaseURI = "sim/v1/";
var txtNexBaseURI = "nex/v1/";
var txtClBaseURI = "cl/v1/";
var txtClModelBaseURI = "cl/models/v1/";
var txtLiBaseURI = "li/v1/";
var txtCustomSpots = "custom-spots/v1/";
var dandelionAppId = "";
var dandelionAppKey = "";


var dandelion = exports;

exports.configure = function (options) {
	if (options.baseURI) { dandelionBaseURI = options.baseURI; }
	if (options.app_id && options.app_key && options.app_id !== "" && options.app_key !== "") {
		dandelionAppId = options.app_id;
		dandelionAppKey = options.app_key;
	}
};

dandelion.userAgent = function () {
	return 'node-dandelion/' + VERSION + ' (node/' + process.version + '; ' +
		os.type() + '/' + os.release() + ')';
};


dandelion.txtSimConstructUrl = function(obj, callback){

	/***********
		Options available for the TxtSim:
		text1|url1|html1|html_fragment1 : required
		text2|url2|html2|html_fragment2 : required
		lang: optional | Accepted values	de | en | fr | it | pt | auto
		bow: optional | Accepted values	always | one_empty | both_empty | never
		text1|url1|html1|html_fragment1 required
		REF: https://dandelion.eu/docs/api/datatxt/sim/v1/
	***********/

	// Initialization of the API txtSim URL
	var uri = dandelionBaseURI + txtSimBaseURI;

	// We will need at least two values for the comparison
	if(!obj.string1.value && obj.string1.value.length <= 0 || !obj.string2.value && obj.string2.value.length <= 0){
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You must specify two parameters (string1 & string2) for the similarity comparison."
			}
			callback(err, null);
			return;
		}
	}
	// We build the two required parameters in the URL
	if(obj.string1.value && obj.string1.value.length > 0){
		var stringObj = obj.string1;
		var stringVal =  encodeURIComponent(stringObj.value).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		switch(stringObj.type) {
			case "text":
				uri += "?text1=" +stringVal;
				break;
			case "url":
				uri += "?url1=" +stringVal;
				break;
			case "html":
				uri += "?html1=" +stringVal;
				break
			case "html_fragment":
				uri += "?html_fragment1=" +stringVal;
				break;
			default:
				uri += "?text1=" +stringVal;
				break;
		}
	}
	if(obj.string2.value && obj.string2.value.length > 0){
		var stringObj = obj.string2;
		var stringVal =  encodeURIComponent(stringObj.value).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		switch(stringObj.type) {
			case "text":
				uri += "&text2=" +stringVal;
				break;
			case "url":
				uri += "&url2=" +stringVal;
				break;
			case "html":
				uri += "&html2=" +stringVal;
				break
			case "html_fragment":
				uri += "&html_fragment2=" +stringVal;
				break;
			default:
				uri += "&text2=" +stringVal;
				break;
		}
	}

	// We include the optional lang parameter if provided
	if(obj.lang && obj.lang.length > 0){
			uri += "&lang=" + obj.lang;
	}

	// We include the optional bow parameter if provided
	if(obj.bow && obj.bow.length > 0){
			uri += "&bow=" + obj.bow;
	}
	// We inject the APP key and ID in the url
	if (dandelionAppId && dandelionAppKey && dandelionAppId !== "" && dandelionAppKey !== "") {
		uri += "&$app_id="+ dandelionAppId +"&$app_key=" + dandelionAppKey;
	}
	else
	{
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You need to provide your dandelion.eu APP key and APP id."
			}
			callback(err, null);
			return;
		}
	}
	callback(null,uri);
}

dandelion.txtNexConstructUrl = function(obj, callback){

	/***********
		Options available for the TxtNex:
		text|url|html|html_fragment : required
		lang: optional | Accepted values	de | en | fr | it | pt | auto
		min_confidence: optional | Accepted values 0.0 .. 1.0
		min_length: optional | Accepted values	2 .. +inf
		social.hashtag: optional | Accepted values:	true | false
		social.mention: optional | Accepted values: true | false
		include: optional | Accepted values: types, categories, abstract, image, lod, alternate_labels
		extra_types: optional | Accepted values:	phone, vat
		country: optional | Accepted values:	AD, AE, AM, AO, AQ, AR, AU, BB, BR, BS, BY, CA, CH, CL, CN, CX, DE, FR, GB, HU, IT, JP, KR, MX, NZ, PG, PL, RE, SE, SG, US, YT, ZW
		custom_spots: optional | Accepted values: any valid custom spot ID.
		epsilon: optional | Accepted values:	0.0 .. 0.5
		REF: https://dandelion.eu/docs/api/datatxt/nex/v1/
	***********/

	// Initialization of the API txtNex URL
	var uri = dandelionBaseURI + txtNexBaseURI;

	// We will need at least one value for the analysis
	if(!obj.string.value && obj.string.value.length <= 0){
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You must specify one parameter (string) for the NEX Analysis."
			}
			callback(err, null);
			return;
		}
	}
	// We build the required parameter in the URL
	if(obj.string.value && obj.string.value.length > 0){
		var stringObj = obj.string;
		var stringVal =  encodeURIComponent(stringObj.value).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		switch(stringObj.type) {
			case "text":
				uri += "?text=" +stringVal;
				break;
			case "url":
				uri += "?url=" +stringVal;
				break;
			case "html":
				uri += "?html=" +stringVal;
				break
			case "html_fragment":
				uri += "?html_fragment=" +stringVal;
				break;
			default:
				uri += "?text=" +stringVal;
				break;
		}
	}

	// We include the provided optional parameters
	var optionalParams = obj.extras;
	if(optionalParams && optionalParams.length > 0){
		for(var i=0; i<=optionalParams.length; i++){
			var option = optionalParams[i];
			for (var key in option) {
				uri += "&" + key + "=" + encodeURIComponent(option[key]).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");;
			}
		}
	}
	// We inject the APP key and ID in the url
	if (dandelionAppId && dandelionAppKey && dandelionAppId !== "" && dandelionAppKey !== "") {
		uri += "&$app_id="+ dandelionAppId +"&$app_key=" + dandelionAppKey;
	}
	else
	{
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You need to provide your dandelion.eu APP key and APP id."
			}
			callback(err, null);
			return;
		}
	}
	callback(null,uri);
}


dandelion.txtClConstructUrl = function(obj, callback){

	/***********
		Options available for the TxtCl:
		text|url|html|html_fragment : required
		model: required | Unique ID of the model you want to use
		min_score: optional | Accepted values 0.0 .. 1.0
		max_annotations: optional | Accepted values	1 .. +inf
		include: optional | Accepted value:	score_details
		nex_extras: any set of txtNex parameters
		REF: https://dandelion.eu/docs/api/datatxt/cl/v1/
	***********/

	// Initialization of the API txtCl URL
	var uri = dandelionBaseURI + txtClBaseURI;

	// We will need at least one value for the analysis
	if(!obj.string.value && obj.string.value.length <= 0){
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You must specify one parameter (string) for the NEX Analysis."
			}
			callback(err, null);
			return;
		}
	}
	// We build the required parameter in the URL
	if(obj.string.value && obj.string.value.length > 0){
		var stringObj = obj.string;
		var stringVal =  encodeURIComponent(stringObj.value).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		switch(stringObj.type) {
			case "text":
				uri += "?text=" +stringVal;
				break;
			case "url":
				uri += "?url=" +stringVal;
				break;
			case "html":
				uri += "?html=" +stringVal;
				break
			case "html_fragment":
				uri += "?html_fragment=" +stringVal;
				break;
			default:
				uri += "?text=" +stringVal;
				break;
		}
	}

	// We include the required Model parameter
	if(obj.model && obj.model.length > 0){
		uri += "&model=" + encodeURIComponent(obj.model).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");;
	}

	// We include the provided optional parameters
	var optionalParams = obj.extras;
	if(optionalParams && optionalParams.length > 0){
		for(var i=0; i<=optionalParams.length; i++){
			var option = optionalParams[i];
			for (var key in option) {
				uri += "&" + key + "=" + encodeURIComponent(option[key]).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");;
			}
		}
	}
	// We include the provided extra NEX parameters
	var NexParams = obj.nex_extras;
	if(NexParams && NexParams.length > 0){
		for(var i=0; i<=NexParams.length; i++){
			var option = NexParams[i];
			for (var key in option) {
				uri += "&nex." + key + "=" + encodeURIComponent(option[key]).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");;
			}
		}
	}
	// We inject the APP key and ID in the url
	if (dandelionAppId && dandelionAppKey && dandelionAppId !== "" && dandelionAppKey !== "") {
		uri += "&$app_id="+ dandelionAppId +"&$app_key=" + dandelionAppKey;
	}
	else
	{
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You need to provide your dandelion.eu APP key and APP id."
			}
			callback(err, null);
			return;
		}
	}
	callback(null,uri);
}

dandelion.txtLiConstructUrl = function(obj, callback){

	/***********
		Options available for the TxtLi:
		text|url|html|html_fragment : required
		clean: optional | Accepted values:	true | false
		REF: https://dandelion.eu/docs/api/datatxt/li/v1/
	***********/

	// Initialization of the API txtLi URL
	var uri = dandelionBaseURI + txtLiBaseURI;

	// We will need at least one value for the analysis
	if(!obj.string.value && obj.string.value.length <= 0){
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You must specify one parameter (string) for the NEX Analysis."
			}
			callback(err, null);
			return;
		}
	}
	// We build the required parameter in the URL
	if(obj.string.value && obj.string.value.length > 0){
		var stringObj = obj.string;
		var stringVal =  encodeURIComponent(stringObj.value).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		switch(stringObj.type) {
			case "text":
				uri += "?text=" +stringVal;
				break;
			case "url":
				uri += "?url=" +stringVal;
				break;
			case "html":
				uri += "?html=" +stringVal;
				break
			case "html_fragment":
				uri += "?html_fragment=" +stringVal;
				break;
			default:
				uri += "?text=" +stringVal;
				break;
		}
	}
	// We include the optional clean parameter if provided
	if(obj.clean != undefined){
			uri += "&clean=" + obj.clean;
	}
	// We inject the APP key and ID in the url
	if (dandelionAppId && dandelionAppKey && dandelionAppId !== "" && dandelionAppKey !== "") {
		uri += "&$app_id="+ dandelionAppId +"&$app_key=" + dandelionAppKey;
	}
	else
	{
		if (typeof callback == 'function') {
			var err = {
				"success":false,
				"message":"You need to provide your dandelion.eu APP key and APP id."
			}
			callback(err, null);
			return;
		}
	}
	callback(null,uri);
}

/**** dataTXT-NEX ****
dataTXT-NEX is a named entity extraction & linking API.
With this API you will be able to automatically tag your texts, extracting Wikipedia entities and enriching your data.
******************/
dandelion.txtNex = function(obj, callback){
	if (typeof callback === 'undefined') {
		return;
	}
	dandelion.txtNexConstructUrl(obj, function(err, uri){
			if(err && !err.success) {
				var err = new Error(err.message);
				err.statusCode = 500;
				callback(err, null);
				return;
			}
			else
			{
				request({
					'method' : 'GET',
					'uri' : uri,
					'headers' : {
						'User-Agent': dandelion.userAgent()
					}
				}, function (err, response, body) {
					if (err) { callback(err, null); return; }
					if (!err && response.statusCode == 200) {
						callback(JSON.parse(body), 200);
					} else {
						var message = JSON.parse(body).message;
						var err = new Error(message);
						err.statusCode = response.statusCode;
						callback(err, null);
					}
				});
			}
	});

};
/**** dataTXT-Sim ****
dataTXT-SIM is a semantic sentence similarity API optimized on short sentences.
With this API you will be able to compare two sentences and get a score of their semantic similarity.
******************/
dandelion.txtSim = function(obj, callback){
	if (typeof callback === 'undefined') {
		return;
	}
	dandelion.txtSimConstructUrl(obj, function(err, uri){
			if(err && !err.success) {
				var err = new Error(err.message);
				err.statusCode = 500;
				callback(err, null);
				return;
			}
			else
			{
				request({
					'method' : 'GET',
					'uri' : uri,
					'headers' : {
						'User-Agent': dandelion.userAgent()
					}
				}, function (err, response, body) {
					if (err) { callback(err, null); return; }
					if (!err && response.statusCode == 200) {
						callback(JSON.parse(body), 200);
					} else {
						var message = JSON.parse(body).message;
						var err = new Error(message);
						err.statusCode = response.statusCode;
						callback(err, null);
					}
				});
			}
	});

};
/**** dataTXT-CL ****
dataTXT-CL classifies short documents into a set of user-defined classes.
******************/
dandelion.txtCl = function(obj, callback){
	if (typeof callback === 'undefined') {
		return;
	}
	dandelion.txtClConstructUrl(obj, function(err, uri){
			if(err && !err.success) {
				var err = new Error(err.message);
				err.statusCode = 500;
				callback(err, null);
				return;
			}
			else
			{
				request({
					'method' : 'GET',
					'uri' : uri,
					'headers' : {
						'User-Agent': dandelion.userAgent()
					}
				}, function (err, response, body) {
					if (err) { callback(err, null); return; }
					if (!err && response.statusCode == 200) {
						callback(JSON.parse(body), 200);
					} else {
						var message = JSON.parse(body).message;
						var err = new Error(message);
						err.statusCode = response.statusCode;
						callback(err, null);
					}
				});
			}
	});
};
/**** dataTXT-Li ****
dataTXT-LI is a simple language identification API;
******************/
dandelion.txtLi = function(obj, callback){
	if (typeof callback === 'undefined') {
		return;
	}
	dandelion.txtLiConstructUrl(obj, function(err, uri){
			if(err && !err.success) {
				var err = new Error(err.message);
				err.statusCode = 500;
				callback(err, null);
				return;
			}
			else
			{
				request({
					'method' : 'GET',
					'uri' : uri,
					'headers' : {
						'User-Agent': dandelion.userAgent()
					}
				}, function (err, response, body) {
					if (err) { callback(err, null); return; }
					if (!err && response.statusCode == 200) {
						callback(JSON.parse(body), 200);
					} else {
						var message = JSON.parse(body).message;
						var err = new Error(message);
						err.statusCode = response.statusCode;
						callback(err, null);
					}
				});
			}
	});
};


dandelion.VERSION = VERSION;


token_for_api_key :"9607c127798e422c8e25a24566dcef6e"















var stringSimilarity = require('../index');

describe('compareTwoStrings', function () {
  var compareTwoStrings = stringSimilarity.compareTwoStrings;

  it('is a function', function () {
    expect(typeof compareTwoStrings).toEqual('function');
  });

  it('returns the correct value for different inputs:', function () {
    const testData = [
      { first: 'french', second: 'quebec', expected: 0 },
      { first: 'france', second: 'france', expected: 1 },
      { first: 'fRaNce', second: 'france', expected: 0.2 },
      { first: 'healed', second: 'sealed', expected: 0.8 },
      { first: 'web applications', second: 'applications of the web', expected: 0.7878787878787878 },
      { first: 'this will have a typo somewhere', second: 'this will huve a typo somewhere', expected: 0.92 },
      { first: 'Olive-green table for sale, in extremely good condition.', second: 'For sale: table in very good  condition, olive green in colour.', expected: 0.6060606060606061 },
      { first: 'Olive-green table for sale, in extremely good condition.', second: 'For sale: green Subaru Impreza, 210,000 miles', expected: 0.2558139534883721 },
      { first: 'Olive-green table for sale, in extremely good condition.', second: 'Wanted: mountain bike with at least 21 gears.', expected: 0.1411764705882353 },
      { first: 'this has one extra word', second: 'this has one word', expected: 0.7741935483870968 },
      { first: 'a', second: 'a', expected: 1 },
      { first: 'a', second: 'b', expected: 0 },
      { first: '', second: '', expected: 1 },
      { first: 'a', second: '', expected: 0 },
      { first: '', second: 'a', expected: 0 },
      { first: 'apple event', second: 'apple    event', expected: 1 },
      { first: 'iphone', second: 'iphone x', expected: 0.9090909090909091 }
    ];

    testData.forEach(td => {
      expect(compareTwoStrings(td.first, td.second)).toBe(td.expected, td);
    });
  });
});

describe('findBestMatch', function () {
  var findBestMatch = stringSimilarity.findBestMatch;
  var badArgsErrorMsg = 'Bad arguments: First argument should be a string, second should be an array of strings';

  it('is a function', function () {
    expect(typeof findBestMatch).toBe('function');
  });

  it('accepts a string and an array of strings and returns an object', function () {
    var output = findBestMatch('one', ['two', 'three']);
    expect(typeof output).toBe('object');
  });

  it("throws a 'Bad arguments' error if no arguments passed", function () {
    expect(function () {
      findBestMatch();
    }).toThrowError(badArgsErrorMsg);
  });

  it("throws a 'Bad arguments' error if first argument is not a non-empty string", function () {
    expect(function () {
      findBestMatch('');
    }).toThrowError(badArgsErrorMsg);

    expect(function () {
      findBestMatch(8);
    }).toThrowError(badArgsErrorMsg);
  });

  it("throws a 'Bad arguments' error if second argument is not an array with at least one element", function () {
    expect(function () {
      findBestMatch('hello', 'something');
    }).toThrowError(badArgsErrorMsg);

    expect(function () {
      findBestMatch('hello', []);
    }).toThrowError(badArgsErrorMsg);
  });

  it("throws a 'Bad arguments' error if second argument is not an array of strings", function () {
    expect(function () {
      findBestMatch('hello', [2, 'something']);
    }).toThrowError(badArgsErrorMsg);
  });

  it('assigns a similarity rating to each string passed in the array', function () {
    var matches = findBestMatch('healed', ['mailed', 'edward', 'sealed', 'theatre']);

    expect(matches.ratings).toEqual([
      { target: 'mailed', rating: 0.4 },
      { target: 'edward', rating: 0.2 },
      { target: 'sealed', rating: 0.8 },
      { target: 'theatre', rating: 0.36363636363636365 }
    ]);
  });

  it("returns the best match and its similarity rating", function () {
    var matches = findBestMatch('healed', ['mailed', 'edward', 'sealed', 'theatre']);

    expect(matches.bestMatch).toEqual({ target: 'sealed', rating: 0.8 });
  });

  it("returns the index of best match from the target strings", function () {
    var matches = findBestMatch('healed', ['mailed', 'edward', 'sealed', 'theatre']);

    expect(matches.bestMatchIndex).toBe(2);
  });
});
















module.exports = {
	compareTwoStrings:compareTwoStrings,
	findBestMatch:findBestMatch
};

function compareTwoStrings(first, second) {
	first = first.replace(/\s+/g, '')
	second = second.replace(/\s+/g, '')

	if (first === second) return 1; // identical or empty
	if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

	let firstBigrams = new Map();
	for (let i = 0; i < first.length - 1; i++) {
		const bigram = first.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram) + 1
			: 1;

		firstBigrams.set(bigram, count);
	};

	let intersectionSize = 0;
	for (let i = 0; i < second.length - 1; i++) {
		const bigram = second.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram)
			: 0;

		if (count > 0) {
			firstBigrams.set(bigram, count - 1);
			intersectionSize++;
		}
	}

	return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

function findBestMatch(mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	
	const ratings = [];
	let bestMatchIndex = 0;

	for (let i = 0; i < targetStrings.length; i++) {
		const currentTargetString = targetStrings[i];
		const currentRating = compareTwoStrings(mainString, currentTargetString)
		ratings.push({target: currentTargetString, rating: currentRating})
		if (currentRating > ratings[bestMatchIndex].rating) {
			bestMatchIndex = i
		}
	}
	
	
	const bestMatch = ratings[bestMatchIndex]
	
	return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
}

function areArgsValid(mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find( function (s) { return typeof s !== 'string'})) return false;
	return true;
}