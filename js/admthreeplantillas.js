const figurauxui = document.querySelector("div.columdos")

const sceneuxui = new THREE.Scene();
const camerauxui = new THREE.PerspectiveCamera(75, figurauxui.clientWidth / figurauxui.clientHeight, 0.1, 1000);

const rendereruxui = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
rendereruxui.setSize(figurauxui.clientWidth, figurauxui.clientHeight);
rendereruxui.shadowMap = false
figurauxui.appendChild(rendereruxui.domElement);


// ###############ventana#############

const geometryuxui = new THREE.PlaneGeometry(10, 5, 100, 100);
const materialuxui = new THREE.MeshPhysicalMaterial({
    // wireframe:true,
    roughness: 0.3,
    transmission: 0.7,
    thickness: 2,
    color: 0xffffff
});




const vidriouxui = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxui.receiveShadow = true;
vidriouxui.castShadow = true;
sceneuxui.add(vidriouxui);

vidriouxui.position.x = 3;
vidriouxui.position.z = 1;
camerauxui.position.z = 5;

const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = vidriouxui.geometry.attributes.position;
let linetime = figurauxui.clientWidth;



// ###############figura#############

const geometrydos = new THREE.DodecahedronGeometry(1, 0);
const materialdos = new THREE.MeshBasicMaterial({
    color: 0x000000
});

const figurados = new THREE.Mesh(geometrydos, materialdos);
figurados.receiveShadow = true;
sceneuxui.add(figurados);

figurados.position.x = -3;
figurados.position.z = -1;


const t = clock.getElapsedTime()
for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const wavex1 = 0.05 * Math.sin(20 * v.x + t * 1)
    const wavex2 = 0.05 * Math.sin(20 * v.x + t * 1)
    pos.setZ(i, wavex1 + wavex2)
}
pos.needsUpdate = true;




function animate() {



    figurados.rotation.x += 0.01;
    figurados.rotation.y += 0.01;






    requestAnimationFrame(animate);
    rendereruxui.render(sceneuxui, camerauxui);
}
animate();