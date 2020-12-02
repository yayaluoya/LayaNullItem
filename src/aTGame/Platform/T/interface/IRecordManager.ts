import IPlatformUnder from "./IPlatformUnder";

/**
 * 录屏管理器实例接口
 */
export default interface IRecordManager extends IPlatformUnder {
    /**
     * 开始录屏
     * @param duration 录屏时间
     */
    Start(duration: number);

    /**
     * 停止录屏
     */
    Stop(caller: any, callfunc: Function);

    /**
     * 暂停录屏
     */
    Pause();

    /**
     * 继续录屏
     */
    Resume();

    /**
     * 分享录屏
     */
    Share(callder: any, okCallbackFunc: Function);
}