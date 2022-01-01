interface IProps {
  children?: any
}

const ContentWrapper = ({ children }: IProps) => {
  return <div className="w-full h-screen bg-secondary text-center rounded-t-2xl overflow-y-auto">{children ?? ''}</div>
}

export default ContentWrapper
