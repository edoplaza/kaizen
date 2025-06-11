import { ShaderMaterial } from 'three'
import { MaterialNode } from '@react-three/fiber'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      checkerMaterial: MaterialNode<ShaderMaterial, typeof ShaderMaterial>
    }
  }
}
