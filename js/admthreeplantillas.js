gsap.registerPlugin(ScrollTrigger)

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cont_inicio",
        pin: true,
        star: "top top",
        end: "100% 100%",
        scrub: 9,
        // markers: {
        //     startColor: "black",
        //     endColor: "blue",
        //     fontSize: "18px",
        //     fontWeight: "bold",
        //     indent: 20
        // }
    },
})


const figurauxui = document.querySelector("div.columdos")

const sceneuxui = new THREE.Scene();
const camerauxui = new THREE.PerspectiveCamera(70, figurauxui.clientWidth / figurauxui.clientHeight, 1, 0);

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
    wireframe:true,
    roughness: 0.5,
    transmission: 0.8,
    thickness: 1,

});




const vidriouxui = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxui.receiveShadow = true;
vidriouxui.castShadow = true;
sceneuxui.add(vidriouxui);

vidriouxui.position.x = -2;
vidriouxui.position.z = 1;
camerauxui.position.z = 10;

// ############### 2. vidrio#############

const vidriouxuidos = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidos.receiveShadow = true;
vidriouxuidos.castShadow = true;
sceneuxui.add(vidriouxuidos);

vidriouxuidos.position.x = -1.7;
vidriouxuidos.position.z = 0;

// ############### 3. vidrio#############

const vidriouxuitres = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuitres.receiveShadow = true;
vidriouxuitres.castShadow = true;
sceneuxui.add(vidriouxuitres);

vidriouxuitres.position.x = -1.1;
vidriouxuitres.position.z = 1;


// ############### 4. vidrio#############

const vidriouxuicuatro = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuicuatro.receiveShadow = true;
vidriouxuicuatro.castShadow = true;
sceneuxui.add(vidriouxuicuatro);

vidriouxuicuatro.position.x = -0.7;
vidriouxuicuatro.position.z = 0;

// ############### 5. vidrio#############

const vidriouxuicinco = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuicinco.receiveShadow = true;
vidriouxuicinco.castShadow = true;
sceneuxui.add(vidriouxuicinco);

vidriouxuicinco.position.x = -0.2;
vidriouxuicinco.position.z = 1;

// ############### 6. vidrio#############

const vidriouxuiseis = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuiseis.receiveShadow = true;
vidriouxuiseis.castShadow = true;
sceneuxui.add(vidriouxuiseis);

vidriouxuiseis.position.x = 0.2;
vidriouxuiseis.position.z = 0;

// ############### 7. vidrio#############

const vidriouxuiciete = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuiciete.receiveShadow = true;
vidriouxuiciete.castShadow = true;
sceneuxui.add(vidriouxuiciete);

vidriouxuiciete.position.x = 0.7;
vidriouxuiciete.position.z = 0;

// ############### 8. vidrio#############

const vidriouxuiocho = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuiocho.receiveShadow = true;
vidriouxuiocho.castShadow = true;
sceneuxui.add(vidriouxuiocho);

vidriouxuiocho.position.x = 1.2;
vidriouxuiocho.position.z = 0;

// ############### 9. vidrio#############

const vidriouxuinueve = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuinueve.receiveShadow = true;
vidriouxuinueve.castShadow = true;
sceneuxui.add(vidriouxuinueve);

vidriouxuinueve.position.x = 3;
vidriouxuinueve.position.z = 0;

// ############### 10. vidrio#############

const vidriouxuidies = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidies.receiveShadow = true;
vidriouxuidies.castShadow = true;
sceneuxui.add(vidriouxuidies);

vidriouxuidies.position.x = 3.4;
vidriouxuidies.position.z = 0;


// ############### 11. vidrio#############

const vidriouxuionce = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuionce.receiveShadow = true;
vidriouxuionce.castShadow = true;
sceneuxui.add(vidriouxuionce);

vidriouxuionce.position.x = 3.8;
vidriouxuionce.position.z = 0;



// ############### 12. vidrio#############

const vidriouxuidoce = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidoce.receiveShadow = true;
vidriouxuidoce.castShadow = true;
sceneuxui.add(vidriouxuidoce);

vidriouxuidoce.position.x = 4.2;
vidriouxuidoce.position.z = 0;



// ############### 13. vidrio#############

const vidriouxuitrece = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuitrece.receiveShadow = true;
vidriouxuitrece.castShadow = true;
sceneuxui.add(vidriouxuitrece);

vidriouxuitrece.position.x = 5.6;
vidriouxuitrece.position.z = 0;



// ############### 14. vidrio#############

const vidriouxuicatorce = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuicatorce.receiveShadow = true;
vidriouxuicatorce.castShadow = true;
sceneuxui.add(vidriouxuicatorce);

vidriouxuicatorce.position.x = 6;
vidriouxuicatorce.position.z = 0;

// ############### 15. vidrio#############

const vidriouxuiquince = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuiquince.receiveShadow = true;
vidriouxuiquince.castShadow = true;
sceneuxui.add(vidriouxuiquince);

vidriouxuiquince.position.x = 6.4;
vidriouxuiquince.position.z = 0;


// ############### 16. vidrio#############

const vidriouxuidiesiseis = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidiesiseis.receiveShadow = true;
vidriouxuidiesiseis.castShadow = true;
sceneuxui.add(vidriouxuidiesiseis);

vidriouxuidiesiseis.position.x = 6.7;
vidriouxuidiesiseis.position.z = 0;

// ############### 17. vidrio#############

const vidriouxuidiesisiete = new THREE.Mesh(geometryuxui, materialuxui);
vidriouxuidiesisiete.receiveShadow = true;
vidriouxuidiesisiete.castShadow = true;
sceneuxui.add(vidriouxuidiesisiete);

vidriouxuidiesisiete.position.x = 7;
vidriouxuidiesisiete.position.z = 0;


// ############### 18. vidrio#############

const vidriouxuidiesiocho = new THREE.Mesh(geometryuxui, materialuxuidos);
vidriouxuidiesiocho.receiveShadow = true;
vidriouxuidiesiocho.castShadow = true;
sceneuxui.add(vidriouxuidiesiocho);

vidriouxuidiesiocho.position.x = 7.3;
vidriouxuidiesiocho.position.z = 0;



// ###############figurauno#############

const geometrydos = new THREE.SphereGeometry(3, 100, 20);
const materialdos = new THREE.MeshNormalMaterial({
    wireframe:false,
    color: 0xfffb08
});

const figurados = new THREE.Mesh(geometrydos, materialdos);
figurados.receiveShadow = true;
sceneuxui.add(figurados);

figurados.position.x = -5;
figurados.position.z = -4;


// ###############figuratres#############

const geometrytres = new THREE.DodecahedronGeometry(3, 0);


const figuratres = new THREE.Mesh(geometrytres, materialdos);
figuratres.receiveShadow = true;
sceneuxui.add(figuratres);

figuratres.position.x = -15;
figuratres.position.z = -4;


// ###############figuracuatro#############

const geometrycuatro = new THREE.IcosahedronGeometry(3);


const figuracuatro = new THREE.Mesh(geometrycuatro, materialdos);
figuracuatro.receiveShadow = true;
sceneuxui.add(figuracuatro);

figuracuatro.position.x = 15;
figuracuatro.position.z = 2;


const clock = new THREE.Clock()
let v = new THREE.Vector3();
let pos = vidriouxui.geometry.attributes.position;


const t = clock.getElapsedTime()
for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const wavex1 = 0.05 * Math.sin(20 * v.x + t * 1)
    const wavex2 = 0.05 * Math.sin(20 * v.x + t * 1)
    pos.setZ(i, wavex1 + wavex2)
}
pos.needsUpdate = true;



function animate() {


    figurados.rotation.x += -0.005;
    figurados.rotation.y += 0.005;
    figuratres.rotation.x += -0.01;
    figuratres.rotation.y += 0.01;

    figuracuatro.rotation.x += -0.01;
    figuracuatro.rotation.y += 0.01;
    //figurados.position.x += 0.03;



    requestAnimationFrame(animate);
    rendereruxui.render(sceneuxui, camerauxui);
}
animate();

tl.to(
    figurados.position,{
        x:10,
        duration: 5,

    },
)

tl.to(
    figuratres.position, {
        x:-10,
        duration: 1,

    },
)

tl.to(
    figuracuatro.position, {
        x:0,
        duration: 5,

    },
)