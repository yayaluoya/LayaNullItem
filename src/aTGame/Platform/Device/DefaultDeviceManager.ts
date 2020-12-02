import DefaultPlatform from "../Platform/DefaultPlatform";
import { IDeviceManager } from "../T/interface/IDeviceManager";

export default class DefaultDeviceManager implements IDeviceManager {
    Platform: DefaultPlatform;

    init(_platform: DefaultPlatform) {
        this.Platform = _platform;
    }

    Vibrate(isLong: boolean) {
        //判断平台是否支持
        if (!navigator.vibrate) {
            // 不支持
            console.log("不支持设备震动！");
            return;
        }
        if (isLong) {
            navigator.vibrate(15);
        } else {
            navigator.vibrate(400);
        }
    }
}