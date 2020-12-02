import QTTPlatformData from "../../../cFrameBridge/Platform/Data/QTTPlatformData";
import QTTAdManager from "../AD/QTTAdManager";
import QTTDeviceManager from "../Device/QTTDeviceManager";
import QTTPageManager from "../Page/QTTPageManager";
import QTTRecordManager from "../Record/QTTRecordManager";
import QTTShareManager from "../Share/QTTShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformKey } from "../T/EPlatformKey";
import { EPlatformType } from "../T/EPlatformType";
/**
 * 趣头条平台实例
 */
export default class QTTPlatform extends BasePlatform<
    QTTPlatformData,
    QTTRecordManager,
    QTTAdManager,
    QTTShareManager,
    QTTDeviceManager,
    QTTPageManager
    >{

    /**
     * 基础句柄
     */
    public base: any = window[EPlatformKey.QTT];

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.QTT;

    /**
     * 平台数据
     */
    public platformData: QTTPlatformData = new QTTPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: QTTRecordManager = new QTTRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: QTTAdManager = new QTTAdManager();

    /**
     * 分享管理器
     */
    public shareManager: QTTShareManager = new QTTShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: QTTDeviceManager = new QTTDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: QTTPageManager = new QTTPageManager();
}