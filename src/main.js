// 入口文件
import { render } from "react-dom";
import { App } from "./app";

require("./css/base.css");
require("./less/index.less");

let remWidth = document.documentElement.clientWidth;
let fs = remWidth/750*100;
document.documentElement.style.fontSize = `${fs}px`;

render(<App />, document.getElementById("app"));