var compare = require('tsscmp');
var credential = 'test:123456';

function getCredential(authorization) {
    let token = authorization.split(' ');
    let signature = token[1];
    let buff = new Buffer(signature, 'base64');
    let credential = buff.toString('utf-8');
    return credential;
}

exports.authenticate = function (req) {
    let authorization = req.headers.authorization;
    let valid = false;
    let requestCrdential = null;
    if (authorization != null) {
        requestCrdential = getCredential(authorization);
        valid = compare(credential, requestCrdential);
        if (valid) {
            return true;
        }
        return valid;
    }
    return valid;
}