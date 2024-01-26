
const contuw = document.querySelector("div.columdosuxw")
const ancho= contuw.clientWidth;
const alto= contuw.clientHeight;


const sceneuw = new THREE.Scene();
const camerauw = new THREE.PerspectiveCamera(60, ancho / alto , 1, 0);

const rendereruw = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
rendereruw.setSize(ancho, alto);
rendereruw.shadowMap = true
contuw.appendChild(rendereruw.domElement);


const textureuw = new THREE.TextureLoader().load('../assets/img/banderaw.png');
const geometryuw = new THREE.PlaneGeometry(15, 15, 80, 80);
const materialuw = new THREE.MeshBasicMaterial({
    wireframe:false,
    map: textureuw
});


//bandera

const banderaw = new THREE.Mesh(geometryuw, materialuw);
banderaw.receiveShadow = true;
banderaw.castShadow = true;
sceneuw.add(banderaw);




banderaw.rotation.set(-0.0, -0.0, 0.0)
banderaw.position.set(0, 0, 0)


camerauw.position.z = 15;

const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = banderaw.geometry.attributes.position;

function animate() {
    const t = clock.getElapsedTime()

    for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const wavex1 = 0.4 * Math.sin(1 * v.x + t * 1)
        const wavex2 = 0.1 * Math.sin(1* v.x + t * 0.1)
        const wavex3 = 0.1 * Math.sin(1 * v.y + t * 0.1)
        

        pos.setZ(i, wavex1 + wavex2 + wavex3)

    }
    pos.needsUpdate = true;


    requestAnimationFrame(animate);
    rendereruw.render(sceneuw, camerauw);
}
animate();

window.addEventListener("resize", function () {
    camerauw.aspect = contuw.clientWidth / contuw.clientHeight
    camerauw.updateProjectionMatrix()
    rendereruw.setSize(contuw.clientWidth, contuw.clientHeight)
})









