import QQPlatformData from "../../../cFrameBridge/Platform/Data/QQPlatformData";
import QQAdManager from "../AD/QQAdManager";
import QQDeviceManager from "../Device/QQDeviceManager";
import QQPageManager from "../Page/QQPageManager";
import QQRecordManager from "../Record/QQRecordManager";
import QQShareManager from "../Share/QQShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * QQ 平台
 */
export default class QQPlatform extends BasePlatform<
    QQPlatformData,
    QQRecordManager,
    QQAdManager,
    QQShareManager,
    QQDeviceManager,
    QQPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.QQ];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.QQ;

    /**
     * 平台数据
     */
    public platformData: QQPlatformData = new QQPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: QQRecordManager = new QQRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: QQAdManager = new QQAdManager();

    /**
     * 分享管理器
     */
    public shareManager: QQShareManager = new QQShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: QQDeviceManager = new QQDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: QQPageManager = new QQPageManager();
}