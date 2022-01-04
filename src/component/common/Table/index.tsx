import { useState, useMemo, useEffect } from 'react'
import numeral from 'numeral'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'react-feather'
import IRankings from '../../utils/interface/IRankings'

interface IData {
  rankings: {
    avatar: string
    player: string
    score: number
  }[]
  currentPage: number
}

interface IFooterProps {
  pages: number
  currentPage: number
  currentPages: number[]
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const pageList = 9

const TableHead = () => {
  return (
    <thead>
      <tr className="w-full h-14 subtitle3 leading-14">
        <th className="desktop:w-20">Rank</th>
        <th className="text-left">Player</th>
        <th className="text-left">Score</th>
      </tr>
    </thead>
  )
}

const TableData = ({ rankings, currentPage }: IData) => {
  const emptyRow = pageList - rankings.length
  const [emptyRows, setEmptyRows] = useState<Array<any>>([])
  useEffect(() => {
    if (emptyRow > 0) {
      setEmptyRows(Array(emptyRow).fill('t'))
    }
  }, [emptyRow])
  return (
    <tbody>
      {rankings.map((r, i) => {
        return (
          <tr className={i % 2 ? '' : 'bg-secondary'}>
            <td>{i + 4 + (currentPage - 1) * pageList}</td>
            <td className="w-4/5 h-full flex items-center">
              <div className="w-6 h-6 mr-2 rounded-full">
                <img src={r.avatar} alt="avator" />
              </div>
              {r.player}
            </td>
            <td className="text-left">{numeral(r.score).format('0,0')} CAP</td>
          </tr>
        )
      })}
      {emptyRow !== 0 &&
        emptyRows.map((n, i) => {
          return (
            <tr className={(i + rankings.length) % 2 ? '' : 'bg-secondary'}>
              <td></td>
              <td className="w-4/5 h-full flex items-center">
                <div className="w-6 h-6 mr-2 rounded-full"></div>
              </td>
              <td className="text-left"></td>
            </tr>
          )
        })}
    </tbody>
  )
}

const TableFoot = ({ pages, currentPage, currentPages, setCurrentPage }: IFooterProps) => {
  const handleChange = (newPage: number) => {
    setCurrentPage(newPage)
  }
  return (
    <tfoot>
      <tr className="h-14 subtitle3 leading-14">
        <td colSpan={3}>
          <div className="flex w-full tablet:w-2/3 desktop:w-1/2 tablet:mx-auto h-full justify-between items-center">
            <button className="basis-14" onClick={() => currentPage > 1 && handleChange(currentPage - 1)}>
              <ChevronLeft className="mx-auto"></ChevronLeft>
            </button>
            <button className="basis-14" onClick={() => handleChange(1)}>
              <ChevronsLeft className="mx-auto"></ChevronsLeft>
            </button>
            <div className="grow flex justify-around items-center">
              {currentPages.map((p) => {
                return (
                  <button className={p === currentPage ? 'text-sky-600 font-bold' : ''} onClick={() => handleChange(p)}>
                    {p}
                  </button>
                )
              })}
            </div>
            <button className="basis-14" onClick={() => handleChange(pages)}>
              <ChevronsRight className="mx-auto"></ChevronsRight>
            </button>
            <button className="basis-14" onClick={() => currentPage < pages && handleChange(currentPage + 1)}>
              <ChevronRight className="mx-auto"></ChevronRight>
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

const Table = ({ rankings }: IRankings) => {
  const pages = rankings.length % pageList === 0 ? rankings.length / pageList : Math.ceil(rankings.length / pageList)
  const [currentPage, setCurrentPage] = useState(1)
  const pageArr = useMemo(() => {
    let newArr = []

    for (let i = 0; i < pages; i++) {
      newArr.push(i + 1)
    }

    return newArr
  }, [pages])

  const currentRankings = useMemo(() => {
    if (currentPage !== pages) return rankings.slice((currentPage - 1) * pageList, currentPage * pageList)
    else return rankings.slice((currentPage - 1) * pageList, rankings.length)
  }, [currentPage, rankings])

  const currentPages = useMemo(() => {
    const pageArrlen = pageArr.length < 3 ? pageArr.length : 3
    if (currentPage === 1) return pageArr.slice(0, pageArrlen)
    else if (currentPage === pages) return pageArr.slice(currentPage - pageArrlen, currentPage)
    else return pageArr.slice(currentPage - pageArrlen + 1, currentPage + 1)
  }, [pageArr, currentPage, rankings])

  return (
    <table className="w-full h-144 rounded-2xl bg-tertiary border-4 border-solid border-[#2C217F99]">
      <TableHead />
      <TableData rankings={currentRankings} currentPage={currentPage} />
      <TableFoot pages={pages} currentPage={currentPage} currentPages={currentPages} setCurrentPage={setCurrentPage} />
    </table>
  )
}

export default Table
