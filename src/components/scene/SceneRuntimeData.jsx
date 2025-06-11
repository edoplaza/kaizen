// components/SceneRuntimeData.jsx
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'

export function SceneRuntimeData({ refs, onUpdate }) {
  useFrame(() => {
    const newData = {}
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        let target = ref.current
        // If it's a group (like GLTF scenes), grab the first mesh child
        if (target.isGroup && target.children.length > 0) {
          target = target.children.find((c) => c.isMesh) || target
        }
        newData[key] = {
          position: target.position.toArray().map((v) => v.toFixed(2)),
          vertexCount: target.geometry?.attributes?.position?.count || 0,
        }
      }
    })

    onUpdate(newData)
  })

  // This component renders nothing, it’s only for the R3F hooks
  return null
}
