import React from 'react'

const useTimeOut= ({delay}) => {

    const [ready,setReady] = React.useState(false)
    
    React.useEffect(()=>{
        let timer = setTimeout(()=>{
           setReady(true)
        },delay)
        return () => clearTimeout(timer)
    },[delay])
  return ready
}

export default useTimeOut