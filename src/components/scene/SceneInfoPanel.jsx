export function SceneInfoPanel({ dynamicData }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '1em',
        borderRadius: '0.5em',
        fontSize: '0.85em',
        zIndex: 1000,
        minWidth: 300,
      }}
    >
      <h3>Runtime Object Info</h3>
      {Object.entries(dynamicData).map(([key, data]) => (
        <div key={key} style={{ marginBottom: '0.5em' }}>
          <strong>{key.toUpperCase()}</strong>
          <div>Position: {data.position.join(', ')}</div>
          <div>Vertices: {data.vertexCount}</div>
        </div>
      ))}
    </div>
  )
}
