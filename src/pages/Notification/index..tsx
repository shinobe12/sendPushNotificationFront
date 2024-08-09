
import { useState } from 'react';
import  {Form} from '../../components/Form'
import { Lista } from '../../components/Lista';


export function Notification() {
  const [action, setAction] = useState<"LIST" | "ADD">("LIST")

  console.log(action)
  
  return (
    <main className='min-h-screen flex justify-center bg-zinc-950'> 
      <div className='mt-3 flex fixed'>
          <div className='text-zinc-50 flex justify-between p-4 h-20 rounded-lg bg-zinc-800' >
            <button className='mr-3 p-3 bg-zinc-950 hover:bg-zinc-700 focus:bg focus:bg-zinc-700 active:bg-zinc-950 rounded-lg active' onClick={e => {setAction("LIST")}}>Lista de Notificações</button> 
            <button className='ml-3 p-3 bg-zinc-950 hover:bg-zinc-700 focus:bg focus:bg-zinc-700 active:bg-zinc-950 rounded-lg' aria-current="page" onClick={e => {setAction("ADD")}}>Adicionar Notificação</button>  
          </div>
        </div> 
      {action === "ADD"?<Form/>:<Lista/>}
    </main>
       
  );
};
