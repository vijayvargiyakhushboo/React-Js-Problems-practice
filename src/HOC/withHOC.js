import { useState } from 'react';
const withHOC = (Component) => {
    const EnhancedComponent = () => {
        const [counter, setCounter] = useState(0)
        const handleClick =()=> {
            setCounter((oldCounter)=> oldCounter + 1 )
        }

        return <Component counter={counter} handleClick={handleClick} />

    }
    return EnhancedComponent;
}

export default withHOC;