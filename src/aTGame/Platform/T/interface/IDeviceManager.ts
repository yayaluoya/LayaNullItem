import IPlatformUnder from "./IPlatformUnder";

/**
 * 设备实例接口
 */
export interface IDeviceManager extends IPlatformUnder {
    /**
     * 震动
     * @param isLong 是否是长震动 
     */
    Vibrate(isLong: boolean);
}