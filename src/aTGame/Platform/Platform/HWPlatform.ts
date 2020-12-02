import HWPlatformData from "../../../cFrameBridge/Platform/Data/HWPlatformData";
import HWAdManager from "../AD/HWAdManager";
import HWDeviceManager from "../Device/HWDeviceManager";
import HWPageManager from "../Page/HWPageManager";
import HWRecordManager from "../Record/HWRecordManager";
import HWShareManager from "../Share/HWShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 华为小游戏
 */
export default class HWPlatform extends BasePlatform<
    HWPlatformData,
    HWRecordManager,
    HWAdManager,
    HWShareManager,
    HWDeviceManager,
    HWPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.HW];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.HW;

    /**
     * 平台数据
     */
    public platformData: HWPlatformData = new HWPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: HWRecordManager = new HWRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: HWAdManager = new HWAdManager();

    /**
     * 分享管理器
     */
    public shareManager: HWShareManager = new HWShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: HWDeviceManager = new HWDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: HWPageManager = new HWPageManager();
}