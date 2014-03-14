/**
 * Created by XadillaX on 14-3-14.
 */
var config = {};
config.renderData = require("../config/renderData");

/**
 * pretreatment function.
 * @param req
 * @param resp
 * @param next
 */
exports.pretreatment = function(req, resp, next) {
    var startProcessTime = Date.now();

    // clone the render data.
    req.renderData = Object.clone(config.renderData, true);
    req.renderData.startProcessTime = startProcessTime;

    next();
};
