import { useState } from 'react'
import { useControls, button } from 'leva'
import { INITIAL_SCENE_VALUES } from './constants'

export function useLevaSceneControls() {
  const [sceneState, setSceneState] = useState(INITIAL_SCENE_VALUES)

  const [_, setLeva] = useControls(() => ({
    showSphere: {
      value: INITIAL_SCENE_VALUES.showSphere,
      label: 'Show Sphere',
      onChange: (v) => setSceneState((s) => ({ ...s, showSphere: v })),
    },
    showCube: {
      value: INITIAL_SCENE_VALUES.showCube,
      label: 'Show Cube',
      onChange: (v) => setSceneState((s) => ({ ...s, showCube: v })),
    },
    showMesh: {
      value: INITIAL_SCENE_VALUES.showMesh,
      label: 'Show Mesh',
      onChange: (v) => setSceneState((s) => ({ ...s, showMesh: v })),
    },
    sphereColor: {
      value: INITIAL_SCENE_VALUES.sphereColor,
      label: 'Sphere Color',
      onChange: (v) => setSceneState((s) => ({ ...s, sphereColor: v })),
    },
    sphereSpeed: {
      value: INITIAL_SCENE_VALUES.sphereSpeed,
      min: 0,
      max: 10,
      step: 0.1,
      label: 'Bounce Speed',
      onChange: (v) => setSceneState((s) => ({ ...s, sphereSpeed: v })),
    },
    resetAll: button(() => {
      setSceneState(INITIAL_SCENE_VALUES)
      setLeva(INITIAL_SCENE_VALUES)
    }),
  }))

  return sceneState
}
