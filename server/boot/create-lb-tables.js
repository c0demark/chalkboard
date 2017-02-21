'use strict';
// var server = require('./server');

module.exports = function(server) {
    // enable authentication
    //   server.enableAuth();
    var ds = server.dataSources.mysqlDs;
    var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    ds.automigrate(lbTables, function(err) {
        if (err) throw err;
        console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
        ds.disconnect();
    });
};