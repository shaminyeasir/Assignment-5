const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
console.log(color);
console.log(typeof color);
const colorstr = 'bg' +'-' +'['+color+']';
console.log(colorstr);
console.log(typeof colorstr);