import { useKeyboardControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Vector3, Euler } from 'three'
import { useFrame } from '@react-three/fiber'

export function Player() {
  const vel = useRef(new Vector3())
  const [, getKeys] = useKeyboardControls()
  const rotation = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if ((event.target as HTMLElement)?.closest('[class*="leva"]')) return
      setIsDragging(true)
    }

    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent & { mozMovementX?: number; webkitMovementX?: number },
    ) => {
      if (!isDragging) return
      const deltaX =
        event.movementX || event.mozMovementX || event.webkitMovementX || 0
      const rotationSpeed = 0.002
      rotation.current -= deltaX * rotationSpeed
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDragging])

  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys()
    const speed = 5
    const direction = new Vector3()

    if (forward) direction.z -= 1
    if (backward) direction.z += 1
    if (left) direction.x -= 1
    if (right) direction.x += 1

    direction.applyEuler(new Euler(0, rotation.current, 0))
    direction.normalize()

    vel.current.copy(direction).multiplyScalar(speed * delta)
    state.camera.position.add(vel.current)

    state.camera.rotation.set(0, rotation.current, 0)
  })

  return null
}
