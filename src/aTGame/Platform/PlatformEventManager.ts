import { EPlatformEvent } from "./Event/EPlatformEvent";

/**
 * 平台事件管理器
 */
export default class PlatformEventManager extends Laya.EventDispatcher {
    //
    private static _instance: PlatformEventManager;
    /** 单例 */
    public static get instance(): PlatformEventManager {
        if (this._instance == null) {
            this._instance = new PlatformEventManager();
        }
        return this._instance;
    }
    //
    private constructor() { super(); }

    /**
     * 发送平台事件
     * @param event 平台事件枚举 
     * @param data 数据
     */
    public eventGlobal(event: EPlatformEvent, data?: any) {
        this.event(event, data);
    }

    /**
     * 监听平台事件
     * @param type 平台事件枚举
     * @param caller 执行域
     * @param listener 事件
     * @param args 携带的数据
     */
    public onGlobal(type: EPlatformEvent, caller: any, listener: Function, args?: any[]) {
        this.on(type, caller, listener, args);
    }

    /**
     * 删除平台事件侦听器
     * @param type 平台事件枚举 
     * @param caller 执行域
     * @param listener 回调函数
     */
    public offGlobal(type: EPlatformEvent, caller: any, listener: Function) {
        this.off(type, caller, listener);
    }
}