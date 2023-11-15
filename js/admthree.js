const section = document.querySelector("section.bandera")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
section.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('../assets/img/bandera.png');

const geometry = new THREE.PlaneGeometry(7, 4, 50, 30);
const material = new THREE.MeshBasicMaterial({
    map: texture
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.rotation.set(-0.1, -0.2, 0.2)

camera.position.z = 3;

const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = cube.geometry.attributes.position;

function animate() {
    const t = clock.getElapsedTime()

    for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const wavex1 = 0.1 * Math.sin(0.5 * v.x + t * 1)
        const wavex2 = 0.1 * Math.sin(2 * v.x + t * 1)
        const wavex3 = 0.1 * Math.sin(4 * v.y + t * 1)
        
        pos.setZ(i, wavex1+wavex2+wavex3)

    }
    pos.needsUpdate = true;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
window.addEventListener("resize", function () {
    camera.aspect = section.clientWidth / section.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(section.clientWidth, section.clientHeight)
})