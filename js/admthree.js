const contuno = document.querySelector("section.bandera")
const sceneuno = new THREE.Scene();
const camerauno = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const rendereruno = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
rendereruno.setSize(window.innerWidth, window.innerHeight);
rendereruno.shadowMap = true
contuno.appendChild(rendereruno.domElement);


const textureuno = new THREE.TextureLoader().load('../assets/img/bandera.svg');
const geometryuno = new THREE.PlaneGeometry(15, 5, 100, 100);
const materialuno = new THREE.MeshBasicMaterial({
    map: textureuno
});


//bandera

const bandera = new THREE.Mesh(geometryuno, materialuno);
bandera.receiveShadow = true;
bandera.castShadow = true;
sceneuno.add(bandera);




bandera.rotation.set(-0.0, -0.0, 0.0)
bandera.position.set(0, 0, -0.5)

camerauno.position.z = 3.2;

const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = bandera.geometry.attributes.position;


window.addEventListener("resize", function () {
    camerauno.aspect = contuno.clientWidth / contuno.clientHeight
    camerauno.updateProjectionMatrix()
    rendereruno.setSize(contuno.clientWidth, contuno.clientHeight)
})











window.addEventListener("resize", function () {
    camerados.aspect = contdos.clientWidth / contdos.clientHeight
    camerados.updateProjectionMatrix()
    rendererdos.setSize(contdos.clientWidth, contdos.clientHeight)
})



function animate() {
    const t = clock.getElapsedTime()

    for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const wavex1 = 0.2 * Math.sin(1 * v.x + t * 1)
        const wavex2 = 0.1 * Math.sin(5* v.x + t * 1)
        const wavex3 = 0.1 * Math.sin(10 * v.y + t * 1)
        const wavex4 = 0.1 * Math.sin(4 * v.z + t * 1)

        pos.setZ(i, wavex1 + wavex2 + wavex3 + wavex4)

    }
    pos.needsUpdate = true;

    

    requestAnimationFrame(animate);
    rendereruno.render(sceneuno, camerauno);
}
animate();

