import VIVOPlatformData from "../../../cFrameBridge/Platform/Data/VIVOPlatformData";
import VIVOAdManager from "../AD/VIVOAdManager";
import VIVODeviceManager from "../Device/VIVODeviceManager";
import VIVOPageManager from "../Page/VIVOPageManager";
import VIVORecordManager from "../Record/VIVORecordManager";
import VIVOShareManager from "../Share/VIVOShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * VIVO 平台
 */
export default class VIVOPlatform extends BasePlatform<
    VIVOPlatformData,
    VIVORecordManager,
    VIVOAdManager,
    VIVOShareManager,
    VIVODeviceManager,
    VIVOPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.VIVO];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.VIVO;

    /**
     * 平台数据
     */
    public platformData: VIVOPlatformData = new VIVOPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: VIVORecordManager = new VIVORecordManager();

    /**
     * 广告播放器
     */
    public ADManager: VIVOAdManager = new VIVOAdManager();

    /**
     * 分享管理器
     */
    public shareManager: VIVOShareManager = new VIVOShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: VIVODeviceManager = new VIVODeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: VIVOPageManager = new VIVOPageManager();
}