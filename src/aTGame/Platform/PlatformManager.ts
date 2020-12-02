import BDPlatformData from "../../cFrameBridge/Platform/Data/BDPlatformData";
import DefaultPlatformData from "../../cFrameBridge/Platform/Data/DefaultPlatformData";
import OPPOPlatformData from "../../cFrameBridge/Platform/Data/OPPOPlatformData";
import QQPlatformData from "../../cFrameBridge/Platform/Data/QQPlatformData";
import QTTPlatformData from "../../cFrameBridge/Platform/Data/QTTPlatformData";
import TTPlatformData from "../../cFrameBridge/Platform/Data/TTPlatformData";
import VIVOPlatformData from "../../cFrameBridge/Platform/Data/VIVOPlatformData";
import WXPlatformData from "../../cFrameBridge/Platform/Data/WXPlatformData";
import ConsoleEx from "../Console/ConsoleEx";
import IRootManager from "../Manager/IRootManager";
import BDPlatform from "./Platform/BDPlatform";
import DefaultPlatform from "./Platform/DefaultPlatform";
import OPPOPlatform from "./Platform/OPPOPlatform";
import QQPlatform from "./Platform/QQPlatform";
import QTTPlatform from "./Platform/QTTPlatform";
import TTPlatform from "./Platform/TTPlatform";
import VIVOPlatform from "./Platform/VIVOPlatform";
import WXPlatform from "./Platform/WXPlatform";
import PlatformManagerProxy from "./PlatformManagerProxy";
import BasePlatformData from "./T/class/BasePlatformData";
import IPlatform from "./T/interface/IPlatform";
/**
 * 平台管理器
 */
export default class PlatformManager implements IRootManager {
    /** 平台实例 */
    private static _instance: PlatformManager;
    public static get instance(): PlatformManager {
        if (this._instance == null) {
            this._instance = new PlatformManager();
        }
        return this._instance;
    }

    /** 平台实例 */
    private m_platformInstance: IPlatform;

    /** 平台数据 */
    private m_platformData: BasePlatformData;

    /** 获取平台实例 */
    public static get PlatformInstance(): IPlatform {
        if (!this.instance.m_platformInstance) {
            console.log(...ConsoleEx.packError('还没有设置过平台实例代理！'));
        }
        return this.instance.m_platformInstance;
    }

    /**
     * 初始化平台
     * @param appId 
     */
    public init() {
        if (this.m_platformInstance != null) {
            console.error(...ConsoleEx.packError("已调用过平台创建为", PlatformManagerProxy.GetPlatformStr(this.m_platformInstance.platformType), "不能重复创建"));
            return this.m_platformInstance;
        }
        let isQTT = window["qttGame"] != null;
        let isTT = window["tt"] != null;
        //获取平台实例
        let result: IPlatform;
        if (isTT) {
            result = new TTPlatform();
            this.m_platformData = new TTPlatformData();
        } else if (Laya.Browser.onMiniGame) {
            result = new WXPlatform();
            this.m_platformData = new WXPlatformData();
        } else if (Laya.Browser.onBDMiniGame) {
            result = new BDPlatform();
            this.m_platformData = new BDPlatformData();
        } else if (isQTT) {
            result = new QTTPlatform();
            this.m_platformData = new QTTPlatformData();
        } else if (Laya.Browser.onQQMiniGame) {
            result = new QQPlatform();
            this.m_platformData = new QQPlatformData();
        } else if (Laya.Browser.onQGMiniGame) {
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
        //保存平台实例
        this.m_platformInstance = result;
        //设置代理
        PlatformManagerProxy.instance.PlatformInstance = result;
        //设置到全局
        window['$Platform'] = this.m_platformInstance;
        //
        console.log(...ConsoleEx.packPlatform("平台实例创建完成", PlatformManagerProxy.GetPlatformStr(this.m_platformInstance.platformType)));
    }

    /**
     * 初始化平台
     */
    public initPlatform() {
        //
        this.m_platformInstance.Init(this.m_platformData);
        //
        console.log(...ConsoleEx.packPlatform('平台初始化完成'));
    }
}