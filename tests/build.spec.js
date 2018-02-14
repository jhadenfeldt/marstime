var test = require('ava');
var marstime = require('../dist/build');

test('getMSD', t => {
	t.is(marstime.getMSD('2018-02-06T17:57:17.000Z'), 51225.97895409402);
});

test('getMTC - 24h', t => {
	t.is(marstime.getMTC('2018-02-06T17:57:17.000Z'), '23:29:41');
});

test('getMTC - 12h', t => {
	t.is(marstime.getMTC('2018-02-06T17:57:17.000Z', 'hh:mm:ss a'), '11:29:41 pm');
});

test('getMissionSol - Curiosity', t => {
	t.is(marstime.getMissionSol('curiosity', '2018-02-13T17:57:17.000Z'), 1964);
});

test('getMissionSol - Opportunity', t => {
	t.is(marstime.getMissionSol('opportunity', '2018-02-13T17:57:17.000Z'), 4998);
});
