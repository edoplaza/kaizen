import { KeyboardControlsWrapper } from './components/scene/KeyboardControlsWrapper'
import { SceneContainer } from './components/scene/SceneContainer'
import { Loader as DreiLoader } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <KeyboardControlsWrapper>
        <SceneContainer />
      </KeyboardControlsWrapper>
      <DreiLoader />
    </div>
  )
}

export default App
