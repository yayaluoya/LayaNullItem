import { IDeviceManager } from "../T/interface/IDeviceManager";
import IPlatform from "../T/interface/IPlatform";

/**
 * 微信设备管理器
 */
export default class WXDeviceManager implements IDeviceManager {
    Platform: IPlatform;

    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    Vibrate(isLong: boolean) {
        console.log("调用震动", isLong);
        //判断是否在小游戏平台
        if (this.Platform.base) {
            if (isLong) {
                Laya.timer.callLater(wx, wx.vibrateLong, [null]);
            } else {
                Laya.timer.callLater(wx, wx.vibrateShort, [null]);
            }
        }
    }
}