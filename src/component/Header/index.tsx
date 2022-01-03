interface IHeaderProps {
  className?: string
}

const Header = ({ className }: IHeaderProps) => {
  return (
    <div className={className}>
      <h1 className="h-14 ml-4 leading-14">UD</h1>
      <button className="subtitle1 w-56 h-8 mr-4 bg-tertiary rounded-2xl">Connect Wallet</button>
    </div>
  )
}

export default Header
