import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function Sphere() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    const y = 0.7 + Math.sin(elapsed * 2) * 0.2
    meshRef.current.position.y = y
  })

  return (
    <mesh ref={meshRef} position={[-1.8, 0.5, 2]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="blue" metalness={1} roughness={0} />
    </mesh>
  )
}
