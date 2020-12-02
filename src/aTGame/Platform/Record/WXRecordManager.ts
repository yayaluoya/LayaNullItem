import IPlatform from "../T/interface/IPlatform";
import IRecordManager from "../T/interface/IRecordManager";
/**
 * 微信录屏工具
 */
export default class WXRecordManager implements IRecordManager {
    Platform: IPlatform;
    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    Start(duration: number) {
        throw new Error("Method not implemented.");
    }
    Stop(caller: any, callfunc: Function) {
        throw new Error("Method not implemented.");
    }
    Pause() {
        throw new Error("Method not implemented.");
    }
    Resume() {
        throw new Error("Method not implemented.");
    }
    Share(callder: any, okCallbackFunc: Function) {
        throw new Error("Method not implemented.");
    }
}