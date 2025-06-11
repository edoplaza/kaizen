import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

export function useSceneObjectData(meshRefs) {
  const [data, setData] = useState({})

  useFrame(() => {
    const newData = {}
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
