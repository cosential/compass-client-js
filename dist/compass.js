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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
var js_base64_1 = __webpack_require__(8);
/**
 * The Client service for Cosential Compass API calls.
 */
var Client = /** @class */ (function () {
    function Client(config) {
        this.config = config;
    }
    Object.defineProperty(Client.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (value) {
            this._config = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param url - Compass API endpoint
     * @param opts - Optional request headers
     * @param from - Number of elements you would like to skip
     * @param size - Number of elements you would like to receive (max is 500)
     * @param includeDeleted - Include deleted records in GET
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.get = function (url, opts, from, size, includeDeleted) {
        if (opts === void 0) { opts = { showErrors: true }; }
        if (from === void 0) { from = 0; }
        if (size === void 0) { size = 500; }
        if (includeDeleted === void 0) { includeDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, requestUrl, paging, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey,
                            'Accept': 'application/json'
                        };
                        if (opts.showErrors) {
                            headers['x-compass-show-errors'] = 'true';
                        }
                        requestUrl = this.config.compassUrl + url;
                        paging = 'from=' + from + '&size=' + size;
                        requestUrl += (url.indexOf('?q=') > -1) ? '&' + paging : '?' + paging;
                        if (includeDeleted) {
                            requestUrl += '&includedeleted=true';
                        }
                        return [4 /*yield*/, fetch(requestUrl, {
                                method: 'GET',
                                headers: headers
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse('GET', response)];
                }
            });
        });
    };
    /**
     * @param url - Compass API endpoint
     * @param payload - Array of elements
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.post = function (url, payload, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, response;
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
                        if (opts.showErrors) {
                            headers['x-compass-show-errors'] = 'true';
                        }
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'POST',
                                headers: headers,
                                body: JSON.stringify(payload)
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse('POST', response)];
                }
            });
        });
    };
    /**
     * @param url - Compass API endpoint with a valid Id
     * @param payload - Updated element including new and existing values
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.put = function (url, payload, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, response;
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
                        if (opts.showErrors) {
                            headers['x-compass-show-errors'] = 'true';
                        }
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'PUT',
                                headers: headers,
                                body: JSON.stringify(payload)
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse('PUT', response)];
                }
            });
        });
    };
    /**
     * @param url - Compass API endpoint with a valid Id
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.delete = function (url, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            'Authorization': 'Basic ' + js_base64_1.Base64.encode(this.config.username + ':' + this.config.password),
                            'x-compass-firm-id': this.config.firmId.toString(),
                            'x-compass-api-key': this.config.apiKey
                        };
                        if (opts.showErrors) {
                            headers['x-compass-show-errors'] = 'true';
                        }
                        return [4 /*yield*/, fetch(this.config.compassUrl + url, {
                                method: 'DELETE',
                                headers: headers
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse('DELETE', response)];
                }
            });
        });
    };
    /**
     * @param url - Compass API endpoint
     * @param queryString - Complete search query
     * @param from - Number of elements you would like to skip
     * @param size - Number of elements you would like to receive (max is 500)
     * @param includeDeleted - Include deleted records in search
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.search = function (url, queryString, fields, from, size, includeDeleted, opts) {
        if (fields === void 0) { fields = null; }
        if (from === void 0) { from = 0; }
        if (size === void 0) { size = 500; }
        if (includeDeleted === void 0) { includeDeleted = false; }
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var searchQuery, requestUrl, searchParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchQuery = (queryString != null) ? queryString.trim() : queryString;
                        if (searchQuery == '' || searchQuery == null) {
                            throw new Error('Compass API call failed. String to search ' + searchQuery + ' is empty or invalid.');
                        }
                        requestUrl = url + '/search';
                        searchParams = {
                            queryString: searchQuery,
                            fields: fields,
                            includeDeleted: includeDeleted,
                            Size: size,
                            From: from
                        };
                        return [4 /*yield*/, this.post(requestUrl, searchParams, opts)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Note: This function should only be used to search endpoints which do not have
     * search via POST implemented, e.g. /emails. All other searches should be performed
     * via the above search function.
     *
     * @param url - Compass API endpoint
     * @param queryString - Complete search query
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.getSearch = function (url, queryString, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var searchQuery, requestUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchQuery = (queryString != null) ? queryString.trim() : queryString;
                        if (searchQuery == '' || searchQuery == null) {
                            throw new Error('Compass API call failed. String to search ' + searchQuery + ' is empty or invalid.');
                        }
                        requestUrl = url + '/search?q=' + searchQuery;
                        return [4 /*yield*/, this.get(requestUrl, opts)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param url - Compass API endpoint
     * @param queryString - Complete search query
     * @param includeDeleted - Include deleted records in search
     * @param fields - Comma-separated fields to return
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
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
                            return [2 /*return*/, {
                                    success: res.success,
                                    status: res.status,
                                    error: res.error,
                                    message: res.message,
                                    result: null
                                }];
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, {
                            success: true,
                            status: 200,
                            error: null,
                            message: null,
                            result: data
                        }];
                }
            });
        });
    };
    /**
     * @param responseType - An HTTP verb
     * @param response - The response object
     *
     * @returns - A detailed response object as a Promise
     */
    Client.prototype.handleResponse = function (responseType, response) {
        return __awaiter(this, void 0, void 0, function () {
            var responseCode, responseText, responseUrl, message, data, error, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseCode = response.status;
                        responseText = response.statusText;
                        responseUrl = response.url;
                        data = null;
                        error = null;
                        if (!!response.ok) return [3 /*break*/, 5];
                        message = 'Compass ' + responseType + ' call failed. [' + responseUrl + '] responded with: [' + responseCode + ' ' + responseText + '] + \n' + response.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, response.json()];
                    case 2:
                        error = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        error = null;
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        message = 'Compass ' + responseType + ' call successful. [' + responseUrl + '] responded with: [' + responseCode + ' ' + responseText + ']';
                        if (!(response.status == 200)) return [3 /*break*/, 9];
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, response.json()];
                    case 7:
                        data = _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_2 = _a.sent();
                        error = 'Error parsing response.';
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, {
                            success: response.status >= 200 && response.status <= 300,
                            status: responseCode,
                            error: error,
                            message: message,
                            result: data
                        }];
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
__webpack_require__(10);
module.exports = self.fetch.bind(self);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Service Models
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Client configuration used to authenticate the User.
 */
var ClientConfig = /** @class */ (function () {
    function ClientConfig(firmId, username, password, apiKey, compassUrl) {
        this.urlTest = /^(http|https):\/\/[^ "]+$/;
        this.apiKeyTest = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
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
        get: function () {
            return this._apiKey;
        },
        set: function (value) {
            if (!value || !this.apiKeyTest.test(value)) {
                throw new Error('apiKey config property value [' + value + '] is not valid.');
            }
            else {
                this._apiKey = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "compassUrl", {
        get: function () {
            return this._compassUrl;
        },
        set: function (value) {
            if (!value || !this.urlTest.test(value)) {
                throw new Error('compassUrl config property value [' + value + '] is not valid.');
            }
            else {
                this._compassUrl = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "firmId", {
        get: function () { return this._firmId; },
        set: function (value) {
            if (!value) {
                throw new Error('Please use a valid firmId.');
            }
            else {
                this._firmId = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientConfig.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
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
 * The client service for any Company-specific requests with special logic.
 */
var CompanyClient = /** @class */ (function (_super) {
    __extends(CompanyClient, _super);
    function CompanyClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param companyId - Cosential company id
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object containing a CompanyAddress as a Promise
     */
    CompanyClient.prototype.getCompanyAddress = function (companyId, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var addressUrl, allAddresses, message, result, address, resultUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressUrl = '/companies/' + companyId + '/addresses';
                        return [4 /*yield*/, this.get(addressUrl, opts)];
                    case 1:
                        allAddresses = _a.sent();
                        message = '';
                        if (!(allAddresses.result != null && allAddresses.result.length > 0)) return [3 /*break*/, 4];
                        address = this.findAddress(allAddresses.result);
                        if (!address.addressId) return [3 /*break*/, 3];
                        resultUrl = addressUrl + '/' + address.addressId;
                        return [4 /*yield*/, this.get(resultUrl, opts)];
                    case 2:
                        response = _a.sent();
                        if (!response.success) {
                            return [2 /*return*/, response];
                        }
                        else {
                            result = response.result;
                        }
                        _a.label = 3;
                    case 3:
                        message = address.message;
                        return [3 /*break*/, 5];
                    case 4:
                        message = 'No associated addresses';
                        _a.label = 5;
                    case 5: return [2 /*return*/, {
                            success: true,
                            status: 200,
                            error: null,
                            message: message,
                            result: result
                        }];
                }
            });
        });
    };
    /**
     * @param allAddresses - Array of all addresses associated to a Company
     *
     * @returns - An address id and a message indicating success/failure details
     */
    CompanyClient.prototype.findAddress = function (allAddresses) {
        var _this = this;
        var addressId = 0;
        var message = '';
        var primaryAddress = allAddresses.find(function (index) { return index.defaultInd && !index.deleterecord; });
        if (!primaryAddress) {
            var secondaryAddress = allAddresses.find(function (index) { return (new Date(index.createdate).toString() == _this.mostRecentDate(allAddresses)); });
            if (!secondaryAddress) {
                message = 'Default address or a non-deleted recent address not found.';
            }
            else {
                addressId = secondaryAddress.AddressID;
                message = 'Default address not found. Returning ' + secondaryAddress.AddressTypeName + ' address which is the most recent non-deleted address.';
            }
        }
        else {
            addressId = primaryAddress.AddressID;
            message = 'Default ' + primaryAddress.AddressTypeName + ' address found and returned.';
        }
        return { addressId: addressId, message: message };
    };
    /**
     * @param allAddresses - Array of all addresses associated to a Company
     *
     * @returns - Most recent date for an address type as a string
     */
    CompanyClient.prototype.mostRecentDate = function (allAddresses) {
        var dates = [];
        allAddresses.forEach(function (address) {
            if (!address.deleterecord) {
                dates.push(new Date(address.createdate));
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
 * The client service for Contact-specific requests with special logic.
 */
var ContactClient = /** @class */ (function (_super) {
    __extends(ContactClient, _super);
    function ContactClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param contactId - Cosential contact id
     * @param imageType - Required image type. ['profilepicture', 'cardfront', 'cardback']
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object containing an Image as a Promise
     */
    ContactClient.prototype.getContactImage = function (contactId, imageType, opts) {
        if (imageType === void 0) { imageType = 'profilepicture'; }
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadataUrl, metadataResponse, imageUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadataUrl = '/contacts/' + contactId + '/images';
                        return [4 /*yield*/, this.get(metadataUrl, opts)];
                    case 1:
                        metadataResponse = _a.sent();
                        if (!(metadataResponse.result != null && metadataResponse.result.length > 0)) return [3 /*break*/, 3];
                        imageUrl = '/images/contact/' + contactId + '/' + imageType;
                        return [4 /*yield*/, this.get(imageUrl, opts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, {
                            success: true,
                            status: metadataResponse.status,
                            error: null,
                            message: 'No associated image metadata',
                            result: null
                        }];
                }
            });
        });
    };
    /**
     * @param contactId - The Contact's Id
     * @param imageType - Which image should be set. Either 'profilepicture', 'cardfront', or 'cardback'
     * @param contentType - 'image/gif', image/jpeg', 'image/png', or 'image/tiff'
     * @param imageData - The raw base 64 encoded image data
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object containing an Image as a Promise
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
     * @param contactId - Cosential contact id
     * @param addressType - Required address type. ['office', 'home']
     * @param opts - Optional request headers
     *
     * @returns A detailed response object containing a ContactAddress as a Promise
     */
    ContactClient.prototype.getContactAddress = function (contactId, addressType, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var addressUrl, allAddresses, message, result, address, resultUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressUrl = '/contacts/' + contactId + '/addresses';
                        return [4 /*yield*/, this.get(addressUrl, opts)];
                    case 1:
                        allAddresses = _a.sent();
                        message = '';
                        if (!(allAddresses.result != null && allAddresses.result.length > 0)) return [3 /*break*/, 4];
                        address = this.findAddress(allAddresses.result, addressType.toUpperCase());
                        if (!address.addressId) return [3 /*break*/, 3];
                        resultUrl = addressUrl + '/' + address.addressId;
                        return [4 /*yield*/, this.get(resultUrl, opts)];
                    case 2:
                        response = _a.sent();
                        if (!response.success) {
                            return [2 /*return*/, response];
                        }
                        else {
                            result = response.result;
                        }
                        _a.label = 3;
                    case 3:
                        message = address.message;
                        return [3 /*break*/, 5];
                    case 4:
                        message = 'No associated addresses';
                        _a.label = 5;
                    case 5: return [2 /*return*/, {
                            success: true,
                            status: 200,
                            error: null,
                            message: message,
                            result: result
                        }];
                }
            });
        });
    };
    /**
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param requestedAddress - Requested address type
     *
     * @returns - An address id and a message indicating success/failure details
     */
    ContactClient.prototype.findAddress = function (allAddresses, requestedAddress) {
        var _this = this;
        var addressId = 0;
        var message = '';
        var otherAddress = requestedAddress === 'OFFICE' ? 'HOME' : 'OFFICE';
        var primaryAddress = allAddresses.find(function (index) { return (index.AddressType.toUpperCase() == requestedAddress) && (index.DefaultInd == true); });
        if (!primaryAddress) {
            var secondaryAddress = allAddresses.find(function (index) { return (new Date(index.CreateDate).toString() == _this.mostRecentDate(allAddresses, requestedAddress)); });
            if (!secondaryAddress) {
                var tertiaryAddress = allAddresses.find(function (index) { return (index.AddressType.toUpperCase() == otherAddress) && (index.DefaultInd == true); });
                if (!tertiaryAddress) {
                    var quaternaryAddress = allAddresses.find(function (index) { return (new Date(index.CreateDate).toString() == _this.mostRecentDate(allAddresses, otherAddress)); });
                    ;
                    addressId = quaternaryAddress.AddressID;
                    message = 'No ' + requestedAddress + ' address found. No default ' + otherAddress + ' address found. Returning the most recent ' + otherAddress + ' address.';
                }
                else {
                    addressId = tertiaryAddress.AddressID;
                    message = 'No ' + requestedAddress + ' address found. Returning the default ' + otherAddress + ' address.';
                }
            }
            else {
                addressId = secondaryAddress.AddressID;
                message = 'Default ' + requestedAddress + ' address not found. Returning the most recent ' + requestedAddress + ' address.';
            }
        }
        else {
            addressId = primaryAddress.AddressID;
            message = 'Default ' + requestedAddress + ' address found and returned.';
        }
        return { addressId: addressId, message: message };
    };
    /**
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param addressType - Address type to be looked up for most recent date
     *
     * @returns - Most recent date for an address type as a string
     */
    ContactClient.prototype.mostRecentDate = function (allAddresses, addressType) {
        var dates = [];
        allAddresses.forEach(function (address) {
            if (address.AddressType.toUpperCase() == addressType) {
                dates.push(new Date(address.CreateDate));
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
 * The client service for any Email-specific requests with special logic.
 */
var EmailClient = /** @class */ (function (_super) {
    __extends(EmailClient, _super);
    function EmailClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param emailId - Cosential email id
     * @param attachments - An array of attachments (Octet string preferred)
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object as a Promise
     */
    EmailClient.prototype.addAttachment = function (emailId, attachments, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var createMetadataUrl, payload, metadataUrls;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createMetadataUrl = '/emails/' + emailId + '/attachments';
                        payload = [];
                        if (!(attachments.length > 0)) return [3 /*break*/, 2];
                        attachments.forEach(function (attachment) {
                            payload.push({
                                Id: 0,
                                FileName: attachment.filename,
                                DeleteRecord: false,
                                AttachmentEndpoint: null
                            });
                        });
                        return [4 /*yield*/, this.post(createMetadataUrl, payload, opts)];
                    case 1:
                        metadataUrls = _a.sent();
                        if (metadataUrls.result != null && metadataUrls.result.length > 0) {
                            metadataUrls.result.forEach(function (metadataResult, index) { return __awaiter(_this, void 0, void 0, function () {
                                var endpoint, attachment, response;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            endpoint = metadataResult.AttachmentEndpoint;
                                            attachment = attachments[index];
                                            return [4 /*yield*/, this.put(endpoint.substring(endpoint.indexOf('/emails')), attachment)];
                                        case 1:
                                            response = _a.sent();
                                            if (!response.success) {
                                                return [2 /*return*/, response];
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/, {
                                    success: true,
                                    status: 200,
                                    error: null,
                                    message: 'Attachments created successfully.',
                                    result: null
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    success: false,
                                    status: metadataUrls.status,
                                    error: metadataUrls.error,
                                    message: 'Metadata creation failed. No attachments added.',
                                    result: null
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, {
                            success: true,
                            status: 204,
                            error: null,
                            message: 'No attachments found.',
                            result: null
                        }];
                    case 3: return [2 /*return*/];
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
 * The client service for Personnel-specific requests with special logic.
 */
var PersonnelClient = /** @class */ (function (_super) {
    __extends(PersonnelClient, _super);
    function PersonnelClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param personnelId - Cosential personnel id
     * @param opts - Optional request headers
     *
     * @returns - A detailed response object containing an Image as a Promise
     */
    PersonnelClient.prototype.getPersonnelImage = function (personnelId, opts) {
        if (opts === void 0) { opts = { showErrors: true }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadataUrl, metadataResponse, response, imageUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadataUrl = '/personnel/' + personnelId + '/images';
                        return [4 /*yield*/, this.get(metadataUrl, opts)];
                    case 1:
                        metadataResponse = _a.sent();
                        if (!(metadataResponse.result != null && metadataResponse.result.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.search(metadataUrl, 'PrimaryPhoto:true')];
                    case 2:
                        response = _a.sent();
                        if (response.result.length > 0) {
                            imageUrl = response.result[0].OriginalImageEndpoint;
                            imageUrl = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
                            return [2 /*return*/, this.get(imageUrl, opts)];
                        }
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, {
                            success: metadataResponse.success,
                            status: metadataResponse.status,
                            error: metadataResponse.error,
                            message: metadataResponse.message,
                            result: null
                        }];
                    case 4: return [2 /*return*/];
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=compass.js.map