/**
 * Created by XadillaX on 14-1-22.
 */
var helper = require("../helper");

/**
 * index.
 * @param req
 * @param resp
 */
exports.index = function(req, resp) {
    resp.send(200, "<h1>hello " + req.renderData.appName + "!</h1>");
};
