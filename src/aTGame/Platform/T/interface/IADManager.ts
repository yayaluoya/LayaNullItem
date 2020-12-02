import IPlatformUnder from "./IPlatformUnder";

/**
 * 广告播放器实例接口
 */
export default interface IADManager extends IPlatformUnder {
    /** bannerAd 实例 */
    bannerAd: any;

    /** 激励广告实例 */
    rewardedVideoAd: any

    /** 是否显示激励广告 */
    ifShowRewardedVideoAd: boolean;

    /** 插屏广告实例 */
    interstitialAd: any;

    /** 是否显示插屏广告 */
    ifShowInterstitialAd: boolean;

    /**
     * 创建一个BannerAd广告实例
     * @param _data 创建数据
     */
    createBannerAd(_data: {
        adUnitId: string,
        style?: {
            left: number,
            top: number,
            width: number,
        },
        adIntervals?: number,
    }): any;

    /** 显示 bannerAd */
    showBannerAd();

    /** 隐藏 bannerAd */
    hideBannerAd();

    /** 销毁 bannerAd */
    destroyBannerAd();

    /**
     * 设置bannerAd参数
     * @param _width 宽度
     */
    setBannerAd(_width?: number, _top?: number, _left?: number);

    /**
     * 创建一个全局激励视频，因为是全局的，所以可以提前创建
     * @param _data 创建参数
     */
    createRewardedVideoAd(_data: {
        adUnitId: string,
    }): any;

    /** 显示激励广告 */
    showRewardedVideoAd(): Promise<boolean>;

    /**
     * 显示插屏广告
     * @param _handler 显示回调
     */
    showInterstitialAd();
}