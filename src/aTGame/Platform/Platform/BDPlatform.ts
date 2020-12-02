import BDPlatformData from "../../../cFrameBridge/Platform/Data/BDPlatformData";
import BDAdManager from "../AD/BDAdManager";
import BDDeviceManager from "../Device/BDDeviceManager";
import BDPageManager from "../Page/BDPageManager";
import BDRecordManager from "../Record/BDRecordManager";
import BDShareManager from "../Share/BDShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 百度小游戏平台实例
 */
export default class BDPlatform extends BasePlatform<
    BDPlatformData,
    BDRecordManager,
    BDAdManager,
    BDShareManager,
    BDDeviceManager,
    BDPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.BD];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.BD;

    /**
     * 平台数据
     */
    public platformData: BDPlatformData = new BDPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: BDRecordManager = new BDRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: BDAdManager = new BDAdManager();

    /**
     * 分享管理器
     */
    public shareManager: BDShareManager = new BDShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: BDDeviceManager = new BDDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: BDPageManager = new BDPageManager();
}