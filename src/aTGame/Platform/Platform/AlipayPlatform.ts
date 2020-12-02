import AlipayPlatformData from "../../../cFrameBridge/Platform/Data/AlipayPlatformData";
import AlipayAdManager from "../AD/AlipayAdManager";
import AlipayDeviceManager from "../Device/AlipayDeviceManager";
import AlipayPageManager from "../Page/AlipayPageManager";
import AlipayRecordManager from "../Record/AlipayRecordManager";
import AliPayShareManager from "../Share/AlipayShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 阿里小游戏平台
 */
export default class AlipayPlatform extends BasePlatform<
    AlipayPlatformData,
    AlipayRecordManager,
    AlipayAdManager,
    AliPayShareManager,
    AlipayDeviceManager,
    AlipayPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.Alipay];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.Alipay;

    /**
     * 平台数据
     */
    public platformData: AlipayPlatformData = new AlipayPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: AlipayRecordManager = new AlipayRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: AlipayAdManager = new AlipayAdManager();

    /**
     * 分享管理器
     */
    public shareManager: AliPayShareManager = new AliPayShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: AlipayDeviceManager = new AlipayDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: AlipayPageManager = new AlipayPageManager();
}