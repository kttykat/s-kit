type Props = {
  children: JSX.Element | JSX.Element[]
  row?: boolean
  spacing?: boolean
}
const DivLayout = ({ children, row, spacing }: Props) => {
  return <div style={{ display: "flex", flexDirection: row ? "row" : "column", marginBottom: spacing ? "0rem" : "1.5rem", gap: ".5rem"}}>
    {children}
  </div>
}

export default DivLayout;