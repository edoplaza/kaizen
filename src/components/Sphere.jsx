export function Sphere() {
  return (
    <mesh position={[-2, 0.5, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}
