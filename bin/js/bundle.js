(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class BasePlatformData {
        constructor() {
            this.appId = '';
            this.appKey = '';
            this.adUnitId = '';
        }
    }

    class DefaultPlatformData extends BasePlatformData {
    }

    class BDPlatformData extends DefaultPlatformData {
    }

    class OPPOPlatformData extends DefaultPlatformData {
    }

    class QQPlatformData extends DefaultPlatformData {
    }

    class QTTPlatformData extends DefaultPlatformData {
    }

    class TTPlatformData extends DefaultPlatformData {
    }

    class VIVOPlatformData extends DefaultPlatformData {
    }

    class WXPlatformData extends DefaultPlatformData {
    }

    class ConsoleConst {
    }
    ConsoleConst.logStyle = `
        color: #fff;
        background-color: #8d93ab;
        border-radius: 3px;
        line-height: 15px;
        `;
    ConsoleConst.comStyle = `
        color: #fff;
        background-color: #ade498;
        border-radius: 3px;
        line-height: 15px;
        `;
    ConsoleConst.warnStyle = `
        color: #5c6e06;
        background-color: #ffa931;
        border-radius: 3px;
        line-height: 15px;
        `;
    ConsoleConst.errorStyle = `
        color: #fff;
        background-color: #ec0101;
        border-radius: 3px;
        line-height: 15px;
        `;
    ConsoleConst.platformStyle = `
        color: #52575d;
        background-color: #e3fdfd;
        border-radius: 3px;
        line-height: 15px;
        `;

    class ConsoleEx {
        static log(...any) {
            console.log(`%c ${any}`, ConsoleConst.logStyle);
        }
        static warn(...any) {
            console.log(`%c ${any}`, ConsoleConst.warnStyle);
        }
        static error(...any) {
            console.log(`%c ${any}`, ConsoleConst.errorStyle);
        }
        static packLog(...any) {
            return [`%c ${any} `, ConsoleConst.logStyle];
        }
        static comLog(...any) {
            return [`%c ${any} `, ConsoleConst.comStyle];
        }
        static packWarn(...any) {
            return [`%c 警告: ${any} `, ConsoleConst.warnStyle];
        }
        static packError(...any) {
            return [`%c 错误: ${any} `, ConsoleConst.errorStyle];
        }
        static packPlatform(...any) {
            return [`%c 平台: ${any} `, ConsoleConst.platformStyle];
        }
    }

    class BDAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class WXDeviceManager {
        init(_platform) {
            this.Platform = _platform;
        }
        Vibrate(isLong) {
            console.log("调用震动", isLong);
            if (this.Platform.base) {
                if (isLong) {
                    Laya.timer.callLater(wx, wx.vibrateLong, [null]);
                }
                else {
                    Laya.timer.callLater(wx, wx.vibrateShort, [null]);
                }
            }
        }
    }

    class BDDeviceManager extends WXDeviceManager {
    }

    class WXPageManager {
        init(_platform) {
            this.Platform = _platform;
        }
        showToast(_mes, _time) {
            throw new Error("Method not implemented.");
        }
    }

    class BDPageManager extends WXPageManager {
    }

    class WXRecordManager {
        init(_platform) {
            this.Platform = _platform;
        }
        Start(duration) {
            throw new Error("Method not implemented.");
        }
        Stop(caller, callfunc) {
            throw new Error("Method not implemented.");
        }
        Pause() {
            throw new Error("Method not implemented.");
        }
        Resume() {
            throw new Error("Method not implemented.");
        }
        Share(callder, okCallbackFunc) {
            throw new Error("Method not implemented.");
        }
    }

    class BDRecordManager extends WXRecordManager {
    }

    class WXShareManager {
        init(_platform) {
            this.Platform = _platform;
        }
        ShareAppMessage(obj, onSuccess, onFailed) {
        }
    }

    class BDShareManager extends WXShareManager {
    }

    class BasePlatform {
        Init(_platformData) {
            if (!_platformData) {
                console.error('平台数据为空');
            }
            this.platformData = _platformData;
            if (!this.platformType) {
                console.error('没有设置平台类型');
            }
            if (!this.base) {
                console.error('没有初始化平台句柄！', this.platformType);
            }
            if (!this.platformData) {
                console.error('没有初始化平台数据！', this.platformType);
            }
            if (this.recordManager) {
                this.recordManager.init(this);
            }
            else {
                console.error('没有初始化平台视频录制管理器！', this.platformType);
            }
            if (this.ADManager) {
                this.ADManager.init(this);
            }
            else {
                console.error('没有初始化平台广告管理器！', this.platformType);
            }
            if (this.shareManager) {
                this.shareManager.init(this);
            }
            else {
                console.error('没有初始化平台分享管理器！', this.platformType);
            }
            if (this.deviceManager) {
                this.deviceManager.init(this);
            }
            else {
                console.error('没有初始化平台设备管理器！', this.platformType);
            }
        }
        LoadSubpackage(name, onSuccess, onFailed, onProgress) { }
    }

    var EPlatformKey;
    (function (EPlatformKey) {
        EPlatformKey["WX"] = "wx";
        EPlatformKey["TT"] = "tt";
        EPlatformKey["QQ"] = "qq";
        EPlatformKey["VIVO"] = "qg";
        EPlatformKey["OPPO"] = "qg";
        EPlatformKey["BD"] = "swan";
        EPlatformKey["KG"] = "kg";
        EPlatformKey["Alipay"] = "alipay";
        EPlatformKey["HW"] = "hw";
        EPlatformKey["QTT"] = "qttGame";
    })(EPlatformKey || (EPlatformKey = {}));

    var EPlatformType;
    (function (EPlatformType) {
        EPlatformType["None"] = "EPlatformType_None";
        EPlatformType["Web"] = "EPlatformType_Web";
        EPlatformType["WX"] = "EPlatformType_WX";
        EPlatformType["TT"] = "EPlatformType_TT";
        EPlatformType["QQ"] = "EPlatformType_QQ";
        EPlatformType["VIVO"] = "EPlatformType_VIVO";
        EPlatformType["OPPO"] = "EPlatformType_OPPO";
        EPlatformType["BD"] = "EPlatformType_BD";
        EPlatformType["KG"] = "EPlatformType_KG";
        EPlatformType["Alipay"] = "EPlatformType_Alipay";
        EPlatformType["HW"] = "EPlatformType_HW";
        EPlatformType["QTT"] = "EPlatformType_QTT";
    })(EPlatformType || (EPlatformType = {}));

    class BDPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.BD];
            this.platformType = EPlatformType.BD;
            this.platformData = new BDPlatformData();
            this.recordManager = new BDRecordManager();
            this.ADManager = new BDAdManager();
            this.shareManager = new BDShareManager();
            this.deviceManager = new BDDeviceManager();
            this.pageManager = new BDPageManager();
        }
    }

    class DefaultAdManager {
        init(_platform) {
            this.Platform = _platform;
            this.ifShowRewardedVideoAd = true;
        }
        createBannerAd(_data) {
        }
        showBannerAd() {
            console.log('显示BannerAd');
        }
        hideBannerAd() {
            console.log('隐藏BannerAd');
        }
        destroyBannerAd() {
            console.log('删除BannerAd');
        }
        setBannerAd(_width, _top, _left) {
        }
        createRewardedVideoAd(_data) {
        }
        showRewardedVideoAd() {
            console.log('显示激励广告');
            return new Promise((r) => {
                r(true);
            });
        }
        showInterstitialAd() {
            console.log('显示插屏广告');
        }
    }

    class DefaultDeviceManager {
        init(_platform) {
            this.Platform = _platform;
        }
        Vibrate(isLong) {
            if (!navigator.vibrate) {
                console.log("不支持设备震动！");
                return;
            }
            if (isLong) {
                navigator.vibrate(15);
            }
            else {
                navigator.vibrate(400);
            }
        }
    }

    class DefaultPageManager {
        init(_platform) {
            this.Platform = _platform;
        }
        showToast(_mes, _time) {
            console.log(...ConsoleEx.packLog('平台：', _mes));
        }
    }

    class DefaultRecordManager {
        init(_platform) {
            this.Platform = _platform;
        }
        Start(duration) {
            console.log('开始录屏');
        }
        Stop(caller, callfunc) {
            console.log('停止录屏');
        }
        Pause() {
            console.log('暂停录屏');
        }
        Resume() {
            console.log('重新录屏');
        }
        Share(callder, okCallbackFunc) {
            console.log('分享录屏');
        }
    }

    class DefaultShareManager {
        init(_platform) {
            this.Platform = _platform;
        }
        ShareAppMessage(obj, onSuccess, onFailed) {
            console.log('平台分享消息：', obj);
            onSuccess.run();
        }
    }

    class DefaultPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = {};
            this.platformType = EPlatformType.None;
            this.platformData = new DefaultPlatformData();
            this.recordManager = new DefaultRecordManager();
            this.ADManager = new DefaultAdManager();
            this.shareManager = new DefaultShareManager();
            this.deviceManager = new DefaultDeviceManager();
            this.pageManager = new DefaultPageManager();
        }
    }

    class OPPOAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class OPPODeviceManager extends WXDeviceManager {
    }

    class OPPOPageManager extends WXPageManager {
    }

    class OPPORecordManager extends WXRecordManager {
    }

    class OPPOShareManager extends WXShareManager {
    }

    class OPPOPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.OPPO];
            this.platformType = EPlatformType.OPPO;
            this.platformData = new OPPOPlatformData();
            this.recordManager = new OPPORecordManager();
            this.ADManager = new OPPOAdManager();
            this.shareManager = new OPPOShareManager();
            this.deviceManager = new OPPODeviceManager();
            this.pageManager = new OPPOPageManager();
        }
    }

    class QQAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class QQDeviceManager extends WXDeviceManager {
    }

    class QQPageManager extends WXPageManager {
    }

    class QQRecordManager extends WXRecordManager {
    }

    class QQShareManager extends WXShareManager {
    }

    class QQPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.QQ];
            this.platformType = EPlatformType.QQ;
            this.platformData = new QQPlatformData();
            this.recordManager = new QQRecordManager();
            this.ADManager = new QQAdManager();
            this.shareManager = new QQShareManager();
            this.deviceManager = new QQDeviceManager();
            this.pageManager = new QQPageManager();
        }
    }

    class QTTAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class QTTDeviceManager extends WXDeviceManager {
    }

    class QTTPageManager extends WXPageManager {
    }

    class QTTRecordManager extends WXRecordManager {
    }

    class QTTShareManager extends WXShareManager {
    }

    class QTTPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.QTT];
            this.platformType = EPlatformType.QTT;
            this.platformData = new QTTPlatformData();
            this.recordManager = new QTTRecordManager();
            this.ADManager = new QTTAdManager();
            this.shareManager = new QTTShareManager();
            this.deviceManager = new QTTDeviceManager();
            this.pageManager = new QTTPageManager();
        }
    }

    class TTAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class TTDeviceManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        Vibrate(isLong) {
            if (!this.Platform.base) {
                console.log(...ConsoleEx.packError('不存在window[\'tt\']'));
                return;
            }
            console.log("调用震动", isLong);
            if (isLong) {
                this.Platform.base.vibrateLong({
                    success(res) { },
                    fail(res) {
                        console.error("调用震动失败", res);
                    },
                    complete(res) { }
                });
            }
            else {
                this.Platform.base.vibrateShort({
                    success(res) { },
                    fail(res) {
                        console.error("调用震动失败", res);
                    },
                    complete(res) { }
                });
            }
        }
    }

    class TTPageManager extends WXPageManager {
    }

    class TTRecordManager extends WXRecordManager {
    }

    class TTShareManager extends WXShareManager {
    }

    class TTPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.TT];
            this.platformType = EPlatformType.TT;
            this.platformData = new TTPlatformData();
            this.recordManager = new TTRecordManager();
            this.ADManager = new TTAdManager();
            this.shareManager = new TTShareManager();
            this.deviceManager = new TTDeviceManager();
            this.pageManager = new TTPageManager();
        }
    }

    class VIVOAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class VIVODeviceManager extends WXDeviceManager {
    }

    class VIVOPageManager extends WXPageManager {
    }

    class VIVORecordManager extends WXRecordManager {
    }

    class VIVOShareManager extends WXShareManager {
    }

    class VIVOPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window[EPlatformKey.VIVO];
            this.platformType = EPlatformType.VIVO;
            this.platformData = new VIVOPlatformData();
            this.recordManager = new VIVORecordManager();
            this.ADManager = new VIVOAdManager();
            this.shareManager = new VIVOShareManager();
            this.deviceManager = new VIVODeviceManager();
            this.pageManager = new VIVOPageManager();
        }
    }

    class WXAdManager {
        init(_platform) {
            throw new Error("Method not implemented.");
        }
        createBannerAd(_data) {
            throw new Error("Method not implemented.");
        }
        showBannerAd() {
            throw new Error("Method not implemented.");
        }
        hideBannerAd() {
            throw new Error("Method not implemented.");
        }
        destroyBannerAd() {
            throw new Error("Method not implemented.");
        }
        setBannerAd(_width, _top, _left) {
            throw new Error("Method not implemented.");
        }
        createRewardedVideoAd(_data) {
            throw new Error("Method not implemented.");
        }
        showRewardedVideoAd() {
            throw new Error("Method not implemented.");
        }
        showInterstitialAd() {
            throw new Error("Method not implemented.");
        }
    }

    class WXPlatform extends BasePlatform {
        constructor() {
            super(...arguments);
            this.base = window['wx'];
            this.platformType = EPlatformType.WX;
            this.platformData = new WXPlatformData();
            this.recordManager = new WXRecordManager();
            this.ADManager = new WXAdManager();
            this.shareManager = new WXShareManager();
            this.deviceManager = new WXDeviceManager();
            this.pageManager = new WXPageManager();
        }
    }

    class RootClassProxy {
        static get Datas() {
            return this.m_datas;
        }
        static set Datas(_data) {
            this.m_datas = _data;
        }
        static get Handlers() {
            return this.m_handlers;
        }
        static set Handlers(_handler) {
            this.m_handlers = _handler;
        }
    }
    RootClassProxy.m_ifSetProxy = false;

    class PlatformManagerProxy extends RootClassProxy {
        static get instance() {
            if (this._instance == null) {
                this._instance = new PlatformManagerProxy();
            }
            return this._instance;
        }
        get PlatformInstance() {
            if (!this.m_platformInstance) {
                console.log(...ConsoleEx.packError('还没有设置过平台实例代理！'));
            }
            return this.m_platformInstance;
        }
        set PlatformInstance(_instance) {
            this.m_platformInstance = _instance;
        }
        static get platformStr() {
            return PlatformManagerProxy.GetPlatformStr(this._instance.m_platformInstance.platformType);
        }
        static GetPlatformStr(platformEnum) {
            switch (platformEnum) {
                case EPlatformType.None:
                    return "未识别";
                case EPlatformType.Web:
                    return "网页";
                case EPlatformType.BD:
                    return "百度";
                case EPlatformType.OPPO:
                    return "Oppo";
                case EPlatformType.QQ:
                    return "QQ";
                case EPlatformType.TT:
                    return "头条";
                case EPlatformType.VIVO:
                    return "Vivo";
                case EPlatformType.WX:
                    return "微信";
                case EPlatformType.QTT:
                    return "趣头条";
                default:
                    return "未定义" + platformEnum;
            }
        }
    }

    class PlatformManager {
        static get instance() {
            if (this._instance == null) {
                this._instance = new PlatformManager();
            }
            return this._instance;
        }
        static get PlatformInstance() {
            if (!this.instance.m_platformInstance) {
                console.log(...ConsoleEx.packError('还没有设置过平台实例代理！'));
            }
            return this.instance.m_platformInstance;
        }
        init() {
            if (this.m_platformInstance != null) {
                console.error(...ConsoleEx.packError("已调用过平台创建为", PlatformManagerProxy.GetPlatformStr(this.m_platformInstance.platformType), "不能重复创建"));
                return this.m_platformInstance;
            }
            let isQTT = window["qttGame"] != null;
            let isTT = window["tt"] != null;
            let result;
            if (isTT) {
                result = new TTPlatform();
                this.m_platformData = new TTPlatformData();
            }
            else if (Laya.Browser.onMiniGame) {
                result = new WXPlatform();
                this.m_platformData = new WXPlatformData();
            }
            else if (Laya.Browser.onBDMiniGame) {
                result = new BDPlatform();
                this.m_platformData = new BDPlatformData();
            }
            else if (isQTT) {
                result = new QTTPlatform();
                this.m_platformData = new QTTPlatformData();
            }
            else if (Laya.Browser.onQQMiniGame) {
                result = new QQPlatform();
                this.m_platformData = new QQPlatformData();
            }
            else if (Laya.Browser.onQGMiniGame) {
                result = new OPPOPlatform();
                this.m_platformData = new OPPOPlatformData();
            }
            else if (Laya.Browser.onVVMiniGame) {
                result = new VIVOPlatform();
                this.m_platformData = new VIVOPlatformData();
            }
            else {
                console.log(...ConsoleEx.packWarn("未识别平台,默认创建为web", Laya.Browser.userAgent));
                result = new DefaultPlatform();
                this.m_platformData = new DefaultPlatformData();
            }
            this.m_platformInstance = result;
            PlatformManagerProxy.instance.PlatformInstance = result;
            window['$Platform'] = this.m_platformInstance;
            console.log(...ConsoleEx.packPlatform("平台实例创建完成", PlatformManagerProxy.GetPlatformStr(this.m_platformInstance.platformType)));
        }
        initPlatform() {
            this.m_platformInstance.Init(this.m_platformData);
            console.log(...ConsoleEx.packPlatform('平台初始化完成'));
        }
    }

    class FGUI_splash extends fairygui.GComponent {
        constructor() {
            super();
        }
        static createInstance() {
            return (fairygui.UIPackage.createObject("InitLoad", "splash"));
        }
        onConstruct() {
            this.m_bg = (this.getChildAt(0));
            this.m_progress = (this.getChildAt(1));
            this.m_loading_progress = (this.getChildAt(2));
            this.m_text_logo = (this.getChildAt(3));
            this.m_text_progress = (this.getChildAt(4));
            this.m_text_laya = (this.getChildAt(5));
            this.m_text_explain = (this.getChildAt(6));
            this.m_text_v = (this.getChildAt(7));
            this.m_text_laya_v = (this.getChildAt(8));
            this.m_text_game_explain = (this.getChildAt(9));
        }
    }
    FGUI_splash.URL = "ui://n3oedpp6nihr0";

    class test {
        constructor() {
            let _scene = new Laya.Scene3D();
            Laya.stage.addChild(_scene);
            let _camera = new Laya.Camera();
            _scene.addChild(_camera);
            _camera.transform.position = new Laya.Vector3(0, 4, -7);
            _camera.transform.rotationEuler = new Laya.Vector3(-35, 180, 0);
            let _light = new Laya.DirectionLight();
            _light.transform.position = new Laya.Vector3(0, 500, 0);
            _scene.addChild(_light);
            _camera.clearFlag = Laya.CameraClearFlags.SolidColor;
            _camera.clearColor = new Laya.Vector4(222 / 255, 222 / 255, 222 / 255, 1);
            let _mat = new Laya.BlinnPhongMaterial();
            _mat.albedoColor = new Laya.Vector4(210 / 255, 230 / 255, 3 / 255, 1);
            let sprite3D = _scene.addChild(new Laya.Sprite3D());
            var box = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.5, 0.5, 0.5)));
            box.transform.position = new Laya.Vector3(2.0, 0.25, 0.6);
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            box.meshRenderer.material = _mat;
            var sphere = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(0.25, 20, 20)));
            sphere.transform.position = new Laya.Vector3(1.0, 0.25, 0.6);
            sphere.meshRenderer.material = _mat;
            var cylinder = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(0.25, 1, 20)));
            cylinder.transform.position = new Laya.Vector3(0, 0.5, 0.6);
            cylinder.meshRenderer.material = _mat;
            var capsule = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCapsule(0.25, 1, 10, 20)));
            capsule.transform.position = new Laya.Vector3(-1.0, 0.5, 0.6);
            capsule.meshRenderer.material = _mat;
            var cone = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCone(0.25, 0.75)));
            cone.transform.position = new Laya.Vector3(-2.0, 0.375, 0.6);
            cone.meshRenderer.material = _mat;
            var plane = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(6, 6, 10, 10)));
            plane.meshRenderer.material = _mat;
            fgui.UIConfig.packageFileExtension = "bin";
            Laya.stage.addChild(fgui.GRoot.inst.displayObject);
            fgui.GRoot.inst.width = Laya.stage.width;
            fgui.GRoot.inst.height = Laya.stage.height;
            fairygui.UIObjectFactory.setPackageItemExtension(FGUI_splash.URL, FGUI_splash);
            Laya.loader.load([
                { url: 'res/FGUI/InitLoad.bin', type: Laya.Loader.BUFFER },
                { url: 'res/FGUI/InitLoad_atlas0.png', type: Laya.Loader.IMAGE },
            ], Laya.Handler.create(this, this.InitUI));
        }
        InitUI() {
            fgui.UIPackage.addPackage('res/FGUI/InitLoad');
            console.log(fgui.GRoot.inst);
            let _ui = FGUI_splash.createInstance();
            fgui.GRoot.inst.addChild(_ui);
            _ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this.asyncTest();
            PlatformManager.instance.init();
            PlatformManager.instance.initPlatform();
        }
        asyncTest() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('异步开始');
                yield this._asyncTest();
                console.log('异步结束');
            });
        }
        _asyncTest() {
            return new Promise((_r) => {
                Laya.timer.once(1000, this, () => {
                    console.log('异步函数执行中');
                    _r();
                });
            });
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            new test();
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
