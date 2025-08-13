import { createContext, useState, useContext } from "react";
import SimpleSnackbar from "../components/Snak";
 const Snak = createContext()
 export const SnakProvider = ({children}) =>{
      const [open, setOpen] = useState(false);
      const [content, setContent] = useState('');
    function ShowSnak(op){
    setOpen(true);
    setContent(op)
    setTimeout(()=>{
      setOpen(false)
    }, 3000)
  }
    return (
    <Snak.Provider value={ShowSnak}>
        <SimpleSnackbar open={open} content={content}/>
        {children}
        </Snak.Provider>
);
 }

export const useSnak =() =>{return useContext(Snak)}