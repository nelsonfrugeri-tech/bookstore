import Router from "./config/routes/router";
import Routes from "./config/routes/routes"

var router = new Router(location, Routes, document.body);
console.log("Main JS");
router.run();