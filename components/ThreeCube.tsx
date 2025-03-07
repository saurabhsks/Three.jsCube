// // import React, { useEffect } from "react";
// // import { GLView } from "expo-gl";
// // import { Renderer } from "expo-three";
// // import * as THREE from "three";

// // const ThreeCube: React.FC = () => {
// //   const onContextCreate = async (gl: any) => {
// //     // 1️⃣ Create a WebGL Renderer
// //     const renderer = new Renderer({ gl });
// //     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

// //     // 2️⃣ Create a Scene
// //     const scene = new THREE.Scene();

// //     // 3️⃣ Create a Camera
// //     const camera = new THREE.PerspectiveCamera(
// //       75,
// //       gl.drawingBufferWidth / gl.drawingBufferHeight,
// //       0.1,
// //       1000
// //     );
// //     camera.position.z = 2;

// //     // 4️⃣ Create a Rotating Cube
// //     const geometry = new THREE.BoxGeometry();
// //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// //     const cube = new THREE.Mesh(geometry, material);
// //     scene.add(cube);

// //     // 5️⃣ Animation Loop
// //     const animate = () => {
// //       requestAnimationFrame(animate);
// //       cube.rotation.x += 0.02;
// //       cube.rotation.y += 0.02;
// //       renderer.render(scene, camera);
// //       gl.endFrameEXP();
// //     };

// //     animate();
// //   };

// //   return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
// // };

// // export default ThreeCube;




// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const Cube: React.FC = () => {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.02;
//       meshRef.current.rotation.y += 0.02;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="green" />
//     </mesh>
//   );
// };

// const ThreeCube: React.FC = () => {
//   return (
//     <Canvas style={{ width: "100%", height: "100%" }}>
//       <Cube />
//     </Canvas>
//   );
// };

// export default ThreeCube;



// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// const Cube: React.FC = () => {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.02;
//       meshRef.current.rotation.y += 0.02;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="green" />
//     </mesh>
//   );
// };

// const ThreeCube: React.FC = () => {
//   return (
//     <Canvas style={{ width: "100%", height: "100%" }}>
//       <Cube />
//     </Canvas>
//   );
// };

// export default ThreeCube;


import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cube: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const ThreeCube: React.FC = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* Lights are necessary for meshStandardMaterial */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Cube />
    </Canvas>
  );
};

export default ThreeCube;

