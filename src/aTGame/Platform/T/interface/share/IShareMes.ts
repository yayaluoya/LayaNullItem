/**
 * 分享消息实例
 */
export default interface IShareMes {
    /**
     * 分享标题
     */
    title?: string;

    /**
     * 其他参数
     */
    [index: string]: string,
}