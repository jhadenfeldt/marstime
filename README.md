# marstime [![Build Status](https://travis-ci.org/jhadenfeldt/marstime.svg?branch=master)](https://travis-ci.org/jhadenfeldt/marstime)

> JS library to convert UTC to Mars time 

## Features
- Convert any UTC time to Mars Sol Date (MSD)
- Convert any UTC time to Coordinated Mars Time (MTC)

## Getting started
Install the package

```
$ npm i --save marstime
```

## Usage
```javascript
import marstime from 'marstime';

// Get the Mars Sol Date
marstime.getMSD('2018-02-06T17:57:17.000Z');
// 51225.97895409402

// Get the MTC in 24h format
marstime.getMTC('2018-02-06T17:57:17.000Z');
// '23:29:41'

// Get the MTC in any format
marstime.getMTC('2018-02-06T17:57:17.000Z', 'hh:mm:ss a');
// '11:29:41 pm'

// Get the mission sol of Opportunity or Curiosity
marstime.getMissionSol('Opportunity', '2018-02-13T17:57:17.000Z');
// 4998

// or get the current mission sol
marstime.getMissionSol('Opportunity');

```

## Running the tests
Install the package and all requirements:
```
$ npm i --save marstime
```
Run the tests:
```
$ npm test
```

## Contributing

1. Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found
2. Fork the repository, make your changes, and add yourself to [AUTHORS.md](AUTHORS.md)
3. Send a pull request
