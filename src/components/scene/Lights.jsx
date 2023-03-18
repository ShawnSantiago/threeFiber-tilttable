export default function lights() {
  return (
    <>
      <directionalLight
        color={"#ffffff"}
        position={[0, 100, 0]}
        intensity={1.5}
        castShadow={false}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />
      <directionalLight
        color={"#ffffff"}
        position={[0, 100, 0]}
        intensity={0.75}
        castShadow={true}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />
      <directionalLight position={[20, 0, 0]} intensity={4} castShadow={true} />
      <directionalLight
        position={[0, 0, 20]}
        intensity={1.75}
        castShadow={true}
      />
    </>
  );
}
