import IPlatform from "../T/interface/IPlatform";
import IShareManager from "../T/interface/IShareManager";
import IShareMes from "../T/interface/share/IShareMes";
/**
 * 默认分享管理器
 */
export default class DefaultShareManager implements IShareManager {
    Platform: IPlatform;
    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    ShareAppMessage(obj: IShareMes, onSuccess?: Laya.Handler, onFailed?: Laya.Handler) {
        console.log('平台分享消息：', obj);
        //
        onSuccess.run();
    }
}