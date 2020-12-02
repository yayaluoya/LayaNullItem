import KGPlatformData from "../../../cFrameBridge/Platform/Data/KGPlatformData";
import KGAdManager from "../AD/KGAdManager";
import KGDeviceManager from "../Device/KGDeviceManager";
import KGPageManager from "../Page/KGPageManager";
import KGRecordManager from "../Record/KGRecordManager";
import KGShareManager from "../Share/KGShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 小米戏游戏平台实例
 */
export default class KGPlatform extends BasePlatform<
    KGPlatformData,
    KGRecordManager,
    KGAdManager,
    KGShareManager,
    KGDeviceManager,
    KGPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.KG];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.KG;

    /**
     * 平台数据
     */
    public platformData: KGPlatformData = new KGPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: KGRecordManager = new KGRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: KGAdManager = new KGAdManager();

    /**
     * 分享管理器
     */
    public shareManager: KGShareManager = new KGShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: KGDeviceManager = new KGDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: KGPageManager = new KGPageManager();
}