import { useState } from 'react'
import { useControls, button } from 'leva'
import { INITIAL_SCENE_VALUES } from './constants'

// Define the scene state type based on INITIAL_SCENE_VALUES
type SceneState = typeof INITIAL_SCENE_VALUES

export function useLevaSceneControls(): SceneState {
  const [sceneState, setSceneState] = useState<SceneState>(INITIAL_SCENE_VALUES)

  const [_, setLeva] = useControls(() => ({
    showSphere: {
      value: INITIAL_SCENE_VALUES.showSphere,
      label: 'Show Sphere',
      onChange: (v: boolean) => setSceneState((s) => ({ ...s, showSphere: v })),
    },
    showCube: {
      value: INITIAL_SCENE_VALUES.showCube,
      label: 'Show Cube',
      onChange: (v: boolean) => setSceneState((s) => ({ ...s, showCube: v })),
    },
    showMesh: {
      value: INITIAL_SCENE_VALUES.showMesh,
      label: 'Show Mesh',
      onChange: (v: boolean) => setSceneState((s) => ({ ...s, showMesh: v })),
    },
    sphereColor: {
      value: INITIAL_SCENE_VALUES.sphereColor,
      label: 'Sphere Color',
      onChange: (v: string) => setSceneState((s) => ({ ...s, sphereColor: v })),
    },
    sphereSpeed: {
      value: INITIAL_SCENE_VALUES.sphereSpeed,
      min: 0,
      max: 10,
      step: 0.1,
      label: 'Bounce Speed',
      onChange: (v: number) => setSceneState((s) => ({ ...s, sphereSpeed: v })),
    },
    resetAll: button(() => {
      setSceneState(INITIAL_SCENE_VALUES)
      setLeva(INITIAL_SCENE_VALUES)
    }),
  }))

  return sceneState
}
