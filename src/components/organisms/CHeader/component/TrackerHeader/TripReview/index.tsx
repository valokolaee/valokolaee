import { forwardRef, useEffect, useRef } from "react"
import ReviewTripBody from "../../../../../../routs/main/routs/ReviewTrip/ReviewTripBody"
import CBottomDrawer from "../../../../CBottomDrawer"
import ColorSystem from "../../../../../../configs/color/ColorSystem"

export default forwardRef(({ }: {}, ref: any) => {


    return (
        <CBottomDrawer ref={ref}
            baseView={{

            }}
        >
            <ReviewTripBody isInModal />
        </CBottomDrawer>)
})