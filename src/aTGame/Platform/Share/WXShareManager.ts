import IPlatform from "../T/interface/IPlatform";
import IShareManager from "../T/interface/IShareManager";
import IShareMes from "../T/interface/share/IShareMes";
/**
 * 微信 分享管理器
 */
export default class WXShareManager implements IShareManager {
    Platform: IPlatform;
    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    ShareAppMessage(obj: IShareMes, onSuccess?: Laya.Handler, onFailed?: Laya.Handler) {
        //
    }
}