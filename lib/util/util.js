exports.trimString = (str, max) => {
	if (!max) max = 30;
	if (str.length > max) return `${str.substr(0, max)}...`;
	return str;
};

exports.random = (n1, n2) => Math.floor(Math.random() * (n2 - n1)) + n1;

exports.randomArray = array => array[this.random(0, array.length)];

exports.objectIsEmpty = obj => Object.entries(obj).length === 0;

exports.isUnicodeEmoji = str => /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c([\ud000-\udfff]){1,2}|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$/.test(str);
