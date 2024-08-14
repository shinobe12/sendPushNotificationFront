
import { useMemo, useState } from 'react';
import  {Form} from '../../components/Form'
import { Lista } from '../../components/Lista';


export function Notification() {
  const [action, setAction] = useState<"LIST" | "ADD">("LIST")

  const activeStyleList = useMemo(() => {
    return action === "LIST"? "bg-[#277FE3]":"bg-[#454545]"
  },[action])

  const activeStyleAdd = useMemo(() => {
   return action === "ADD"? "bg-[#277FE3]":"bg-[#454545]"
  },[action])

  const [isDark, setIsDark] = useState(true)
  const trocaCor = () => setIsDark(!isDark)

  return (
    <main className='min-h-screen bg-zinc-950'>
      <div className="text-zinc-50 flex justify-start p-4 h-20 grid grid-cols-2">
        <div className='flex justify-start p-3'>
          <div className='mr-2'>Modo claro</div>
          <div><button onClick={trocaCor}>
            {isDark && <svg width="42" height="22" className=' mt-1' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="22" rx="11" fill="#4CD080"/>
            <circle cx="31" cy="11" r="9" fill="white"/>
            </svg>}
            {!isDark && <svg width="42" height="22" className='mt-1' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="22" rx="11" fill="#D5D5D5"/>
<circle cx="11" cy="11" r="9" fill="white"/>
                  </svg>
            }
            </button>
            
          </div>
        </div>
        <div className='flex justify-end p-3'>...</div>
      </div>
      <div className='flex justify-center h-10'>
          <div className="text-zinc-50 flex justify-between p-4 h-20 rounded-lg bg-zinc-800" >
            <button className={`${activeStyleList} mr-3 p-3 hover:bg-zinc-700 rounded-lg`} onClick={e => {setAction("LIST")}}>Lista de Notificações</button> 
            <button className={`${activeStyleAdd} ml-3 p-3 hover:bg-zinc-700   rounded-lg`} onClick={e => {setAction("ADD")}}>Adicionar Notificação</button>  
          </div> 
      </div> 
      {action === "ADD"?<Form/>:<Lista/>}
    </main>
       
  );
};
