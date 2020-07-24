var express = require("express");
var { getplan, postplan, patchplan , getallplan , queryincluder} = require("./../controller/plan_controller");
var { protectroute , authorize} = require("./../controller/auth_controller");

// server.route("/api/plan").post(postplan);
// server.route("/api/plan/:id").get(getplan).patch(patchplan);

let planrouter = express.Router();
planrouter.route("/top2plans").get(protectroute , queryincluder , getallplan);
planrouter.route("").get(protectroute , getallplan).post(protectroute , authorize("admin"), postplan);
planrouter.route("/:id").get(getplan).patch(protectroute , authorize("admin"), patchplan);

module.exports = planrouter;
