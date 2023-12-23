

const figurauxui = document.querySelector("div.columdos")

const sceneuxui = new THREE.Scene();
const camerauxui = new THREE.PerspectiveCamera(60, figurauxui.clientWidth / figurauxui.clientHeight, 1, 0);

const rendereruxui = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
rendereruxui.setSize(figurauxui.clientWidth, figurauxui.clientHeight);
rendereruxui.shadowMap = false
figurauxui.appendChild(rendereruxui.domElement);


// ###############ventana#############

const geometryuxui = new THREE.PlaneGeometry(0.5, 10, 100, 100);
const materialuxui = new THREE.MeshPhysicalMaterial({
    wireframe:false,
    roughness: 0.6,
    transmission: 0.9,
    thickness: 2,
});
const materialuxuidos = new THREE.MeshPhysicalMaterial({
    wireframe:false,
    roughness: 0.5,
    transmission: 0.8,
    thickness: 1,

});

const vidriouxui = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxui.receiveShadow = true;
vidriouxui.castShadow = true;
sceneuxui.add(vidriouxui);

vidriouxui.position.x = 0.6;
vidriouxui.position.z = 1;
camerauxui.position.z = 10;

// ############### 2. vidrio#############

const vidriouxuidos = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidos.receiveShadow = true;
vidriouxuidos.castShadow = true;
sceneuxui.add(vidriouxuidos);

vidriouxuidos.position.x = 1.1;
vidriouxuidos.position.z = 0;

// ############### 3. vidrio#############

const vidriouxuitres = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuitres.receiveShadow = true;
vidriouxuitres.castShadow = true;
sceneuxui.add(vidriouxuitres);

vidriouxuitres.position.x = 1.4;
vidriouxuitres.position.z = 1;


// ############### 4. vidrio#############

const vidriouxuicuatro = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuicuatro.receiveShadow = true;
vidriouxuicuatro.castShadow = true;
sceneuxui.add(vidriouxuicuatro);

vidriouxuicuatro.position.x = 2;
vidriouxuicuatro.position.z = 0;

// ############### 5. vidrio#############

const vidriouxuicinco = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuicinco.receiveShadow = true;
vidriouxuicinco.castShadow = true;
sceneuxui.add(vidriouxuicinco);

vidriouxuicinco.position.x = 2.2;
vidriouxuicinco.position.z = 1;

// ############### 6. vidrio#############

const vidriouxuiseis = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuiseis.receiveShadow = true;
vidriouxuiseis.castShadow = true;
sceneuxui.add(vidriouxuiseis);

vidriouxuiseis.position.x = 2.9;
vidriouxuiseis.position.z = 0;

// ############### 7. vidrio#############

const vidriouxuiciete = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuiciete.receiveShadow = true;
vidriouxuiciete.castShadow = true;
sceneuxui.add(vidriouxuiciete);

vidriouxuiciete.position.x = 3.3;
vidriouxuiciete.position.z = 0;

// ############### 8. vidrio#############

const vidriouxuiocho = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuiocho.receiveShadow = true;
vidriouxuiocho.castShadow = true;
sceneuxui.add(vidriouxuiocho);

vidriouxuiocho.position.x = 3.7;
vidriouxuiocho.position.z = 0;

// ############### 9. vidrio#############

const vidriouxuinueve = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuinueve.receiveShadow = true;
vidriouxuinueve.castShadow = true;
sceneuxui.add(vidriouxuinueve);

vidriouxuinueve.position.x = 4.1;
vidriouxuinueve.position.z = 0;

// ############### 10. vidrio#############

const vidriouxuidies = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidies.receiveShadow = true;
vidriouxuidies.castShadow = true;
sceneuxui.add(vidriouxuidies);

vidriouxuidies.position.x = 4.5;
vidriouxuidies.position.z = 0;


// ############### 11. vidrio#############

const vidriouxuionce = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuionce.receiveShadow = true;
vidriouxuionce.castShadow = true;
sceneuxui.add(vidriouxuionce);

vidriouxuionce.position.x = 4.9;
vidriouxuionce.position.z = 0;



// ############### 12. vidrio#############

const vidriouxuidoce = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidoce.receiveShadow = true;
vidriouxuidoce.castShadow = true;
sceneuxui.add(vidriouxuidoce);

vidriouxuidoce.position.x = 5.3;
vidriouxuidoce.position.z = 0;



// ############### 13. vidrio#############

const vidriouxuitrece = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuitrece.receiveShadow = true;
vidriouxuitrece.castShadow = true;
sceneuxui.add(vidriouxuitrece);

vidriouxuitrece.position.x = 5.7;
vidriouxuitrece.position.z = 0;



// ############### 14. vidrio#############

const vidriouxuicatorce = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuicatorce.receiveShadow = true;
vidriouxuicatorce.castShadow = true;
sceneuxui.add(vidriouxuicatorce);

vidriouxuicatorce.position.x = 6.1;
vidriouxuicatorce.position.z = 0;

// ############### 15. vidrio#############

const vidriouxuiquince = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuiquince.receiveShadow = true;
vidriouxuiquince.castShadow = true;
sceneuxui.add(vidriouxuiquince);

vidriouxuiquince.position.x = 6.4;
vidriouxuiquince.position.z = 0;








// ###############figurauno#############

const geometrydos = new THREE.SphereGeometry(3, 100, 20);
const materialdos = new THREE.MeshNormalMaterial({
    wireframe:false,
    color: 0xfffb08
});

const figurados = new THREE.Mesh(geometrydos, materialdos);
figurados.receiveShadow = true;
sceneuxui.add(figurados);

figurados.position.x = -13;
figurados.position.z = -4;


// ###############figuratres#############

const geometrytres = new THREE.DodecahedronGeometry(3, 0);


const figuratres = new THREE.Mesh(geometrytres, materialdos);
figuratres.receiveShadow = true;
sceneuxui.add(figuratres);

figuratres.position.x = -13;
figuratres.position.z = -4;


// ###############figuracuatro#############

const geometrycuatro = new THREE.IcosahedronGeometry(3,0);


const figuracuatro = new THREE.Mesh(geometrycuatro, materialdos);
figuracuatro.receiveShadow = true;
sceneuxui.add(figuracuatro);

figuracuatro.position.x = -13;
figuracuatro.position.z = -3;

function animate() {
    figurados.rotation.x += -0.005;
    figurados.rotation.y += 0.005;
    figuratres.rotation.x += -0.01;
    figuratres.rotation.y += 0.01;
    figuracuatro.rotation.x += -0.01;
    figuracuatro.rotation.y += 0.01;

    requestAnimationFrame(animate);
    rendereruxui.render(sceneuxui, camerauxui);
}
animate();

var rebo = gsap.timeline({repeat: -1, repeatDelay:0 });
rebo.to(figurados.position, {
    x:13,
    duration: 8,
    ease: "power1.in",    
});

rebo.to(figuratres.position, {
    x:13,
    duration: 8,
    ease: "power1.in",
});

rebo.to(figuratres.geometry.parameters, {
    details:100,
    duration: 8,
});

rebo.to(figuracuatro.position, {
    x:13,
    duration: 8,
    ease: "power1.in",
});