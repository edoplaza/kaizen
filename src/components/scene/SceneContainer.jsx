import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Sky, Environment } from '@react-three/drei'
import { Loader } from '../Loader'
import { Ground } from '../Ground'
import { Cube } from '../Cube'
import { Sphere } from '../Sphere'
import { Mesh } from '../Mesh'
import { Player } from '../Player'
import { Lights } from './Lights'

export function SceneContainer() {
  return (
    <Canvas shadows camera={{ position: [0, 1.6, 6], fov: 75 }}>
      <Suspense fallback={<Loader />}>
        <Sky sunPosition={[100, 100, 100]} />
        <Environment files="/hdri/global.hdr" background />
        <Lights />
        <Ground />
        <Cube />
        <Sphere />
        <Mesh />
        <Player />
      </Suspense>
    </Canvas>
  )
}
