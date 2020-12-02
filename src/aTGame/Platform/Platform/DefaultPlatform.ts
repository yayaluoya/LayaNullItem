import DefaultPlatformData from "../../../cFrameBridge/Platform/Data/DefaultPlatformData";
import DefaultAdManager from "../AD/DefaultAdManager";
import DefaultDeviceManager from "../Device/DefaultDeviceManager";
import DefaultPageManager from "../Page/DefaultPageManager";
import DefaultRecordManager from "../Record/DefaultRecordManager";
import DefaultShareManager from "../Share/DefaultShareManager";
import BasePlatform from "../T/class/BasePlatform";
import { EPlatformType } from "../T/EPlatformType";

/**
 * 默认平台实例
 */
export default class DefaultPlatform extends BasePlatform<
    DefaultPlatformData,
    DefaultRecordManager,
    DefaultAdManager,
    DefaultShareManager,
    DefaultDeviceManager,
    DefaultPageManager
    > {

    /**
     * 基础句柄
     */
    public base: any = {};

    /**
     * 当前平台类型
     */
    public platformType: EPlatformType = EPlatformType.None;

    /**
     * 平台数据
     */
    public platformData: DefaultPlatformData = new DefaultPlatformData();

    /**
     * 视频录制器
     */
    public recordManager: DefaultRecordManager = new DefaultRecordManager();

    /**
     * 广告播放器
     */
    public ADManager: DefaultAdManager = new DefaultAdManager();

    /**
     * 分享管理器
     */
    public shareManager: DefaultShareManager = new DefaultShareManager();

    /**
     * 设备硬件管理器
     */
    public deviceManager: DefaultDeviceManager = new DefaultDeviceManager();

    /**
     * 页面管理器
     */
    public pageManager: DefaultPageManager = new DefaultPageManager();
}