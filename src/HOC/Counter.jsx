import withHOC from "./withHOC"

const Counter = ({counter,handleClick}) => {

    return <button onClick={handleClick}>{counter}</button>

}
export default withHOC(Counter)