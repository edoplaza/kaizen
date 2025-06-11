import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import { TextureLoader, MeshStandardMaterial } from 'three'

export function Mesh() {
  const { scene } = useGLTF('/models/vase.glb')

  const diffuseMap = useLoader(TextureLoader, '/textures/vase_diffuse.jpg')
  const roughnessMap = useLoader(TextureLoader, '/textures/vase_roughness.jpg')

  const normalMap = useLoader(EXRLoader, '/textures/vase_normal.exr')
  const metalnessMap = useLoader(EXRLoader, '/textures/vase_metal.exr')

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material = new MeshStandardMaterial({
        map: diffuseMap,
        roughnessMap: roughnessMap,
        metalnessMap: metalnessMap,
        normalMap: normalMap,
        metalness: 1,
        roughness: 0.2,
      })
    }
  })

  return <primitive object={scene} scale={3} position={[0, 0, 2]} />
}
