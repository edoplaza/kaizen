import { useFrame } from '@react-three/fiber'
import { forwardRef } from 'react'

export const Sphere = forwardRef(function Sphere({ color, speed }, ref) {
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    const y = 0.7 + Math.sin(elapsed * speed) * 0.2
    if (ref?.current) {
      ref.current.position.y = y
    }
  })

  return (
    <mesh ref={ref} position={[-1.8, 0.5, 2]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} metalness={1} roughness={0} />
    </mesh>
  )
})
