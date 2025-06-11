import { useFrame } from '@react-three/fiber'
import { Mesh, Object3D } from 'three'

type ObjectData = {
  position: string[]
  vertexCount: number
}
type DynamicData = Record<string, ObjectData>

type SceneRuntimeDataProps = {
  refs: {
    sphere: React.RefObject<Mesh | null>
    cube: React.RefObject<Mesh | null>
    mesh: React.RefObject<Mesh | null>
  }
  onUpdate: (data: DynamicData) => void
}

export const SceneRuntimeData = ({ refs, onUpdate }: SceneRuntimeDataProps) => {
  useFrame(() => {
    const newData: Record<string, ObjectData> = {}

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        let target: Mesh | Object3D = ref.current
        if (target.type === 'Group' && target.children.length > 0) {
          const meshChild = target.children.find((c) => (c as Mesh).isMesh) as
            | Mesh
            | undefined
          target = meshChild || target
        }

        newData[key] = {
          position: target.position.toArray().map((v) => v.toFixed(2)),
          vertexCount:
            (target as Mesh)?.geometry?.attributes?.position?.count || 0,
        }
      }
    })

    onUpdate(newData)
  })

  return null
}
