(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("compass", [], factory);
	else if(typeof exports === 'object')
		exports["compass"] = factory();
	else
		root["compass"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var js_base64_1 = __webpack_require__(10);
/**
 * Represents the Client service for the Cosential Compass API calls.
 */
var Client = /** @class */ (function () {
    function Client(config) {
        this.config = config;
    }
    Object.defineProperty(Client.prototype, "config", {
        /**
         * Getter config
         * @return {ClientConfig}
         */
        get: function () {
            return this._config;
        },
        /**
         * Setter config
         * @param {ClientConfig} value
         */
        set: function (value) {
            this._config = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a response for the GET request.
     * @param url - Compass API endpoint with/without a valid Id
     * @param opts - Optional request headers
     * @param from - Number of elements you would like to skip
     * @param size - Number of elements you would like to receive (max is 500)
     * @param includeDeleted - Include deleted records in GET
     * @returns A detailed response object as a Promise
     */
    Client.prototype.get = function (url, opts, from, size, includeDeleted) {
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        if (from === void 0) { from = 0; }
        if (size === void 0) { size = 50; }
        if (includeDeleted === void 0) { includeDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, newUrl, paging, responseCode, responseText, responseUrl, response, message, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            //Basic auth
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey,
                            //We're expecting json
                            'Accept': 'application/json'
                        };
                        newUrl = this.config.compassUrl + url;
                        paging = 'from=' + from + '&size=' + size;
                        newUrl += (url.indexOf('?q=') > -1) ? '&' + paging : '?' + paging;
                        if (includeDeleted)
                            newUrl += '&includedeleted=true';
                        if (opts.showErrors)
                            headers['x-compass-show-errors'] = 'true';
                        responseCode = 0;
                        responseText = '';
                        responseUrl = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(newUrl, {
                                method: 'GET',
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        responseCode = response.status;
                        responseText = response.statusText;
                        responseUrl = response.url;
                        if (!response.ok) {
                            throw new Error("Compass API call failed. [" + responseUrl + "] responded with: [" + responseCode + " " + responseText + "]");
                        }
                        message = "Compass API call successful. [" + responseUrl + "] responded with: [" + responseCode + " " + responseText + "]";
                        data = null;
                        if (!(response.status == 200)) return [3 /*break*/, 4];
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, {
                            success: true,
                            status: responseCode,
                            error: null,
                            message: message,
                            result: data
                        }];
                    case 5:
                        e_1 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                status: responseCode,
                                error: e_1,
                                message: e_1.message,
                                result: null
                            }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns a response for the POST request.
     * @param url - Compass API endpoint
     * @param payload - Array of elements
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    Client.prototype.post = function (url, payload, opts) {
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, responseCode, responseText, responseUrl, response, data, e_2, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey,
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        };
                        if (opts.showErrors)
                            headers['x-compass-show-errors'] = 'true';
                        responseCode = 0;
                        responseText = '';
                        responseUrl = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'POST',
                                headers: headers,
                                body: JSON.stringify(payload)
                            })];
                    case 2:
                        response = _a.sent();
                        responseCode = response.status;
                        responseText = response.statusText;
                        responseUrl = response.url;
                        if (!response.ok) {
                            throw new Error("Compass API call failed. [" + responseUrl + "] responded with: [" + responseCode + " " + responseText + "]");
                        }
                        data = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _a.sent();
                        data = null;
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, {
                            success: true,
                            status: responseCode,
                            error: null,
                            message: null,
                            result: data
                        }];
                    case 7:
                        e_3 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                status: responseCode,
                                error: e_3,
                                message: e_3.message,
                                result: null
                            }];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns a response for the PUT request.
     * @param url - Compass API endpoint with a valid Id
     * @param payload - Updated element including new and existing values
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    Client.prototype.put = function (url, payload, opts) {
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, responseCode, responseText, responseUrl, response, data, e_4, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey,
                            'Accept': 'application/json',
                            'Content-Type': (opts.urlEncoded) ? 'application/x-www-form-urlencoded' : 'application/json'
                        };
                        if (opts.showErrors)
                            headers['x-compass-show-errors'] = 'true';
                        responseCode = 0;
                        responseText = '';
                        responseUrl = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'PUT',
                                headers: headers,
                                body: JSON.stringify(payload)
                            })];
                    case 2:
                        response = _a.sent();
                        responseCode = response.status;
                        responseText = response.statusText;
                        responseUrl = response.url;
                        if (!response.ok) {
                            throw new Error("Compass API call failed. [" + responseUrl + "] responded with: [" + responseCode + " " + responseText + "]");
                        }
                        data = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_4 = _a.sent();
                        data = null;
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, {
                            success: true,
                            status: responseCode,
                            error: null,
                            message: null,
                            result: data
                        }];
                    case 7:
                        e_5 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                status: responseCode,
                                error: e_5,
                                message: e_5.message,
                                result: null
                            }];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns a response for the DELETE request.
     * @param url - Compass API endpoint with a valid Id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    Client.prototype.delete = function (url, opts) {
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, responseCode, responseText, responseUrl, response, data, e_6, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey
                        };
                        if (opts.showErrors)
                            headers['x-compass-show-errors'] = 'true';
                        responseCode = 0;
                        responseText = '';
                        responseUrl = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'DELETE',
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        responseCode = response.status;
                        responseText = response.statusText;
                        responseUrl = response.url;
                        if (!response.ok) {
                            throw new Error("Compass API call failed. [" + responseUrl + "] responded with: [" + responseCode + " " + responseText + "]");
                        }
                        data = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        data = null;
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, {
                            success: true,
                            status: responseCode,
                            error: null,
                            message: null,
                            result: data
                        }];
                    case 7:
                        e_7 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                status: responseCode,
                                error: e_7,
                                message: e_7.message,
                                result: null
                            }];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns top 50 search results based on query string unless otherwise specified.
     * @param url - Compass API endpoint
     * @param queryString - Complete search query
     * @param from - Number of elements you would like to skip
     * @param size - Number of elements you would like to receive (max is 500)
     * @param includeDeleted - Include deleted records in search
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    Client.prototype.search = function (url, queryString, fields, from, size, includeDeleted, opts) {
        if (fields === void 0) { fields = null; }
        if (from === void 0) { from = 0; }
        if (size === void 0) { size = 50; }
        if (includeDeleted === void 0) { includeDeleted = false; }
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var searchQuery, newUrl, searchDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchQuery = (queryString != null) ? queryString.trim() : queryString;
                        if (searchQuery == '' || searchQuery == null) {
                            throw new Error("Compass API call failed. String to search '" + searchQuery + "' is Empty or Invalid.");
                        }
                        newUrl = url + '/search';
                        searchDetails = {
                            queryString: searchQuery,
                            fields: fields,
                            includeDeleted: includeDeleted,
                            Size: size,
                            From: from
                        };
                        return [4 /*yield*/, this.post(newUrl, searchDetails, opts)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns entire search result data set.
     * @param url - Compass API endpoint
     * @param queryString - Complete search query
     * @param includeDeleted - Include deleted records in search
     * @param fields - Comma-separated fields to return
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    Client.prototype.searchForAll = function (url, queryString, fields, includeDeleted, opts) {
        if (fields === void 0) { fields = null; }
        if (includeDeleted === void 0) { includeDeleted = false; }
        if (opts === void 0) { opts = {
            showErrors: true
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var finished, data, from, size, res, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finished = false;
                        data = [];
                        from = 0;
                        size = 500;
                        _a.label = 1;
                    case 1:
                        if (!!finished) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.search(url, queryString, fields, from, size, includeDeleted, opts)];
                    case 2:
                        res = _a.sent();
                        if (res.status == 200) {
                            if (Object.keys(res.result).length > 0) {
                                for (index = 0; index < Object.keys(res.result).length; index++) {
                                    data.push(res.result[index]);
                                }
                                from += size;
                            }
                            else {
                                finished = true;
                            }
                        }
                        else {
                            //something went wrong
                            //do not return any data
                            return [2 /*return*/, { success: res.success, status: res.status, error: res.error, message: res.message, result: null }];
                        }
                        return [3 /*break*/, 1];
                    case 3: 
                    //all good
                    return [2 /*return*/, { success: true, status: 200, error: null, message: null, result: data }];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(15);
module.exports = self.fetch.bind(self);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//Service Models
var client_config_1 = __webpack_require__(3);
exports.ClientConfig = client_config_1.ClientConfig;
var client_1 = __webpack_require__(0);
exports.Client = client_1.Client;
var company_client_1 = __webpack_require__(4);
exports.CompanyClient = company_client_1.CompanyClient;
var contact_client_1 = __webpack_require__(5);
exports.ContactClient = contact_client_1.ContactClient;
var email_client_1 = __webpack_require__(6);
exports.EmailClient = email_client_1.EmailClient;
var personnel_client_1 = __webpack_require__(7);
exports.PersonnelClient = personnel_client_1.PersonnelClient;
var project_client_1 = __webpack_require__(8);
exports.ProjectClient = project_client_1.ProjectClient;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(13);
/**
 * Represents the Client configuration in order to authenticate a User.
 */
var ClientConfig = /** @class */ (function () {
    function ClientConfig(firmId, username, password, apiKey, compassUrl) {
        /* private properties */
        this.urlTest = /^(http|https):\/\/[^ "]+$/;
        this.apiKeyTest = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        /* properties */
        this._apiKey = '';
        this._compassUrl = 'https://compass.uat.cosential.com/api';
        this._firmId = 0;
        this._username = '';
        this._password = '';
        this.apiKey = apiKey;
        this.compassUrl = compassUrl;
        this.firmId = firmId;
        this.username = username;
        this.password = password;
    }
    Object.defineProperty(ClientConfig.prototype, "apiKey", {
        /* property accessors */
        /**
         * Getter _apiKey
         * @return {_apiKey}
         */
        get: function () { return this._apiKey; },
        /**
         * Setter _apiKey
         * @param {_apiKey} v
         */
        set: function (v) {
            if (!util_1.isUndefined(v)) {
                if (!this.apiKeyTest.test(v))
                    throw new Error("apiKey config property value [" + v + "] is not valid.");
                this._apiKey = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "compassUrl", {
        /**
         * Getter _compassUrl
         * @return {_compassUrl}
         */
        get: function () { return this._compassUrl; },
        /**
         * Setter _compassUrl
         * @param {_compassUrl} v
         */
        set: function (v) {
            if (!util_1.isUndefined(v)) {
                if (!this.urlTest.test(v))
                    throw new Error("compassUrl config property value [" + v + "] is not valid.");
                this._compassUrl = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "firmId", {
        /**
         * Getter _firmId
         * @return {_firmId}
         */
        get: function () { return this._firmId; },
        /**
         * Setter _firmId
         * @param {_firmId} v
         */
        set: function (v) {
            if (!util_1.isUndefined(v)) {
                this._firmId = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "username", {
        /**
         * Getter _username
         * @return {_username}
         */
        get: function () { return this._username; },
        /**
         * Setter _username
         * @param {_username} v
         */
        set: function (v) { this._username = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "password", {
        /**
         * Getter _password
         * @return {_password}
         */
        get: function () { return this._password; },
        /**
         * Setter _password
         * @param {_password} v
         */
        set: function (v) { this._password = v; },
        enumerable: true,
        configurable: true
    });
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var client_1 = __webpack_require__(0);
/**
 * Represents the client service for Companies.
 */
var CompanyClient = /** @class */ (function (_super) {
    __extends(CompanyClient, _super);
    function CompanyClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns Company Address.
     * @param companyId - Cosential company id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    CompanyClient.prototype.getCompanyAddress = function (companyId, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var addressUrl, allAddresses, message, result, address, resultUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressUrl = '/companies/' + companyId + '/addresses';
                        return [4 /*yield*/, this.get(addressUrl, opts)];
                    case 1:
                        allAddresses = _a.sent();
                        message = '';
                        result = null;
                        if (!(allAddresses.result != null && allAddresses.result.length > 0)) return [3 /*break*/, 4];
                        address = this.findAddress(allAddresses.result);
                        if (!(address[0] != 0)) return [3 /*break*/, 3];
                        resultUrl = addressUrl + '/' + address[0];
                        return [4 /*yield*/, this.get(resultUrl, opts)];
                    case 2:
                        data = _a.sent();
                        result = data.result;
                        _a.label = 3;
                    case 3:
                        message = address[1];
                        return [3 /*break*/, 5];
                    case 4:
                        message = 'No associated addresses';
                        _a.label = 5;
                    case 5: return [2 /*return*/, { success: true, status: 200, error: null, message: message, result: result }];
                }
            });
        });
    };
    /**
     * Returns an address id of the resultant address.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param requestedAddress - Requested address type
     * @param otherAddress - Not requested address type
     * @returns An address id as a number
     */
    CompanyClient.prototype.findAddress = function (allAddresses) {
        var _this = this;
        var addressId = 0;
        var message = '';
        var primaryAddress = allAddresses.find(function (index) { return index.defaultInd && !index.deleterecord; });
        if (primaryAddress == undefined) {
            var secondaryAddress = allAddresses.find(function (index) { return (new Date(index.createdate).toString() == _this.mostRecentDate(allAddresses)); });
            if (secondaryAddress == undefined) {
                message = "Default address or a non deleted recent address not found.";
            }
            else {
                addressId = secondaryAddress.AddressID;
                message = "Default address not found. Returning " + secondaryAddress.AddressTypeName + " address which is the most recent non deleted address.";
            }
        }
        else {
            addressId = primaryAddress.AddressID;
            message = "Default " + primaryAddress.AddressTypeName + " address found and returned.";
        }
        return [addressId, message];
    };
    /**
     * Returns most recent date.
     * @param allAddresses - Array of all addresses associated to a Company
     * @returns Most recent date for an address type as a string
     */
    CompanyClient.prototype.mostRecentDate = function (allAddresses) {
        var dates = [];
        allAddresses.forEach(function (index) {
            if (!index.deleterecord) {
                dates.push(new Date(index.createdate));
            }
        });
        return new Date(Math.max.apply(null, dates)).toString();
    };
    return CompanyClient;
}(client_1.Client));
exports.CompanyClient = CompanyClient;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var client_1 = __webpack_require__(0);
/**
 * Represents the client service for Contacts.
 */
var ContactClient = /** @class */ (function (_super) {
    __extends(ContactClient, _super);
    function ContactClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns Contact Image/s.
     * @param contactId - Cosential contact id
     * @param imageType - Required image type. [1 = All (default), 2 = ProfilePicture, 3 = CardFront, 4 = CardBack]
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    ContactClient.prototype.getContactImages = function (contactId, imageType, opts) {
        if (imageType === void 0) { imageType = 1; }
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadataUrl, res, imageTypes, actualImageUrl, images, index, actualImageUrl, imgUrl, response, imageType_1, imageBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadataUrl = '/contacts/' + contactId + '/images';
                        return [4 /*yield*/, this.get(metadataUrl, opts)];
                    case 1:
                        res = _a.sent();
                        if (!(res.result != null && res.result.length > 0)) return [3 /*break*/, 9];
                        imageTypes = [2, 3, 4];
                        if (!(imageTypes.indexOf(imageType) > -1)) return [3 /*break*/, 3];
                        actualImageUrl = '/images/contact/' + contactId + '/';
                        switch (imageType) {
                            case (2):
                                actualImageUrl += 'profilepicture';
                                break;
                            case (3):
                                actualImageUrl += 'cardfront';
                                break;
                            case (4):
                                actualImageUrl += 'cardback';
                                break;
                        }
                        return [4 /*yield*/, this.get(actualImageUrl, opts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        images = {};
                        index = 0;
                        _a.label = 4;
                    case 4:
                        if (!(index < res.result.length)) return [3 /*break*/, 7];
                        actualImageUrl = res.result[index].ImageUrl;
                        imgUrl = actualImageUrl.substring(actualImageUrl.indexOf('/images/contact/'));
                        return [4 /*yield*/, this.get(imgUrl, opts)];
                    case 5:
                        response = _a.sent();
                        imageType_1 = res.result[index].ImageType;
                        imageBase64 = response.result.Data;
                        images[imageType_1] = imageBase64;
                        _a.label = 6;
                    case 6:
                        index++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, { success: true, status: 200, error: null, message: null, result: images }];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, { success: true, status: res.status, error: null, message: 'No associated image metadata', result: null }];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets a Contact's image
     *
     * @param contactId - The Contact's Id
     * @param imageType - Which image should be set. Either 'profilepicture', 'cardfront', or 'cardback'
     * @param contentType - 'image/gif', image/jpeg', 'image/png', or 'image/tiff'
     * @param imageData - The raw base 64 encoded image data
     * @param opts - Optional request headers
     *
     * @returns - A response object
     */
    ContactClient.prototype.updateContactImage = function (contactId, imageType, contentType, imageData, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var url, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/images/contact/' + contactId + '/' + imageType;
                        payload = {
                            ContentType: contentType,
                            Data: imageData
                        };
                        return [4 /*yield*/, this.put(url, payload, opts)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns Contact Address.
     * @param contactId - Cosential contact id
     * @param addressType - Required address type. [1 = Office, 2 = Home]
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    ContactClient.prototype.getContactAddress = function (contactId, addressType, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var addressUrl, allAddresses, message, result, addressTypes, address, resultUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressUrl = '/contacts/' + contactId + '/addresses';
                        return [4 /*yield*/, this.get(addressUrl, opts)];
                    case 1:
                        allAddresses = _a.sent();
                        message = '';
                        result = null;
                        if (!(allAddresses.result != null && allAddresses.result.length > 0)) return [3 /*break*/, 5];
                        addressTypes = [1, 2];
                        if (!(addressTypes.indexOf(addressType) > -1)) return [3 /*break*/, 3];
                        address = (addressType == 1) ? this.findAddress(allAddresses.result, 'office', 'home') : this.findAddress(allAddresses.result, 'home', 'office');
                        resultUrl = addressUrl + '/' + address[0];
                        return [4 /*yield*/, this.get(resultUrl, opts)];
                    case 2:
                        data = _a.sent();
                        message = address[1];
                        result = data.result;
                        return [3 /*break*/, 4];
                    case 3:
                        message = 'Not a valid address type';
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        message = 'No associated addresses';
                        _a.label = 6;
                    case 6: return [2 /*return*/, { success: true, status: 200, error: null, message: message, result: result }];
                }
            });
        });
    };
    /**
     * Returns an address id of the resultant address.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param requestedAddress - Requested address type
     * @param otherAddress - Not requested address type
     * @returns An address id as a number
     */
    ContactClient.prototype.findAddress = function (allAddresses, requestedAddress, otherAddress) {
        var _this = this;
        var addressId = 0;
        var message = '';
        var primaryAddress = allAddresses.find(function (index) { return (index.AddressType.toLowerCase() == requestedAddress) && (index.DefaultInd == true); });
        if (primaryAddress == undefined) {
            var secondaryAddress = allAddresses.find(function (index) { return (new Date(index.CreateDate).toString() == _this.mostRecentDate(allAddresses, requestedAddress)); });
            if (secondaryAddress == undefined) {
                var tertiaryAddress = allAddresses.find(function (index) { return (index.AddressType.toLowerCase() == otherAddress) && (index.DefaultInd == true); });
                if (tertiaryAddress == undefined) {
                    var quaternaryAddress = allAddresses.find(function (index) { return (new Date(index.CreateDate).toString() == _this.mostRecentDate(allAddresses, otherAddress)); });
                    ;
                    addressId = quaternaryAddress.AddressID;
                    message = "No " + requestedAddress + " address found. No default " + otherAddress + " address found. Returning the most recent " + otherAddress + " address.";
                }
                else {
                    addressId = tertiaryAddress.AddressID;
                    message = "No " + requestedAddress + " address found. Returning the default " + otherAddress + " address.";
                }
            }
            else {
                addressId = secondaryAddress.AddressID;
                message = "Default " + requestedAddress + " address not found. Returning the most recent " + requestedAddress + " address.";
            }
        }
        else {
            addressId = primaryAddress.AddressID;
            message = "Default " + requestedAddress + " address found and returned.";
        }
        return [addressId, message];
    };
    /**
     * Returns most recent date for an address type.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param addressType - Address type to be looked up for most recent date
     * @returns Most recent date for an address type as a string
     */
    ContactClient.prototype.mostRecentDate = function (allAddresses, addressType) {
        var dates = [];
        allAddresses.forEach(function (index) {
            if (index.AddressType.toLowerCase() == addressType) {
                dates.push(new Date(index.CreateDate));
            }
        });
        return new Date(Math.max.apply(null, dates)).toString();
    };
    return ContactClient;
}(client_1.Client));
exports.ContactClient = ContactClient;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var client_1 = __webpack_require__(0);
/**
 * Represents the client service for Emails.
 */
var EmailClient = /** @class */ (function (_super) {
    __extends(EmailClient, _super);
    function EmailClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Associate an attachment to an Email.
     * @param emailId - Cosential email id
     * @param attachments - An array of attachments (Octet string preferred)
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    EmailClient.prototype.addAttachment = function (emailId, attachments, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var createMetadataUrl, payload, attachmentNumber, metadataUrls, index, idx, endpoint, attachment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createMetadataUrl = '/emails/' + emailId + '/attachments';
                        payload = [];
                        attachmentNumber = 0;
                        if (!(attachments.length > 0)) return [3 /*break*/, 8];
                        attachments.forEach(function (attachment) {
                            attachmentNumber++;
                            payload.push({
                                Id: 0,
                                FileName: "AttachmentViaAddIn " + attachmentNumber,
                                DeleteRecord: false,
                                AttachmentEndpoint: null
                            });
                        });
                        return [4 /*yield*/, this.post(createMetadataUrl, payload)];
                    case 1:
                        metadataUrls = _a.sent();
                        if (!(metadataUrls.result != null && metadataUrls.result.length > 0)) return [3 /*break*/, 6];
                        index = 0;
                        idx = 0;
                        _a.label = 2;
                    case 2:
                        if (!(idx < metadataUrls.result.length)) return [3 /*break*/, 5];
                        endpoint = metadataUrls.result[idx].AttachmentEndpoint;
                        attachment = {
                            data: attachments[index]
                        };
                        return [4 /*yield*/, this.put(endpoint.substring(endpoint.indexOf('/emails')), attachment)];
                    case 3:
                        _a.sent();
                        index++;
                        _a.label = 4;
                    case 4:
                        idx++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, { success: true, status: 200, error: null, message: 'Attachments created successfully.', result: null }];
                    case 6: return [2 /*return*/, { success: false, status: metadataUrls.status, error: null, message: 'Metadata creation failed. No attachments created.', result: null }];
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, { success: true, status: 204, error: null, message: 'No attachments found.', result: null }];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return EmailClient;
}(client_1.Client));
exports.EmailClient = EmailClient;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var client_1 = __webpack_require__(0);
/**
 * Represents the client service for Personnel.
 */
var PersonnelClient = /** @class */ (function (_super) {
    __extends(PersonnelClient, _super);
    function PersonnelClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns Personnel Image/s.
     * @param personnelId - Cosential personnel id
     * @param primaryPhoto - If true, returns primary photo. Else, all images (default).
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    PersonnelClient.prototype.getPersonnelImages = function (personnelId, primaryPhoto, opts) {
        if (primaryPhoto === void 0) { primaryPhoto = false; }
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadataUrl, metadata, searchQuery, response, imageUrl, actualImageUrl, images, index, imageUrl, actualImageUrl, response, imageName, imageBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadataUrl = '/personnel/' + personnelId + '/images';
                        return [4 /*yield*/, this.get(metadataUrl, opts)];
                    case 1:
                        metadata = _a.sent();
                        if (!(metadata.result != null && metadata.result.length > 0)) return [3 /*break*/, 8];
                        if (!primaryPhoto) return [3 /*break*/, 3];
                        searchQuery = 'PrimaryPhoto:true';
                        return [4 /*yield*/, this.search(metadataUrl, searchQuery)];
                    case 2:
                        response = _a.sent();
                        if (response.result.length > 0) {
                            imageUrl = response.result[0].OriginalImageEndpoint;
                            actualImageUrl = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
                            return [2 /*return*/, this.get(actualImageUrl, opts)];
                        }
                        _a.label = 3;
                    case 3:
                        images = {};
                        index = 0;
                        _a.label = 4;
                    case 4:
                        if (!(index < metadata.result.length)) return [3 /*break*/, 7];
                        imageUrl = metadata.result[index].OriginalImageEndpoint;
                        actualImageUrl = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
                        return [4 /*yield*/, this.get(actualImageUrl, opts)];
                    case 5:
                        response = _a.sent();
                        imageName = metadata.result[index].ImageName;
                        imageBase64 = response.result.Data;
                        images[imageName] = imageBase64;
                        _a.label = 6;
                    case 6:
                        index++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, {
                            success: true,
                            status: 200,
                            error: null,
                            message: null,
                            result: images
                        }];
                    case 8: return [2 /*return*/, {
                            success: true,
                            status: metadata.status,
                            error: null,
                            message: 'No associated image metadata',
                            result: null
                        }];
                }
            });
        });
    };
    return PersonnelClient;
}(client_1.Client));
exports.PersonnelClient = PersonnelClient;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var client_1 = __webpack_require__(0);
/**
 * Represents the client service for Projects.
 */
var ProjectClient = /** @class */ (function (_super) {
    __extends(ProjectClient, _super);
    function ProjectClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProjectClient;
}(client_1.Client));
exports.ProjectClient = ProjectClient;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
        ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.5.1";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(_atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return global.Base64 }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(12);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(9);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["Headers"] = Headers;
/* harmony export (immutable) */ __webpack_exports__["Request"] = Request;
/* harmony export (immutable) */ __webpack_exports__["Response"] = Response;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (immutable) */ __webpack_exports__["fetch"] = fetch;
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=compass.js.map