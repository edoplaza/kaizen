import { KeyboardControls } from '@react-three/drei'
import React, { ReactNode, FC } from 'react'

type KeyboardControlsWrapperProps = {
  children: ReactNode
}

export const KeyboardControlsWrapper: FC<KeyboardControlsWrapperProps> = ({
  children,
}) => (
  <KeyboardControls
    map={[
      { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
      { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
      { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
      { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
      { name: 'jump', keys: ['Space'] },
    ]}
  >
    {children}
  </KeyboardControls>
)
