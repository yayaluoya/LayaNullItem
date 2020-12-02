import IADManager from "../T/interface/IADManager";
import IPlatform from "../T/interface/IPlatform";
/**
 * OPPO广告管理器
 */
export default class OPPOAdManager implements IADManager {
    bannerAd: any;
    rewardedVideoAd: any;
    ifShowRewardedVideoAd: boolean;
    interstitialAd: any;
    ifShowInterstitialAd: boolean;
    Platform: IPlatform;

    init(_platform: IPlatform) {
        throw new Error("Method not implemented.");
    }

    createBannerAd(_data: { adUnitId: string; style?: { left: number; top: number; width: number; }; adIntervals?: number; }) {
        throw new Error("Method not implemented.");
    }
    showBannerAd() {
        throw new Error("Method not implemented.");
    }
    hideBannerAd() {
        throw new Error("Method not implemented.");
    }
    destroyBannerAd() {
        throw new Error("Method not implemented.");
    }
    setBannerAd(_width?: number, _top?: number, _left?: number) {
        throw new Error("Method not implemented.");
    }
    createRewardedVideoAd(_data: { adUnitId: string; }) {
        throw new Error("Method not implemented.");
    }
    showRewardedVideoAd(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    showInterstitialAd() {
        throw new Error("Method not implemented.");
    }
}