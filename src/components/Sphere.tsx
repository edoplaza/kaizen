import { useState, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type SphereProps = {
  color: string
  speed: number
}

export const Sphere = forwardRef<Mesh, SphereProps>(function Sphere(
  { color, speed },
  ref
) {
  const [clicked, setClicked] = useState(false)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    const y = 0.7 + Math.sin(elapsed * speed) * 0.2
    if (ref && 'current' in ref && ref.current) {
      ref.current.position.y = y
    }
  })

  return (
    <mesh
      ref={ref}
      position={[-1.8, 0.5, 2]}
      castShadow
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={clicked ? 'hotpink' : color}
        metalness={1}
        roughness={0}
      />
    </mesh>
  )
})
