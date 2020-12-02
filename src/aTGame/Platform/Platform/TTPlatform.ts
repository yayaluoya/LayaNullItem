import TTPlatformData from "../../../cFrameBridge/Platform/Data/TTPlatformData";
import TTAdManager from "../AD/TTAdManager";
import TTDeviceManager from "../Device/TTDeviceManager";
import TTPageManager from "../Page/TTPageManager";
import TTRecordManager from "../Record/TTRecordManager";
import TTShareManager from "../Share/TTShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";

/**
 * 头条平台
 */
export default class TTPlatform extends BasePlatform<
    TTPlatformData,
    TTRecordManager,
    TTAdManager,
    TTShareManager,
    TTDeviceManager,
    TTPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.TT];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.TT;

    /**
     * 平台数据
     */
    public platformData: TTPlatformData = new TTPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: TTRecordManager = new TTRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: TTAdManager = new TTAdManager();

    /**
     * 分享管理器
     */
    public shareManager: TTShareManager = new TTShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: TTDeviceManager = new TTDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: TTPageManager = new TTPageManager();
}