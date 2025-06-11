import { useFrame } from '@react-three/fiber'
import { useState } from 'react'
import { Mesh } from 'three'

type ObjectData = {
  position: string[]
  vertexCount: number
}

type MeshRefs = Record<string, React.RefObject<Mesh>>

export function useSceneObjectData(
  meshRefs: MeshRefs,
): Record<string, ObjectData> {
  const [data, setData] = useState<Record<string, ObjectData>>({})

  useFrame(() => {
    const newData: Record<string, ObjectData> = {}
    Object.entries(meshRefs).forEach(([key, ref]) => {
      if (ref.current) {
        newData[key] = {
          position: ref.current.position.toArray().map((v) => v.toFixed(2)),
          vertexCount: ref.current.geometry?.attributes?.position?.count || 0,
        }
      }
    })
    setData(newData)
  })

  return data
}
