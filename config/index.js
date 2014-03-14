/**
 * Created by XadillaX on 14-1-22.
 */
var server = require("./server");
var router = require("./router");
var mongodb = require("./mongodb");
var secret = require("./secret");
var logger = require("./log4js")(server.environment);
var upload = require("./upload");
var renderData = require("./renderData");

module.exports = {
    server      : server,
    router      : router,
    logger      : logger,
    mongodb     : mongodb,
    secret      : secret,
    upload      : upload,
    renderData  : renderData
};
