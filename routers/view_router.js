var express = require("express");
var { viewhomepage, viewbasepage, viewloginpage, viewplanpage, viewsignuppage, viewforgetpage, viewreviewpage, viewresetpage, viewchangepasspage, viewcitiespage, viewmepage, payment_successfulpage, payment_unsuccessfulpage, viewwishlistpage } = require("./../controller/view_controller");
var { isloggedin, protectroute } = require("../controller/auth_controller");

let viewrouter = express.Router();

//will run for all the cases
viewrouter.use(isloggedin);
//next()
viewrouter.route("/base").get(viewbasepage)
viewrouter.route("/").get(viewhomepage)
viewrouter.route("/login").get(viewloginpage)
viewrouter.route("/plans").get(viewplanpage)
viewrouter.route("/signup").get(viewsignuppage)
viewrouter.route("/forgetpassword").get(viewforgetpage)
viewrouter.route("/resetpassword").get(viewresetpage)
viewrouter.route("/mepage").get(protectroute, viewmepage);
viewrouter.route("/cities").get(viewcitiespage);
viewrouter.route("/review").get(viewreviewpage);
viewrouter.route("/changepassword").get(protectroute, viewchangepasspage);
viewrouter.route("/success").get(protectroute, payment_successfulpage);
viewrouter.route("/failed").get(protectroute, payment_unsuccessfulpage);
viewrouter.route("/wishlist").get(protectroute, viewwishlistpage);



module.exports = viewrouter;
