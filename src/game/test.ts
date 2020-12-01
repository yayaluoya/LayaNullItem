import FGUI_splash from "./FGUI_splash";

/**
 * 测试类
 */
export default class test {
    //
    public constructor() {
        //
        let _scene: Laya.Scene3D = new Laya.Scene3D();
        Laya.stage.addChild(_scene);
        let _camera: Laya.Camera = new Laya.Camera();
        _scene.addChild(_camera);
        _camera.transform.position = new Laya.Vector3(0, 4, -7);
        _camera.transform.rotationEuler = new Laya.Vector3(-35, 180, 0);
        let _light: Laya.DirectionLight = new Laya.DirectionLight();
        _light.transform.position = new Laya.Vector3(0, 500, 0);
        _scene.addChild(_light);
        //
        _camera.clearFlag = Laya.CameraClearFlags.SolidColor;
        _camera.clearColor = new Laya.Vector4(222 / 255, 222 / 255, 222 / 255, 1);
        //
        let _mat: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();
        _mat.albedoColor = new Laya.Vector4(210 / 255, 230 / 255, 3 / 255, 1);
        //创建一个空节点用来放置各模型
        let sprite3D: Laya.Node = _scene.addChild(new Laya.Sprite3D());
        //正方体
        var box: Laya.Sprite3D = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.5, 0.5, 0.5))) as Laya.Sprite3D;
        box.transform.position = new Laya.Vector3(2.0, 0.25, 0.6);
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        (box as Laya.MeshSprite3D).meshRenderer.material = _mat;
        //球体
        var sphere: Laya.Sprite3D = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(0.25, 20, 20))) as Laya.Sprite3D;
        sphere.transform.position = new Laya.Vector3(1.0, 0.25, 0.6);
        (sphere as Laya.MeshSprite3D).meshRenderer.material = _mat;
        //圆柱体
        var cylinder: Laya.Sprite3D = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(0.25, 1, 20))) as Laya.Sprite3D;
        cylinder.transform.position = new Laya.Vector3(0, 0.5, 0.6);
        (cylinder as Laya.MeshSprite3D).meshRenderer.material = _mat;
        //胶囊体
        var capsule: Laya.Sprite3D = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCapsule(0.25, 1, 10, 20))) as Laya.Sprite3D;
        capsule.transform.position = new Laya.Vector3(-1.0, 0.5, 0.6);
        (capsule as Laya.MeshSprite3D).meshRenderer.material = _mat;
        //圆锥体
        var cone: Laya.Sprite3D = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCone(0.25, 0.75))) as Laya.Sprite3D;
        cone.transform.position = new Laya.Vector3(-2.0, 0.375, 0.6);
        (cone as Laya.MeshSprite3D).meshRenderer.material = _mat;
        //平面
        var plane = sprite3D.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(6, 6, 10, 10))) as Laya.Sprite3D;
        (plane as Laya.MeshSprite3D).meshRenderer.material = _mat;
        // 设置包名后缀
        fgui.UIConfig.packageFileExtension = "bin";
        Laya.stage.addChild(fgui.GRoot.inst.displayObject);
        fgui.GRoot.inst.width = Laya.stage.width;
        fgui.GRoot.inst.height = Laya.stage.height;
        //
        fairygui.UIObjectFactory.setPackageItemExtension(FGUI_splash.URL, FGUI_splash);
        //加载初始化UI包
        Laya.loader.load([
            { url: 'res/FGUI/InitLoad.bin', type: Laya.Loader.BUFFER },
            { url: 'res/FGUI/InitLoad_atlas0.png', type: Laya.Loader.IMAGE },
        ], Laya.Handler.create(this, this.InitUI));
    }

    //ui加载完成
    private InitUI() {
        //
        fgui.UIPackage.addPackage('res/FGUI/InitLoad');
        //
        console.log(fgui.GRoot.inst);
        //显示UI
        let _ui: fgui.GObject = FGUI_splash.createInstance();
        fgui.GRoot.inst.addChild(_ui);
        _ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        //
        this.asyncTest();
        //设置sader
    }

    //
    private async asyncTest() {
        console.log('异步开始');
        await this._asyncTest();
        console.log('异步结束');
    }

    //
    private _asyncTest(): Promise<void> {
        return new Promise<void>((_r) => {
            Laya.timer.once(1000, this, () => {
                console.log('异步函数执行中');
                _r();
            });
        });
    }
}