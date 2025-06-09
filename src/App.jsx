import { Canvas } from '@react-three/fiber'
import { Ground } from './components/Ground'
import { Cube } from './components/Cube'
import { Player } from './components/Player'
import { KeyboardControls, Sky } from '@react-three/drei'

import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }}>
          <Sky sunPosition={[100, 100, 100]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Ground />
          <Cube />
          <Player />
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default App
