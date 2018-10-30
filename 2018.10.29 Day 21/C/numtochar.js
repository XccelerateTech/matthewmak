let rannum = require('./ran1_26');
function cvt(){
    return String.fromCharCode(rannum() + 64);
}

module.exports = cvt;