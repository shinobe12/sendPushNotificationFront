
import { useMemo, useState } from 'react';
import  {Form} from '../../components/Form'
import { Lista } from '../../components/Lista';


export function Notification() {
  const [action, setAction] = useState<"LIST" | "ADD">("LIST")

  const activeStyleList = useMemo(() => {
    return action === "LIST"? "bg-[#277FE3] dark:bg-[#277FE3]":"bg-[#454545] dark:bg-[#CFE4FF] dark:text-[#393939]"
  },[action])

  const activeStyleAdd = useMemo(() => {
   return action === "ADD"? "bg-[#277FE3] dark:bg-[#277FE3]":"bg-[#454545] dark:bg-[#CFE4FF] dark:text-[#393939]"
  },[action])

  const [isDark, setIsDark] = useState(false)
  const trocaCor = () => setIsDark(!isDark)

  return (
    <div className={`${isDark && "dark"}`}>
    <main className='min-h-screen dark:bg-[#fff] bg-zinc-950'>
      <div className="text-zinc-50 flex justify-start p-4 h-20 grid grid-cols-2">
        <div className='flex justify-start p-3'>
          {isDark ? <div className='mr-2 dark:text-zinc-700'>Modo claro</div> : <div className='mr-2 text-zinc-200'>Modo escuro</div>}
          <div><button onClick={trocaCor}>
            {isDark ? 
            <svg width="42" height="22" className=' mt-1' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="22" rx="11" fill="#4CD080"/>
            <circle cx="31" cy="11" r="9" fill="white"/>
            </svg> : 
            <svg width="42" height="22" className='mt-1' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="22" rx="11" fill="#D5D5D5"/>
<circle cx="11" cy="11" r="9" fill="white"/>
                  </svg>
            }
            </button>
            
          </div>
        </div>

                
        <div className='flex justify-end flex justify-between mt-3 ml-[65%] w-[30%] mr-5 dark:text-zinc-700 '>
        <img src='./src/pages/Notification/img.png' className='flex justify-end'/>
          <div className=''>
            <div className='font-bold'><p>Vasco Silva ... jjjj jjj </p></div>
            <div>ID: ...</div>
          </div>
          <button className=' rows-span-2' type='button'>
            <svg width="33" height="43" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="33" height="33" rx="7" fill="#FF6D6D"/>
              <path d="M11.5 8.75C9.99167 8.75 8.75 9.99167 8.75 11.5V22.5C8.75 24.0083 9.99167 25.25 11.5 25.25H19.2917C20.5806 25.25 21.7254 24.4101 22.0175 23.1687C22.0451 23.0515 22.0494 22.93 22.0301 22.8111C22.0107 22.6923 21.9682 22.5784 21.9049 22.476C21.8415 22.3736 21.7586 22.2846 21.6609 22.2142C21.5632 22.1439 21.4526 22.0934 21.3354 22.0658C21.2182 22.0382 21.0967 22.0339 20.9778 22.0532C20.859 22.0726 20.7451 22.1151 20.6427 22.1785C20.5402 22.2418 20.4513 22.3247 20.3809 22.4224C20.3106 22.5201 20.2601 22.6308 20.2325 22.748C20.1579 23.0649 19.7444 23.4167 19.2917 23.4167H11.5C10.9917 23.4167 10.5833 23.0083 10.5833 22.5V11.5C10.5833 10.9917 10.9917 10.5833 11.5 10.5833H19.2917C19.7444 10.5833 20.1579 10.9351 20.2325 11.252C20.2601 11.3692 20.3106 11.4799 20.3809 11.5776C20.4513 11.6753 20.5402 11.7582 20.6427 11.8215C20.7451 11.8849 20.859 11.9274 20.9778 11.9468C21.0967 11.9661 21.2182 11.9618 21.3354 11.9342C21.4526 11.9066 21.5632 11.8561 21.6609 11.7858C21.7586 11.7154 21.8415 11.6264 21.9049 11.524C21.9682 11.4216 22.0107 11.3077 22.0301 11.1889C22.0494 11.07 22.0451 10.9485 22.0175 10.8313C21.7254 9.58989 20.5806 8.75 19.2917 8.75H11.5ZM21.5735 13.3244C21.3912 13.3246 21.2131 13.3792 21.062 13.4811C20.9109 13.583 20.7936 13.7277 20.7251 13.8966C20.6566 14.0655 20.64 14.251 20.6774 14.4294C20.7148 14.6078 20.8046 14.771 20.9352 14.8981L22.1204 16.0833H13.7917C13.6702 16.0816 13.5496 16.1041 13.4369 16.1494C13.3242 16.1946 13.2216 16.2619 13.1351 16.3472C13.0486 16.4325 12.9799 16.5341 12.933 16.6462C12.8861 16.7582 12.8619 16.8785 12.8619 17C12.8619 17.1215 12.8861 17.2418 12.933 17.3538C12.9799 17.4659 13.0486 17.5675 13.1351 17.6528C13.2216 17.7381 13.3242 17.8054 13.4369 17.8506C13.5496 17.8959 13.6702 17.9184 13.7917 17.9167H22.1204L20.9352 19.1019C20.8472 19.1864 20.777 19.2875 20.7286 19.3995C20.6802 19.5114 20.6547 19.6319 20.6534 19.7539C20.6522 19.8758 20.6753 19.9968 20.7214 20.1097C20.7675 20.2226 20.8357 20.3252 20.9219 20.4114C21.0081 20.4977 21.1107 20.5658 21.2236 20.6119C21.3365 20.658 21.4575 20.6811 21.5795 20.6799C21.7014 20.6787 21.8219 20.6531 21.9339 20.6047C22.0458 20.5563 22.147 20.4861 22.2314 20.3981L24.9814 17.6481C25.1533 17.4762 25.2498 17.2431 25.2498 17C25.2498 16.7569 25.1533 16.5238 24.9814 16.3519L22.2314 13.6019C22.1459 13.514 22.0436 13.4441 21.9306 13.3964C21.8176 13.3488 21.6961 13.3243 21.5735 13.3244Z" fill="white"/>
              </svg>
          </button>  
        </div>
      </div>
      <div className='flex justify-center h-10'>
          <div className="text-zinc-50 flex justify-between p-4 h-20 rounded-md bg-zinc-800 dark:bg-[#E8F3FF]" >
            <button className={`${activeStyleList} mr-3 p-3 hover:bg-zinc-700 rounded-md`} onClick={e => {setAction("LIST")}}>Lista de Notificações</button> 
            <button className={`${activeStyleAdd} ml-3 p-3 hover:bg-zinc-700   rounded-md`} onClick={e => {setAction("ADD")}}>Adicionar Notificação</button>  
          </div> 
      </div> 
      {action === "ADD"?<Form/>:<Lista/>}

    </main>
    </div>
  );
};
