/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build-utils/devBundle.js":
/*!**********************************!*\
  !*** ./build-utils/devBundle.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webpack.config.client.js */ \"./build-utils/webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (true) {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default()));\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/home/isaac/mas-kliente/mas-kliente-admin/build-utils/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/build-utils/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./build-utils/devBundle.js?");

/***/ }),

/***/ "./build-utils/webpack.config.client.js":
/*!**********************************************!*\
  !*** ./build-utils/webpack.config.client.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"client/main.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      \"react-dom\": \"@hot-loader/react-dom\"\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/isaac/mas-kliente/mas-kliente-admin/build-utils/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/home/isaac/mas-kliente/mas-kliente-admin/build-utils/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./build-utils/webpack.config.client.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"your_secret_key\",\n  jwtAcountActivation: process.env.JWT_ACCOUNT_ACTIVATION || \"acount_activation\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb://\".concat(process.env.IP || \"localhost\", \":\").concat(process.env.MONGO_PORT || \"27017\", \"/MasKliente-Test-db\")\n};\nvar _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/home/isaac/mas-kliente/mas-kliente-admin/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/config/config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth/hasAuthorization.js":
/*!*****************************************************!*\
  !*** ./server/controllers/auth/hasAuthorization.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasAuthorization\": () => (/* binding */ hasAuthorization)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/auth/hasAuthorization.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/auth/hasAuthorization.js?");

/***/ }),

/***/ "./server/controllers/auth/index.js":
/*!******************************************!*\
  !*** ./server/controllers/auth/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signout\": () => (/* reexport safe */ _signout__WEBPACK_IMPORTED_MODULE_0__.signout),\n/* harmony export */   \"signin\": () => (/* reexport safe */ _signin__WEBPACK_IMPORTED_MODULE_1__.signin),\n/* harmony export */   \"hasAuthorization\": () => (/* reexport safe */ _hasAuthorization__WEBPACK_IMPORTED_MODULE_2__.hasAuthorization),\n/* harmony export */   \"requireSignin\": () => (/* reexport safe */ _requireSignin__WEBPACK_IMPORTED_MODULE_3__.requireSignin)\n/* harmony export */ });\n/* harmony import */ var _signout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signout */ \"./server/controllers/auth/signout.js\");\n/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin */ \"./server/controllers/auth/signin.js\");\n/* harmony import */ var _hasAuthorization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasAuthorization */ \"./server/controllers/auth/hasAuthorization.js\");\n/* harmony import */ var _requireSignin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requireSignin */ \"./server/controllers/auth/requireSignin.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/auth/index.js?");

/***/ }),

/***/ "./server/controllers/auth/requireSignin.js":
/*!**************************************************!*\
  !*** ./server/controllers/auth/requireSignin.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"requireSignin\": () => (/* binding */ requireSignin)\n/* harmony export */ });\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_0___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_1__.default.jwtSecret,\n  algorithms: [\"HS256\"],\n  userProperty: \"auth\"\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/auth/requireSignin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/auth/requireSignin.js?");

/***/ }),

/***/ "./server/controllers/auth/signin.js":
/*!*******************************************!*\
  !*** ./server/controllers/auth/signin.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": () => (/* binding */ signin)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar signin = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user, token;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default.findOne({\n              email: req.body.email\n            });\n\n          case 3:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(\"401\").json({\n              error: \"User not found\"\n            }));\n\n          case 6:\n            if (user.authenticate(req.body.password)) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(\"401\").send({\n              error: \"Email and password don't match.\"\n            }));\n\n          case 8:\n            token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n              _id: user._id\n            }, _config_config__WEBPACK_IMPORTED_MODULE_4__.default.jwtSecret);\n            res.cookie(\"t\", token, {\n              expire: new Date() + 9999\n            });\n            return _context.abrupt(\"return\", res.json({\n              token: token,\n              user: {\n                _id: user._id,\n                name: user.name,\n                email: user.email\n              }\n            }));\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(\"401\").json({\n              error: \"Could not sign in\"\n            }));\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 13]]);\n  }));\n\n  return function signin(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/auth/signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/auth/signin.js?");

/***/ }),

/***/ "./server/controllers/auth/signout.js":
/*!********************************************!*\
  !*** ./server/controllers/auth/signout.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signout\": () => (/* binding */ signout)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status(\"200\").json({\n    message: \"signed out\"\n  });\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signout, \"signout\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/auth/signout.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/auth/signout.js?");

/***/ }),

/***/ "./server/controllers/user/create.js":
/*!*******************************************!*\
  !*** ./server/controllers/user/create.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _email_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../email/email */ \"./server/email/email.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _email_email_templates_confirmationMail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../email/email-templates/confirmationMail */ \"./server/email/email-templates/confirmationMail.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar development = _config_config__WEBPACK_IMPORTED_MODULE_5__.default.env === \"development\";\nvar create = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var _req$body, name, email, password;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;\n            _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default.findOne({\n              email: email\n            }).exec(function (err, user) {\n              if (user) {\n                return res.status(400).json({\n                  error: \"Email is taken\"\n                });\n              }\n\n              var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().sign({\n                name: name,\n                email: email,\n                password: password\n              }, _config_config__WEBPACK_IMPORTED_MODULE_5__.default.jwtAcountActivation, {\n                expiresIn: \"10m\"\n              });\n              var emailData = {\n                from: \"clickkorsou@gmail.com\",\n                to: email,\n                subject: \"Account Activation Link\",\n                html: (0,_email_email_templates_confirmationMail__WEBPACK_IMPORTED_MODULE_7__.default)(token, development)\n              };\n              (0,_email_email__WEBPACK_IMPORTED_MODULE_4__.sendEmailWithNodemailer)(req, res, emailData);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function create(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar confirmation = function confirmation(req, res, next) {\n  var token = req.body.token;\n\n  if (token) {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().verify(token, _config_config__WEBPACK_IMPORTED_MODULE_5__.default.jwtAcountActivation, function (err, decoded) {\n      if (err) {\n        return res.status(401).json({\n          error: \"This acount activation link had expired\"\n        });\n      }\n\n      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default().decode(token),\n          name = _jwt$decode.name,\n          email = _jwt$decode.email,\n          password = _jwt$decode.password;\n\n      _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default.findOne({\n        email: email\n      }, function (err, user) {\n        if (err) return res.status(\"401\").json({\n          error: \"Someting went wrong please try again\"\n        });\n\n        if (!user) {\n          var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default({\n            name: name,\n            email: email,\n            password: password,\n            isVerified: true,\n            imgId: uuidv4()\n          });\n          newUser.save().then(function () {\n            return res.status(200).json({\n              message: \"Your Acount is Successfully Activated Please Sign in\"\n            });\n          })[\"catch\"](function (error) {\n            return res.status(400).json({\n              error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__.default.getErrorMessage(error)\n            });\n          });\n          return \"\";\n        }\n\n        if (user.isVerified) {\n          return res.status(400).send({\n            message: \"This Email has already been verified, Sign In\"\n          });\n        }\n      });\n    });\n  } else {\n    return res.status(401).json({\n      error: \"Someting went wrong please try again\"\n    });\n  }\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(development, \"development\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/create.js\");\n  reactHotLoader.register(create, \"create\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/create.js\");\n  reactHotLoader.register(confirmation, \"confirmation\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/create.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/create.js?");

/***/ }),

/***/ "./server/controllers/user/index.js":
/*!******************************************!*\
  !*** ./server/controllers/user/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_0__.create),\n/* harmony export */   \"list\": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_1__.list),\n/* harmony export */   \"read\": () => (/* reexport safe */ _read__WEBPACK_IMPORTED_MODULE_2__.read),\n/* harmony export */   \"remove\": () => (/* reexport safe */ _remove__WEBPACK_IMPORTED_MODULE_3__.remove),\n/* harmony export */   \"update\": () => (/* reexport safe */ _update__WEBPACK_IMPORTED_MODULE_4__.update),\n/* harmony export */   \"userByID\": () => (/* reexport safe */ _userByID__WEBPACK_IMPORTED_MODULE_5__.userByID)\n/* harmony export */ });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./server/controllers/user/create.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./server/controllers/user/list.js\");\n/* harmony import */ var _read__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read */ \"./server/controllers/user/read.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove */ \"./server/controllers/user/remove.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update */ \"./server/controllers/user/update.js\");\n/* harmony import */ var _userByID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userByID */ \"./server/controllers/user/userByID.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/index.js?");

/***/ }),

/***/ "./server/controllers/user/list.js":
/*!*****************************************!*\
  !*** ./server/controllers/user/list.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar list = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var users;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default.find().select(\"name email updated created\");\n\n          case 3:\n            users = _context.sent;\n            res.json(users);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(400).json({\n              error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_3__.default.getErrorMessage(_context.t0)\n            }));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function list(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, \"list\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/list.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/list.js?");

/***/ }),

/***/ "./server/controllers/user/read.js":
/*!*****************************************!*\
  !*** ./server/controllers/user/read.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"read\": () => (/* binding */ read)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(read, \"read\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/read.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/read.js?");

/***/ }),

/***/ "./server/controllers/user/remove.js":
/*!*******************************************!*\
  !*** ./server/controllers/user/remove.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar remove = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user, deletedUser;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            user = req.profile;\n            _context.next = 4;\n            return user.remove();\n\n          case 4:\n            deletedUser = _context.sent;\n            deletedUser.hashed_password = undefined;\n            deletedUser.salt = undefined;\n            res.json(deletedUser);\n            _context.next = 13;\n            break;\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(400).json({\n              error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(_context.t0)\n            }));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function remove(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(remove, \"remove\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/remove.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/remove.js?");

/***/ }),

/***/ "./server/controllers/user/update.js":
/*!*******************************************!*\
  !*** ./server/controllers/user/update.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar update = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            user = req.profile;\n            user = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()(user, req.body);\n            user.updated = Date.now();\n            _context.next = 6;\n            return user.save();\n\n          case 6:\n            user.hashed_password = undefined;\n            user.salt = undefined;\n            res.json(user);\n            _context.next = 14;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(400).json({\n              error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__.default.getErrorMessage(_context.t0)\n            }));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function update(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(update, \"update\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/update.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/update.js?");

/***/ }),

/***/ "./server/controllers/user/userByID.js":
/*!*********************************************!*\
  !*** ./server/controllers/user/userByID.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userByID\": () => (/* binding */ userByID)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.model */ \"./server/models/user.model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar userByID = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next, id) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _models_user_model__WEBPACK_IMPORTED_MODULE_2__.default.findById(id);\n\n          case 3:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(\"400\").json({\n              error: \"User not found\"\n            }));\n\n          case 6:\n            req.profile = user;\n            console.log(\"found the user\");\n            next();\n            _context.next = 14;\n            break;\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(\"400\").json({\n              error: \"Could not retrieve user\"\n            }));\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function userByID(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(userByID, \"userByID\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/controllers/user/userByID.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/controllers/user/userByID.js?");

/***/ }),

/***/ "./server/email/email-templates/confirmationMail.js":
/*!**********************************************************!*\
  !*** ./server/email/email-templates/confirmationMail.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default(link, development) {\n  return \"<!DOCTYPE html PUBLIC \\\"-//W3C//DTD XHTML 1.0 Transitional//EN\\\" \\\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\\">\\n<html xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\n\\t<head>\\n\\t\\t<meta http-equiv=\\\"Content-Type\\\" content=\\\"text/html; charset=UTF-8\\\" />\\n\\t\\t<title>Apelsina.com Confirmation Mail</title>\\n\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n\\t</head>\\n\\t<body style=\\\"margin: 0; padding: 0;\\\">\\n\\t\\t<table cellpadding=\\\"0\\\" cellspacing=\\\"0\\\" width=\\\"100%\\\">\\n\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t<table\\n\\t\\t\\t\\t\\t\\talign=\\\"center\\\"\\n\\t\\t\\t\\t\\t\\tcellpadding=\\\"0\\\"\\n\\t\\t\\t\\t\\t\\tcellspacing=\\\"0\\\"\\n\\t\\t\\t\\t\\t\\twidth=\\\"600\\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t<td\\n\\t\\t\\t\\t\\t\\t\\t\\tbgcolor=\\\" #FF8C00\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\talign=\\\"center\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\\"padding: 40px 0 30px 0; color:#fff: font-size:20px; font-weight:bold;\\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\tApelsina.com\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t<td bgcolor=\\\" #fff\\\" align=\\\"center\\\"  style=\\\"padding: 40px 0 30px 0;\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\tplease click the link bellow to confirm your\\n\\t\\t\\t\\t\\t\\t\\t\\tEmail:\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t<td bgcolor=\\\" #fff\\\" align=\\\"center\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\t\\thref=\\\"http://\".concat(development ? \"localhost:3000\" : \"maskliente.com\", \"/user-auth-confirmation/\").concat(link, \"\\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>http://\").concat(development ? \"localhost:3000\" : \"maskliente.com\", \"/user-auth-confirmation/\").concat(link, \"\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t\\t<tr >\\n\\t\\t\\t\\t\\t\\t\\t<td bgcolor=\\\" #fff\\\" align=\\\"center\\\" style=\\\"padding: 40px 0 30px 0;\\\" >\\n\\t\\t\\t\\t\\t\\t\\t\\tif you didnt Sign up at apelsina.com please ignore this email.\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t<td bgcolor=\\\" #20232a\\\" style=\\\"color: #fff\\\" align=\\\"center\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t</table>\\n\\t\\t\\t\\t</td>\\n\\t\\t\\t</tr>\\n\\t\\t</table>\\n\\t</body>\\n</html>\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/email/email-templates/confirmationMail.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/email/email-templates/confirmationMail.js?");

/***/ }),

/***/ "./server/email/email.js":
/*!*******************************!*\
  !*** ./server/email/email.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendEmailWithNodemailer\": () => (/* binding */ sendEmailWithNodemailer)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar nodeMailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nfunction sendEmailWithNodemailer(req, res, emailData) {\n  var transporter = nodeMailer.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 587,\n    secure: false,\n    requireTLS: true,\n    auth: {\n      user: \"clickkorsou@gmail.com\",\n      // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD\n      pass: \"nnxbrjahgipzjiix\" // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER\n\n    },\n    tls: {\n      ciphers: \"SSLv3\"\n    }\n  });\n  return transporter.sendMail(emailData).then(function (info) {\n    console.log(\"Message sent: \".concat(info.response));\n    return res.json({\n      message: \"An Email has been sent to \".concat(emailData.to, \". Follow the instruction to activate your account\")\n    });\n  })[\"catch\"](function (err) {\n    return console.log(\"Problem sending email: \".concat(err));\n  });\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(sendEmailWithNodemailer, \"sendEmailWithNodemailer\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/email/email.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/email/email.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _build_utils_devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../build-utils/devBundle */ \"./build-utils/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar development = \"development\" === \"development\";\n\nif (development) {\n  console.log(\"development mode devBundle active:\");\n  _build_utils_devBundle__WEBPACK_IMPORTED_MODULE_9__.default.compile(app);\n}\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n})); //<-----------Need to Read About this part of EXPRESS\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json()); //<-----------Need to Read About this part of EXPRESS\n\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()({\n  contentSecurityPolicy: false\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, \"dist\")));\napp.use(\"/\", _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use(\"/\", _routes_auth_routes__WEBPACK_IMPORTED_MODULE_7__.default);\napp.get(\"*\", function (req, res) {\n  if (req.url === \"/__webpack_hmr\") return;\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_6__.default)());\n});\napp.use(function (err, req, res, next) {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({\n      error: err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      error: err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nvar _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/express.js\");\n  reactHotLoader.register(development, \"development\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/express.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/**\n * Get unique error field name\n */\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf(\".$\") + 2, err.message.lastIndexOf(\"_1\"));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + \" already exists\";\n  } catch (ex) {\n    output = \"Unique field already exists\";\n  }\n\n  return output;\n};\n/**\n * Get the error message from error object\n */\n\n\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = \"\";\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = \"Something went wrong\";\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nvar _default = {\n  getErrorMessage: getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/helpers/dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/helpers/dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  name: {\n    type: String,\n    trim: true,\n    required: \"Name is required\"\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: \"Email already exists\",\n    match: [/.+\\@.+\\..+/, \"* please fill a valid email address\"],\n    required: \"* email is required\"\n  },\n  resetPasswordLink: {\n    data: String,\n    \"default\": \"\"\n  },\n  isVerified: {\n    type: Boolean,\n    \"default\": false\n  },\n  hashed_password: {\n    type: String,\n    required: \"* password is required\"\n  },\n  salt: String\n}, {\n  timestamps: true\n});\nUserSchema.virtual(\"password\").set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path(\"hashed_password\").validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate(\"password\", \"Password must be at least 6 characters.\");\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate(\"password\", \"Password is required\");\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(plainText, this.hashed_password);\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return \"\";\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password, this.salt);\n  },\n  makeSalt: function makeSalt() {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSaltSync(10);\n  }\n};\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth */ \"./server/controllers/auth/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/auth/signin\").post(_controllers_auth__WEBPACK_IMPORTED_MODULE_1__.signin);\nrouter.route(\"/auth/signout\").get(_controllers_auth__WEBPACK_IMPORTED_MODULE_1__.signout);\nvar _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/routes/auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user */ \"./server/controllers/user/index.js\");\n/* harmony import */ var _controllers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth */ \"./server/controllers/auth/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/users\").post(_controllers_user__WEBPACK_IMPORTED_MODULE_1__.create).get(_controllers_user__WEBPACK_IMPORTED_MODULE_1__.list);\nrouter.route(\"/api/users/:userId\").get(_controllers_auth__WEBPACK_IMPORTED_MODULE_2__.requireSignin, _controllers_user__WEBPACK_IMPORTED_MODULE_1__.read).put(_controllers_auth__WEBPACK_IMPORTED_MODULE_2__.requireSignin, _controllers_auth__WEBPACK_IMPORTED_MODULE_2__.hasAuthorization, _controllers_user__WEBPACK_IMPORTED_MODULE_1__.update)[\"delete\"](_controllers_auth__WEBPACK_IMPORTED_MODULE_2__.requireSignin, _controllers_auth__WEBPACK_IMPORTED_MODULE_2__.hasAuthorization, _controllers_user__WEBPACK_IMPORTED_MODULE_1__.remove);\nrouter.param(\"userId\", _controllers_user__WEBPACK_IMPORTED_MODULE_1__.userByID);\nvar _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_1___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_2__.default.mongoUri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true\n}).then(function (result) {\n  _express__WEBPACK_IMPORTED_MODULE_0__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_2__.default.port);\n  console.log(\"Server is listening on PORT:\", _config_config__WEBPACK_IMPORTED_MODULE_2__.default.port);\n})[\"catch\"](function (err) {\n  console.log(\"Error Mongoose Connection:\", err);\n});\n\n//# sourceURL=webpack://mas-kliente-admin/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Mas Kliente Admin</title>\\n\\n\\n  </head>\\n  <body>\\n    <div id=\\\"root\\\" ></div>\\n    <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\">\\n    </script>\\n  </body>\\n</html>\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/isaac/mas-kliente/mas-kliente-admin/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mas-kliente-admin/./template.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/extend");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;