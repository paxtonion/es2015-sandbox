(function () {

	start('Destructuring variables', (context) => {

		let x = 3;
		let y = 5;

		[x, y] = [y, x];

		context.output('x = ' + x);
		context.output('y = ' + y);
	});

	start('Destructuring objects', (context) => {

		let patient = {
			firstName: 'Terence',
			lastName: 'Offenberger',
			middleName: 'Elton',
			address: {
				line1: '123 Fake Street',
				line2: 'Wolverhampton',
				postCode: 'WV1 1WV'
			}
		};

		let {
			firstName: fn,
			middleName: mn,
			lastName: ln,
			address: { postCode: pc }
			} = patient;

		context.output(fn);
		context.output(mn);
		context.output(ln);
		context.output(pc);
	});


	start('Destructuring in functions', (context) => {

		let doStuffWithConfig = function ({title, description}) {

			context.output(title);
			context.output(description);
		};

		let config = {
			description: 'This is a description',
			title: 'This is a title'
		};
		doStuffWithConfig(config);
	});


	start('Default parameter values', (context) => {

		function sayMyName(name = "Default name value here") {
			return 'Your name is <strong>' + name + '</strong>';
		}

		context.output('explicit: ' + sayMyName('Bob'));
		context.output('empty: ' + sayMyName(''));
		context.output('undefined: ' + sayMyName(undefined));
		context.output('null: ' + sayMyName(null));
		context.output('not specified: ' + sayMyName());


		function sayMyFullName({first = "Terence", last = "Offenberger"} = {}) {
			return 'Your full name is <strong>' + first + ' ' + last + '</strong>';
		}

		context.output('specified: ' + sayMyFullName({first: 'Kevin', last: 'Paxton'}));
		context.output('empty object: ' + sayMyFullName({}));
		context.output('not specified: ' + sayMyFullName());
	});


	start('Rest parameters', (context) => {

		function count(name, ...numbers) {

			let total = 0;
			numbers.forEach(n => total += n);
			return name + ': ' + total;
		}

		context.output(count('All numbers', 1, 2, 3, 4, 5));
		context.output(count('No numbers'));
	});


	start('Spread operator', (context) => {

		function spread(x, y, z) {
			context.output(x + ', ' + y + ', ' + z);
		}

		spread(1, 2, 3);
		spread([1, 2, 3]);
		spread(...[1, 2, 3]);

		function addToArray(x) {

			return [1, 2, 3, ...x, 'a', 'b', 'c', ...x];
		}

		context.output(addToArray(['x', 'y', 'z']));
	});


	start('Template literals', (context) => {

		let tmplVal = 'Kevin';
		let tmpl = `Your name is ${tmplVal}!`;
		context.output(tmpl);

		function makeVarsBold(strings, ...values) {
			let output = '';
			strings.forEach((s, idx) => {
				output += s;
				if (idx < values.length) {
					output += '<strong>' + values[idx] + '</strong>';
				}
			});
			return output;
		}

		let t1 = 'quick';
		let t2 = 'fox';
		let t3 = 'lazy';
		let tmpl2 = makeVarsBold `The ${t1} brown ${t2} jumped over the ${t3} dog`;
		context.output(tmpl2);
	});

})();