/**
 * https://www.lodashjs.com/docs/lodash.get
 
  var object = { 'a': [{ 'b': { 'c': 3 } }] };
	_.get(object, 'a[0].b.c');
	// => 3
 
	_.get(object, ['a', '0', 'b', 'c']);
	// => 3
 
	_.get(object, 'a.b.c', 'default');
	// => 'default'

 */

function parse(object, array) {
  let value = object;
  for (let i = 0; i < array.length; i++) {
    value = value ?? [array[i]];
  }
  return value;
}

function get(object, path, defaultValue) {
  let value = null;
  if (path instanceof Array) {
    value = parse(object, path);
  } else if (typeof path === "string") {
    const array = path.split(".");
    value = parse(object, array);
  }

  return value || defaultValue;
}
