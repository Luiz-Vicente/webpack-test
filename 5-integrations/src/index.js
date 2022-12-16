// import Bootstrap
import "bootstrap";

// import CSS
import "./fonts.css";
import "./index.scss";

// import jQuery
import $ from "jquery";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBacon } from "@fortawesome/free-solid-svg-icons";

library.add(faBacon);
dom.watch();

const body = $("body");

const p = $("<p></p>").text("Texto muito louco").css("color", "red");

body.append(p);
