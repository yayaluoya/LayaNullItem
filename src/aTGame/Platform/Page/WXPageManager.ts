import IPageManager from "../T/interface/IPageManager";
import IPlatform from "../T/interface/IPlatform";
/**
 * 微信 页面管理器
 */
export default class WXPageManager implements IPageManager {
    Platform: IPlatform;
    init(_platform: IPlatform) {
        this.Platform = _platform;
    }

    showToast(_mes: string, _time: number) {
        throw new Error("Method not implemented.");
    }
}