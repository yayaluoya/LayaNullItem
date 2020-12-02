require("@qgame/adapter");
if(!window.navigator)
	window.navigator = {};
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 VVGame NetType/WIFI Language/zh_CN';
require("./libs/laya.vvmini.js");
if (window.requirePlugin) {
	requirePlugin("laya-library/laya.core.js");
	requirePlugin("laya-library/laya.d3.js");
	requirePlugin("laya-library/laya.html.js");
	requirePlugin("laya-library/laya.ui.js");

} else {
	require("laya-library/laya.core.js");
	require("laya-library/laya.d3.js");
	require("laya-library/laya.html.js");
	require("laya-library/laya.ui.js");

}
require("./index.js");