import { useFrame } from '@react-three/fiber'

export function SceneRuntimeData({ refs, onUpdate }) {
  useFrame(() => {
    const newData = {}
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        let target = ref.current
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

  return null
}
