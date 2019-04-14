//
// Array.prototype.indexof()
//
/*
var path = require('path');
console.log('is node.js path available? ' + path);

var whitelist = ['.css', '.js'];

var events = [
    {
        file: 'css/core.css'
    },
    {
        file: 'js/app.js'
    },
    {
        file: 'index.html'
    }
];

var filtered = events.filter(event => {
        var ext = path.extname(event.file);
        return whitelist.indexOf(ext) > -1;
    }
)

console.log(filtered);
*/
//
// Arrow operator
//
/*
var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });
console.log(a2);

var a3 = a.map(s => s.length);
console.log(a3);
*/
//
// Array.prototype.reduce()
//
/*
var reducedValue = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
    return (previousValue + currentValue);
});
console.log('reduced valued: ' + reducedValue);

var reducedWithArrow = [0, 1, 2, 3].reduce((a, b) => a + b);
console.log('reduced with arrow: ' + reducedWithArrow);
*/
//
// Array.prototype.slice()
//
/*
var person = {
    name: 'torsten-schmeissel'
};

var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';
var sections = input.split('|').map(x => x.trim());

var ref = person[sections[0]];
console.log('ref: ' + ref);

var output = sections.slice(1);
console.log('output: ' + output);

// output: deslugify,uppercase
output = output.reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log('output: ' + output);
*/
//
// Array.prototype.sort()
//
/*
var items = [10, 30, 2, 20];

// using arrow function
//items.sort((a, b) => {
//    console.log(a - b);
//    if (a - b === 0) {
//        return 0;
//    }
//    if (a - b < 0) {
//        return -5434533;
//    }
//    if (a - b > 0) {
//        return 23423423;
//    }
//});

// using anonymous function
items.sort(function(a, b) {
    console.log(a - b);
    if (a - b === 0) {
        return 0;
    }
    if (a - b < 0) {
        return -5434533;
    }
    if (a - b > 0) {
        return 23423423;
    }
});
console.log('items: ' + items);

// sort + map + join
/*
var lessons = [
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1000
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 1058
    },    {
        title: 'Javascript Array methods in depth - join',
        views: 1025
    }
];

var list = lessons
    .sort((a, b) => b.views - a.views)
    .map(x => '    <li>${x.title} (${x.views})</li>')
    .join('\n');

var output = '<ul>\n${list}\n</ul>';
console.log('lessons: ' + output);
*/

//
// Array.prototype.filter();
//
/*
var items = [1, 2, 3, 4, , 5];
var filtered = items.filter(x => x > 3);

console.log(items);
console.log(filtered);

var people = [
	{
		name: 'Shane',
		pets: ['cat', 'dog']
	},
	{
		name: 'Simon',
		pets: ['horse']
	},
	{
		name: 'Ben',
		pets: []
	}
];

var filtered = people.filter(x => x.pets);
console.log(filtered);
*/

var lessons = [
    {
        title: 'Javascript Array methods in depth - join',
        views: 960,
		tags: ['array', 'join']
    },
    {
        title: 'Javascript Array methods in depth - concat',
        views: 1050,
		tags: ['array', 'concat']
    },
    {
        title: 'Javascript Array methods in depth - slice',
        views: 2503,
		tags: ['array', 'slice']		
    },
	{
        title: 'Javascript Functions in depth - bind',
        views: 2500,
		tags: ['functions', 'bind']
    }
];
//console.log(lessons);

var minViews = 1000;
var searchTearm = 'array'
var filtered = lessons
	.filter(x => x.tags.indexOf(searchTearm) > -1)
	.filter(x => x.views > minViews)
	.sort((a, b) => b.views - a.views)
	.map(x => '  <li>${x.title}</li>')
	.join('\n');

console.log('<ul> ${filtered} </ul>');