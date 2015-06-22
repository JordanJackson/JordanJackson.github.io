//--- GLOBAL VARIABLES ---//

// scene object variables
var renderer, scene, camera;
var cubeObj;

function setup() {
	createScene();
	draw();
}

function createScene() {
	// set scene dimensions
	var WIDTH = 800;
	var HEIGHT = 640;

	// set camera attributes
	var VIEW_ANGLE = 50;
	var ASPECT = WIDTH / HEIGHT;
	var NEAR = 0.1;
	var FAR = 1000;

	var c = document.getElementById("main-canvas");

	// create WebGL renderer, camera and scene
	renderer = new THREE.WebGLRenderer();
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);

	scene = new THREE.Scene();

	// add camera to the scene
	scene.add(camera);

	// set default position for camera
	camera.position.z = 5;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the renderer-supplied DOM element
	c.appendChild(renderer.domElement);

	var ambientLight = new THREE.AmbientLight(0xEEEEEE);
	scene.add(ambientLight);

	var pointLight = new THREE.PointLight(0xff0000, 0.8, 20);
	pointLight.position.set(10, 10, 10);
	scene.add(pointLight);

	var plane = new THREE.Mesh(
		new THREE.PlaneGeometry(
			3,
			4,
			10,
			10),
		new THREE.MeshLambertMaterial(
			{color: 0xEEDDEE}));
	scene.add(plane);
	plane.receiveShadow = true;
	plane.position.z = -2;

	var cubeGeometry = new THREE.CubeGeometry(1, 1, 1, 10, 10, 1);
	var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
	cubeObj = new THREE.Mesh(cubeGeometry, cubeMaterial);
	scene.add(cubeObj);
	cubeObj.receiveShadow = true;
}

function draw() {
	// draw three.js scene
	renderer.render(scene, camera);

	// loop draw function call
	requestAnimationFrame(draw);

	// handle input
	userInput();
	rotateCube();
}

function userInput() {
	if (Key.isDown(Key.A)) {
		
	}
	else if (Key.isDown(Key.D)) {
		
	}
}

function rotateCube() {
	cubeObj.rotation.x += 0.01;
	cubeObj.rotation.y += 0.01;
}