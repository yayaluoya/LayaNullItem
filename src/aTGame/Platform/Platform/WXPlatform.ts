import WXPlatformData from "../../../cFrameBridge/Platform/Data/WXPlatformData";
import WXAdManager from "../AD/WXAdManager";
import WXDeviceManager from "../Device/WXDeviceManager";
import WXPageManager from "../Page/WXPageManager";
import WXRecordManager from "../Record/WXRecordManager";
import WXShareManager from "../Share/WXShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 微信平台
 */
export default class WXPlatform extends BasePlatform<
    WXPlatformData,
    WXRecordManager,
    WXAdManager,
    WXShareManager,
    WXDeviceManager,
    WXPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window['wx'];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.WX;

    /**
     * 平台数据
     */
    public platformData: WXPlatformData = new WXPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: WXRecordManager = new WXRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: WXAdManager = new WXAdManager();

    /**
     * 分享管理器
     */
    public shareManager: WXShareManager = new WXShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: WXDeviceManager = new WXDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: WXPageManager = new WXPageManager();
}