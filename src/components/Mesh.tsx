import { forwardRef, useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import {
  TextureLoader,
  MeshStandardMaterial,
  Object3D,
  Mesh as ThreeMesh,
} from 'three'

// ForwardRef type annotation
export const MeshModel = forwardRef<Object3D>(function MeshModel(_, ref) {
  const { scene } = useGLTF('/models/vase.glb')

  const diffuseMap = useLoader(TextureLoader, '/textures/vase_diffuse.jpg')
  const roughnessMap = useLoader(TextureLoader, '/textures/vase_roughness.jpg')
  const normalMap = useLoader(EXRLoader, '/textures/vase_normal.exr')
  const metalnessMap = useLoader(EXRLoader, '/textures/vase_metal.exr')

  useEffect(() => {
    scene.traverse((child: Object3D) => {
      if (child instanceof ThreeMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material = new MeshStandardMaterial({
          map: diffuseMap,
          roughnessMap,
          metalnessMap,
          normalMap,
          metalness: 1,
          roughness: 0.2,
        })
      }
    })
  }, [scene, diffuseMap, roughnessMap, metalnessMap, normalMap])

  return <primitive object={scene} ref={ref} scale={3} position={[0, 0, 2]} />
})
