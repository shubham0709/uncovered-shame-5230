

export default function redirection({delay}){
    let id = setTimeout(()=>{
        
     },delay)
     ((id)=>{
         clearTimeout(id)
     })

     return false
}