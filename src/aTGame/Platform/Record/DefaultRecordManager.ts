import IPlatform from "../T/interface/IPlatform";
import IRecordManager from "../T/interface/IRecordManager";
/**
 * 默认录屏管理器
 */
export default class DefaultRecordManager implements IRecordManager {

    Platform: IPlatform;
    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    Start(duration: number) {
        console.log('开始录屏');
    }

    Stop(caller: any, callfunc: Function) {
        console.log('停止录屏');
    }

    Pause() {
        console.log('暂停录屏');
    }

    Resume() {
        console.log('重新录屏');
    }

    Share(callder: any, okCallbackFunc: Function) {
        console.log('分享录屏');
    }
}