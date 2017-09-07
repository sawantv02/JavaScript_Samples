var path=require('path');
var util=require('util');
var v8=require('v8');

util.log(path.basename(__filename));

var diruploads=path.join(__dirname,'www','files','uploads');

util.log(diruploads);

util.log(v8.getHeapStatistics());