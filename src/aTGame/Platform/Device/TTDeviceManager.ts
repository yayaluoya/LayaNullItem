import ConsoleEx from "../../Console/ConsoleEx";
import { IDeviceManager } from "../T/interface/IDeviceManager";
import IPlatform from "../T/interface/IPlatform";
/**
 * 头条设备管理器
 */
export default class TTDeviceManager implements IDeviceManager {
    Platform: IPlatform;

    init(_platform: IPlatform) {
        throw new Error("Method not implemented.");
    }

    Vibrate(isLong: boolean) {
        if (!this.Platform.base) {
            console.log(...ConsoleEx.packError('不存在window[\'tt\']'));
            return;
        }
        console.log("调用震动", isLong);
        if (isLong) {
            this.Platform.base.vibrateLong({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        } else {
            this.Platform.base.vibrateShort({
                success(res) { },
                fail(res) {
                    console.error("调用震动失败", res);
                },
                complete(res) { }
            });
        }
    }
}