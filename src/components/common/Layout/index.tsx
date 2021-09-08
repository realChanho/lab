interface IProps {
  children: React.ReactNode
}
function Layout({ children }: IProps) {
  return <div>{children}</div>
}

export default Layout
