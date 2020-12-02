import IPlatform from "./IPlatform";

/**
 * 平台之下的分功能实例接口
 */
export default interface IPlatformUnder {
    /** 当前平台 */
    Platform: IPlatform;

    /**
     * 初始化
     * @param _platform 依附平台
     */
    init(_platform: IPlatform);
}