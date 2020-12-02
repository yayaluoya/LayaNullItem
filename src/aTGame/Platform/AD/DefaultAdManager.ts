import DefaultPlatform from "../Platform/DefaultPlatform";
import IADManager from "../T/interface/IADManager";
/**
 * 默认广告管理器
 */
export default class DefaultAdManager implements IADManager {
    bannerAd: any;
    rewardedVideoAd: any;
    ifShowRewardedVideoAd: boolean;
    interstitialAd: any;
    ifShowInterstitialAd: boolean;

    Platform: DefaultPlatform;

    init(_platform: DefaultPlatform) {
        this.Platform = _platform;
        //
        this.ifShowRewardedVideoAd = true;
    }

    createBannerAd(_data: { adUnitId: string; style?: { left: number; top: number; width: number; }; adIntervals?: number; }) {
        //
    }

    showBannerAd() {
        console.log('显示BannerAd');
    }

    hideBannerAd() {
        console.log('隐藏BannerAd');
    }

    destroyBannerAd() {
        console.log('删除BannerAd');
    }

    setBannerAd(_width?: number, _top?: number, _left?: number) {
        //
    }

    createRewardedVideoAd(_data: { adUnitId: string; }) {
        //
    }

    showRewardedVideoAd(): Promise<boolean> {
        console.log('显示激励广告');
        //
        return new Promise<boolean>((r) => {
            r(true);
        });
    }

    showInterstitialAd() {
        console.log('显示插屏广告');
    }
}