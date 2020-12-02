import IPlatformUnder from "./IPlatformUnder";
import IShareMes from "./share/IShareMes";

/**
 * 分享管理器实例接口
 */
export default interface IShareManager extends IPlatformUnder {
    /**
     * 分享消息
     * @param obj 分享参数
     * @param onSuccess 完成回调
     * @param onFailed 失败回调
     */
    ShareAppMessage(obj: IShareMes, onSuccess?: Laya.Handler, onFailed?: Laya.Handler);
}