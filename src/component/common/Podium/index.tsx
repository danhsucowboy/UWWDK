import Badge from '../Badge'
import IRankings from '../../utils/interface/IRankings'
interface IPodium {
  scores: number[]
  ranks: number[]
}

const Podium = ({ rankings }: IRankings) => {
  const positions = ['self-end', '', 'self-end']
  const ranks = [rankings[1], rankings[0], rankings[2]]
  return (
    <div className="w-full h-56 flex justify-between px-7 mt-6">
      {ranks.map((r, i) => {
        return <Badge avatar={r.avatar} score={r.score} rank={i} position={positions[i]} />
      })}
    </div>
  )
}

export default Podium
