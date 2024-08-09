
import { useState } from 'react';
import  {Form} from '../../components/Form'

export function Notification() {
  const [action, setAction] = useState<"LIST" | "ADD">("LIST")
  console.log(action)
  return (
    <main className='min-h-screen flex justify-center bg-zinc-950'> 
      <div className='mt-3 flex'>
      <div className='text-zinc-50 flex justify-between p-4 h-16 rounded-lg bg-zinc-800 ' >
        <button className='mr-3'>Adicionar Notificação</button>  
        <button className='ml-3'>Lista de Notificações</button> 
      </div>  
         
      {action === "ADD"?<Form/>:<div className=''></div>}
      </div>
    </main>
       
  );
};
