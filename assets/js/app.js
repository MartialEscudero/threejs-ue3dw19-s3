let scene = new THREE.Scene();

let clock = new THREE.Clock();

let frameTime = 0;

let slide = 0;

let TWO_PI = Math.PI * 2;

let ambientLight, light;

let camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.z= 100;
// 
ambientLight = new THREE.AmbientLight( 0x333333 );
light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
light.position.set( 0.32, 0.39, 0.7 );


let rendu = new THREE.WebGLRenderer();
rendu.setSize(window.innerWidth, window.innerHeight);
rendu.setClearColor(0x000000);
document.body.appendChild(rendu.domElement);


let forme = new THREE.Group();
let geometrie = new THREE.ConeGeometry( 5, 20, 32 );
let material = new THREE.MeshStandardMaterial({
  color: 0xFFF933
});

forme.add(new THREE.Mesh(geometrie, material));

scene.add(forme, light, ambientLight);

let animer = function() {
  requestAnimationFrame(animer);

  forme.rotation.x += 0.009;
  forme.rotation.y += 0.008;
  forme.rotation.z += 0.007;

  frameTime = clock.getDelta();

  slide += 1.5 * frameTime;

  if (slide > TWO_PI)
    slide -= TWO_PI;
    forme.position.z = Math.cos( slide ) * 60;

  rendu.render(scene, camera);
}

animer();

rendu.render(scene, camera);