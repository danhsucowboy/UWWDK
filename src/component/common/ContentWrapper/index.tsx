interface IProps {
  children?: any
  height?: string
  overflow?: string
}

const ContentWrapper = ({ children, height = 'h-full', overflow = '' }: IProps) => {
  const wrapper = `w-full ${height} bg-secondary text-center rounded-t-2xl ${overflow}`
  return <div className={wrapper}>{children ?? ''}</div>
}

export default ContentWrapper
