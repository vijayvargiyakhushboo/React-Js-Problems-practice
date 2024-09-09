import { forwardRef } from "react";
const Child = forwardRef(function Child (props,passedRref) {
    return<>
    <input type="text" ref={passedRref} />
    </>


})

export default Child;