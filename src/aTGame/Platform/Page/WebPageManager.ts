import IPlatform from "../T/interface/IPlatform";
import DefaultPageManager from "./DefaultPageManager";
/**
 * web 页面管理器
 */
export default class WebPageManager extends DefaultPageManager {
    Platform: IPlatform;

    init(_platform: IPlatform) {
        this.Platform = _platform;
    }
}