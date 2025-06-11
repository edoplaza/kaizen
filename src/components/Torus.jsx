export function Torus() {
  return (
    <mesh position={[2, 0.5, 0]} castShadow>
      <torusGeometry args={[0.5, 0.2, 16, 100]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}
