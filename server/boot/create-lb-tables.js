'use strict';

module.exports = function(server) {
    // enable authentication
    //   server.enableAuth();
    var ds = server.dataSources.mysqlDs;
    var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    ds.automigrate(lbTables, function(er) {
        if (er) throw er;
        console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
        ds.disconnect();
    });
};
// var server = require('./server');