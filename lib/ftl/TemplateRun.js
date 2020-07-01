/**
 * Connect to JAR
 * from https://github.com/ijse/FED/blob/master/libs/modules/freemarker/TemplateRun.js
 */
var spawn = require('child_process').spawn;
var path = require("path");
var assign = require('object-assign');
// 读取一个jar包，读取ftl的关键jar包
var jarFile = path.join(__dirname, "/jar/FMtoll.jar");

//	dataModel - data model
//	settings - include `encoding` and `viewFolder`
//	fileName - template file name
exports.processTemplate = function(path, dataModel, settings, callback) {
	var dataModel = JSON.stringify(dataModel);
	var resultData = "";
	var cmd;
	var stdout;
	var stderr;

	settings = assign({
		encoding: 'utf-8',
		viewFolder: process.cwd()
	}, settings);

	settings = JSON.stringify(settings);
	// 开子进程通过java命令来完成对ftl的渲染
	cmd = spawn('java', ["-jar", jarFile, settings, path.substring(1), dataModel ]);
	stdout = cmd.stdout;
	stderr = cmd.stderr;

	callback(stdout, stderr);
	stderr.setEncoding('utf-8');
};
