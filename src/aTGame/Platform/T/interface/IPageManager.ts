import IPlatformUnder from "./IPlatformUnder";

/**
 * 页面实例接口
 */
export default interface IPageManager extends IPlatformUnder {
    /**
     * 显示一个消息
     * @param _mes 消息内容
     * @param _time 显示时间
     */
    showToast(_mes: string, _time: number);
}