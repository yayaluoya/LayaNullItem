import OPPOPlatformData from "../../../cFrameBridge/Platform/Data/OPPOPlatformData";
import OPPOAdManager from "../AD/OPPOAdManager";
import OPPODeviceManager from "../Device/OPPODeviceManager";
import OPPOPageManager from "../Page/OPPOPageManager";
import OPPORecordManager from "../Record/OPPORecordManager";
import OPPOShareManager from "../Share/OPPOShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * OPPO 平台实例
 */
export default class OPPOPlatform extends BasePlatform<
    OPPOPlatformData,
    OPPORecordManager,
    OPPOAdManager,
    OPPOShareManager,
    OPPODeviceManager,
    OPPOPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.OPPO];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.OPPO;

    /**
     * 平台数据
     */
    public platformData: OPPOPlatformData = new OPPOPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: OPPORecordManager = new OPPORecordManager();

    /**
     * 广告播放器
     */
    public ADManager: OPPOAdManager = new OPPOAdManager();

    /**
     * 分享管理器
     */
    public shareManager: OPPOShareManager = new OPPOShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: OPPODeviceManager = new OPPODeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: OPPOPageManager = new OPPOPageManager();
}