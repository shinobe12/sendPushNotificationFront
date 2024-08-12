
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

  return (
    <main className='min-h-screen bg-zinc-950'>
      <div className='flex justify-center h-20 '>
          <div className=" mt-10 text-zinc-50 flex justify-between p-4 h-20 rounded-lg bg-zinc-800" >
            <button className={`${activeStyleList} mr-3 p-3 bg-zinc-950 hover:bg-zinc-700 rounded-lg`} onClick={e => {setAction("LIST")}}>Lista de Notificações</button> 
            <button className={`${activeStyleAdd} mr-3 p-3 bg-zinc-950 hover:bg-zinc-700   rounded-lg`} onClick={e => {setAction("ADD")}}>Adicionar Notificação</button>  
          </div> 
        </div> 
      {action === "ADD"?<Form/>:<Lista/>}
    </main>
       
  );
};
