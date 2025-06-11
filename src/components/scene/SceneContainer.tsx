import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Sky, Environment } from '@react-three/drei'
import { Ground } from '../Ground'
import { Cube } from '../Cube'
import { Sphere } from '../Sphere'
import { MeshModel } from '../Mesh'
import { Player } from '../Player'
import { Lights } from './Lights'
import { useLevaSceneControls } from '../../hooks/useLevaSceneControls'
import { SceneInfoPanel } from './SceneInfoPanel'
import { SceneRuntimeData } from './SceneRuntimeData'
import { Mesh } from 'three'

type ObjectData = {
  position: string[]
  vertexCount: number
}

type DynamicData = Record<string, ObjectData>

export function SceneContainer() {
  const sceneState = useLevaSceneControls()

  const sphereRef = useRef<Mesh | null>(null)
  const cubeRef = useRef<Mesh | null>(null)
  const meshRef = useRef<Mesh | null>(null)

  const [dynamicData, setDynamicData] = useState<DynamicData>({})

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas shadows camera={{ position: [0, 1.6, 6], fov: 75 }}>
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 100, 100]} />
          <Environment files="/hdri/global.hdr" background />
          <Lights />
          <Ground />

          {sceneState.showSphere && (
            <Sphere
              ref={sphereRef}
              color={sceneState.sphereColor}
              speed={sceneState.sphereSpeed}
            />
          )}
          {sceneState.showCube && <Cube ref={cubeRef} />}
          {sceneState.showMesh && <MeshModel ref={meshRef} />}

          <Player />

          <SceneRuntimeData
            refs={{
              sphere: sphereRef,
              cube: cubeRef,
              mesh: meshRef,
            }}
            onUpdate={setDynamicData}
          />
        </Suspense>
      </Canvas>

      <SceneInfoPanel dynamicData={dynamicData} />
    </div>
  )
}
