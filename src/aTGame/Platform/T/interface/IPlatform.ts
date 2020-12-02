import IRecordManager from "./IRecordManager";
import IADManager from "./IADManager";
import BasePlatformData from "../class/BasePlatformData";
import { EPlatformType } from "../EPlatformType";
import IShareManager from "./IShareManager";
import { IDeviceManager } from "./IDeviceManager";
import IPageManager from "./IPageManager";
/**
 * 平台实例接口
 */
export default interface IPlatform {

    /**
     * 基础句柄
     */
    base: any;

    /**
     * 当前平台
     */
    platformType: EPlatformType;

    /**
     * 平台数据
     */
    platformData: BasePlatformData;

    /**
     * 视频录制器
     */
    recordManager: IRecordManager;

    /**
     * 广告播放器
     */
    ADManager: IADManager;

    /**
     * 分享管理器
     */
    shareManager: IShareManager;

    /**
     * 设备硬件管理器
     */
    deviceManager: IDeviceManager;

    /**
     * 页面管理器
     */
    pageManager: IPageManager;

    /**
     * 初始化
     */
    Init(_data: BasePlatformData);

    /**
     * 加载分包内容
     */
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler);
}