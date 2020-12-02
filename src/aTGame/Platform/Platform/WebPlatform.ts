import WEBPlatformData from "../../../cFrameBridge/Platform/Data/WebPlatformData";
import WebAdManager from "../AD/WebAdManager";
import WebDeviceManager from "../Device/WebDeviceManager";
import WebPageManager from "../Page/WebPageManager";
import WebRecordManager from "../Record/WebRecordManager";
import WebShareManager from "../Share/WebShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformType } from "../T/EPlatformType";

/**
 * web平台实例
 */
export default class WebPlatform extends BasePlatform<
    WEBPlatformData,
    WebRecordManager,
    WebAdManager,
    WebShareManager,
    WebDeviceManager,
    WebPageManager
    > {

    /**
     * 基础句柄
     */
    public base: any = {};

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.Web;

    /**
     * 平台数据
     */
    public platformData: WEBPlatformData = new WEBPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: WebRecordManager = new WebRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: WebAdManager = new WebAdManager();

    /**
     * 分享管理器
     */
    public shareManager: WebShareManager = new WebShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: WebDeviceManager = new WebDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: WebPageManager = new WebPageManager();
}