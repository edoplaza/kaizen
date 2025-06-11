import { useState, forwardRef } from 'react'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

const CheckerMaterial = shaderMaterial(
  {
    color1: new THREE.Color('white'),
    color2: new THREE.Color('black'),
    scale: 10,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float scale;
    varying vec2 vUv;

    void main() {
      vec2 scaledUv = vUv * scale;
      float checker = mod(floor(scaledUv.x) + floor(scaledUv.y), 2.0);
      vec3 color = mix(color1, color2, checker);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
)

CheckerMaterial.key = 'checkerMaterial'

extend({ CheckerMaterial })

export const Cube = forwardRef(function Cube(_, ref) {
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      ref={ref}
      position={[2, 0.5, 1.5]}
      castShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <checkerMaterial
        attach="material"
        color1={hovered ? 'hotpink' : 'white'}
        color2={hovered ? 'blue' : 'orange'}
        scale={10}
      />
    </mesh>
  )
})
