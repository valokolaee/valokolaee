import { ReactNode, memo } from "react"

const item = ({ children }: { children?: ReactNode }) => (
    <>{children}</>
)
export default memo(item)