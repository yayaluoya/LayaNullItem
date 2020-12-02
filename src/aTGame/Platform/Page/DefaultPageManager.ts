import ConsoleEx from "../../Console/ConsoleEx";
import DefaultPlatform from "../Platform/DefaultPlatform";
import IPageManager from "../T/interface/IPageManager";

/**
 * 默认页面管理器
 */
export default class DefaultPageManager implements IPageManager {
    Platform: DefaultPlatform;
    init(_platform: DefaultPlatform) {
        this.Platform = _platform;
    }

    showToast(_mes: string, _time: number) {
        console.log(...ConsoleEx.packLog('平台：', _mes));
    }
}