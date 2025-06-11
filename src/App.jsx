import { KeyboardControlsWrapper } from './components/scene/KeyboardControlsWrapper'
import { SceneContainer } from './components/scene/SceneContainer'
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <KeyboardControlsWrapper>
        <SceneContainer />
      </KeyboardControlsWrapper>
    </div>
  )
}

export default App
