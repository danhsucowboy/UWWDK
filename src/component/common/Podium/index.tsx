import Badge from '../Badge'
interface IPodium {
  scores: number[]
  ranks: number[]
}

const Podium = ({ scores, ranks }: IPodium) => {
  const positions = ['self-end', '', 'self-end']
  return (
    <div className="w-full h-56 flex justify-between px-7 mt-6">
      {ranks.map((r, i) => {
        return <Badge score={scores[i]} rank={r} position={positions[i]} />
      })}
    </div>
  )
}

export default Podium
