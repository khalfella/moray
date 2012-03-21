// Copyright 2012 Joyent, Inc.  All rights reserved.
//
// This file exists to run "before all tests" things. So namely, we go ahead
// and create a scratch database here to run unit tests in.
//
// Postgres 9.1 comamnds must be in your $PATH
//

require('shelljs/global');


///--- Globals

var DBHOME = '/tmp/moray_unit_test' || process.env.MORAY_DB_HOME;


/// Ignore all failures

exec('dropdb test');
exec('dropdb ' + process.env.USER);
exec('pg_ctl -D ' + DBHOME + ' stop');
rm('-fr', DBHOME);
