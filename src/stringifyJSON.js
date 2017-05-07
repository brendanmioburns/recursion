// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof(obj) === 'string') {
//if the object is already a string, there is no need to run stringifyJSON on it recursively, just return the string in quotation marks (show it was already a string).
    return '"' + obj + '"';

  } else if (Array.isArray(obj)) {
//if the object is an array, apply stringifyJSON to every element in array (this accounts for any nested arrays and objects).
    var result = obj.map(function(ele) {
      return stringifyJSON(ele);
    });
    return '[' + result + ']';

  } else if (obj && typeof(obj) === 'object') {
//if the object exists and is an object, apply stringifyJSON to every key and element in object (this accounts for any nested arrays and objects).
    var results = [];

    for (var key in obj) {
      var elem = obj[key];
      //don't stringify if the element is either a function or is non-existent
      if (typeof(elem) === 'function' || elem === undefined) {
        continue;
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(elem));
    }
    return '{' + results.join() + '}';

  } else {
//catch-all that adds anything else (integers, etc.) into quotation marks to turn into a string.
    return '' + obj;
  }
};
