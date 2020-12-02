import { EPlatformType } from "../EPlatformType";
import IADManager from "../interface/IADManager";
import { IDeviceManager } from "../interface/IDeviceManager";
import IPageManager from "../interface/IPageManager";
import IPlatform from "../interface/IPlatform";
import IRecordManager from "../interface/IRecordManager";
import IShareManager from "../interface/IShareManager";
import BasePlatformData from "./BasePlatformData";

/**
 * 基类平台类
 * 各个管理器必须在初始化时设置完成
 */
export default abstract class BasePlatform<
    //数据
    Data extends BasePlatformData,
    //录制器
    Record extends IRecordManager,
    //广告
    AD extends IADManager,
    //分享
    Share extends IShareManager,
    //设备
    Device extends IDeviceManager,
    //页面
    Page extends IPageManager,
    //
    > implements IPlatform {

    /**
     * 基础句柄
     */
    public base: any;

    /**
     * 当前平台
     */
    public platformType: EPlatformType;

    /**
     * 平台数据
     */
    public platformData: Data;

    /**
     * 视频录制器
     */
    public recordManager: Record;

    /**
     * 广告播放器
     */
    public ADManager: AD;

    /**
     * 分享管理器
     */
    public shareManager: Share;

    /**
     * 设备硬件管理器
     */
    public deviceManager: Device;

    /**
     * 页面管理器
     */
    public pageManager: Page;

    /**
     * 初始化
     */
    public Init(_platformData: Data) {
        if (!_platformData) {
            console.error('平台数据为空');
        }
        //
        this.platformData = _platformData;
        //
        if (!this.platformType) {
            console.error('没有设置平台类型');
        }
        if (!this.base) {
            console.error('没有初始化平台句柄！', this.platformType);
        }
        if (!this.platformData) {
            console.error('没有初始化平台数据！', this.platformType);
        }
        if (this.recordManager) {
            this.recordManager.init(this);
        } else {
            console.error('没有初始化平台视频录制管理器！', this.platformType);
        }
        if (this.ADManager) {
            this.ADManager.init(this);
        } else {
            console.error('没有初始化平台广告管理器！', this.platformType);
        }
        if (this.shareManager) {
            this.shareManager.init(this);
        } else {
            console.error('没有初始化平台分享管理器！', this.platformType);
        }
        if (this.deviceManager) {
            this.deviceManager.init(this);
        } else {
            console.error('没有初始化平台设备管理器！', this.platformType);
        }
    }

    /**
     * 加载分包内容
     */
    public LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) { }
}