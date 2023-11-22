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


const textureuno = new THREE.TextureLoader().load('../assets/img/bandera.png');
const geometryuno = new THREE.PlaneGeometry(8, 4, 50, 50);
const materialuno = new THREE.MeshBasicMaterial({
    map: textureuno
});



//bandera

const bandera = new THREE.Mesh(geometryuno, materialuno);
bandera.receiveShadow = true;
sceneuno.add(bandera);




bandera.rotation.set(-0.2, -0.2, 0.0)
bandera.position.set(1, 0, -1)

camerauno.position.z = 3;

const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = bandera.geometry.attributes.position;


window.addEventListener("resize", function () {
    camerauno.aspect = contuno.clientWidth / contuno.clientHeight
    camerauno.updateProjectionMatrix()
    rendereruno.setSize(contuno.clientWidth, contuno.clientHeight)
})




//###########################figura dos ###########################
const contdos = document.querySelector("div.cont_figure_geometric_uno")
const scenedos = new THREE.Scene();
const camerados = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const rendererdos = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
rendererdos.setSize(window.innerWidth, window.innerHeight);
rendererdos.shadowMap = true
contdos.appendChild(rendererdos.domElement);

const geometrydos = new THREE.DodecahedronGeometry(0.5, 0);
const materialdos = new THREE.MeshPhysicalMaterial({
    roughness: 0.2,
    transmission: 1,
    thickness: 1,
});

const light = new THREE.DirectionalLight(0xfff0dd, 1);
light.position.set(0, 5, 10);
sceneuno.add(light);

const figurados = new THREE.Mesh(geometrydos, materialdos);
figurados.receiveShadow = true;
sceneuno.add(figurados);

figurados.position.x = 2.8;
figurados.position.set = (0, 0, 2);
camerados.position.z = 5;




//###########################figura tres ###########################
const contdtres = document.querySelector("div.cont_figure_geometric_uno")
const scenetres = new THREE.Scene();
const cameratres = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderertres = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderertres.setSize(window.innerWidth, window.innerHeight);
renderertres.shadowMap = true
contdos.appendChild(renderertres.domElement);

const geometrytres = new THREE.OctahedronGeometry(0.2, 0);
const materialtres = new THREE.MeshPhysicalMaterial({
    roughness: 0.2,
    transmission: 1,
    thickness: 1,
});

const lighttres = new THREE.DirectionalLight(0xfff0dd, 1);
lighttres.position.set(0, 5, 10);
sceneuno.add(lighttres);

const figuratres = new THREE.Mesh(geometrytres, materialtres);
figurados.receiveShadow = true;
sceneuno.add(figuratres);

figuratres.position.x = 2.5;
figuratres.position.y = 0.5;
figuratres.position.set = (0, 0, 1);
cameratres.position.z = 5;

//########################### figura cuatro ###########################
const contdcuatro = document.querySelector("div.cont_figure_geometric_uno")
const scenecuatro = new THREE.Scene();
const cameratres = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderercuatro = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderertres.setSize(window.innerWidth, window.innerHeight);
renderertres.shadowMap = true
contdos.appendChild(renderertres.domElement);

const geometrycuatro = new THREE.OctahedronGeometry(0.2, 0);
const materialcuatro = new THREE.MeshPhysicalMaterial({
    roughness: 0.2,
    transmission: 1,
    thickness: 1,
});

const lightcuatro = new THREE.DirectionalLight(0xfff0dd, 1);
lightcuatro.position.set(0, 5, 10);
sceneuno.add(lightcuatro);

const figuratres = new THREE.Mesh(geometrytres, materialtres);
figurados.receiveShadow = true;
sceneuno.add(figuratres);

figuratres.position.x = -1;
figuratres.position.y = 0.5;
figuratres.position.set = (0, 0, 1);
cameratres.position.z = 5;











window.addEventListener("resize", function () {
    camerados.aspect = contdos.clientWidth / contdos.clientHeight
    camerados.updateProjectionMatrix()
    rendererdos.setSize(contdos.clientWidth, contdos.clientHeight)
})



function animate() {
    const t = clock.getElapsedTime()

    for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const wavex1 = 0.1 * Math.sin(0.5 * v.x + t * 1)
        const wavex2 = 0.1 * Math.sin(2 * v.x + t * 1)
        const wavex3 = 0.1 * Math.sin(4 * v.y + t * 1)

        pos.setZ(i, wavex1 + wavex2 + wavex3)

    }
    pos.needsUpdate = true;

    (figurados, figuratres).rotation.x += 0.01;
    figurados.rotation.y += 0.01;

    requestAnimationFrame(animate);
    rendereruno.render(sceneuno, camerauno);
    rendererdos.render(scenedos, camerados);
    renderertres.render(scenetres, cameratres);
}
animate();