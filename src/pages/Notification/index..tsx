
import { useEffect, useMemo, useState } from 'react';
import { Form } from '../../components/Form'
import { Lista } from '../../components/Lista';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';


export function Notification() {

  const [action, setAction] = useState<"LIST" | "ADD">("LIST")

  const activeStyleList = useMemo(() => {
    return action === "LIST" ? "bg-[#277FE3] dark:bg-[#277FE3] hover:bg-[#2563eb] dark:hover:bg-[#2563eb]" : "bg-[#454545] dark:bg-[#CFE4FF] hover:bg-zinc-700 dark:hover:bg-[#bfdbfe] dark:text-[#393939]"
  }, [action])

  const activeStyleAdd = useMemo(() => {
    return action === "ADD" ? "bg-[#277FE3] dark:hover:bg-[#2563eb] dark:hover:bg-[#2563eb] hover:bg-[#2563eb]" : "bg-[#454545] dark:bg-[#CFE4FF] hover:bg-zinc-700 dark:hover:bg-[#bfdbfe] dark:text-[#393939]"
  }, [action])


  const [isDark, setIsDark] = useState(false)
  const trocaCor = () => setIsDark(!isDark)

  const [sair, setSair] = useState(false)

  const navigate = useNavigate()

  const [mostrItems, setMostraItems] = useState(false)
  const trocaMostrar = () => setMostraItems(!mostrItems)

  const [isChange, setIsChange] = useState(false)
  const trocaChange = () => setIsChange(!isChange)

  const handleLogout = () => {
    navigate('/login')
  }

  let email = sessionStorage.getItem("email")

  useEffect(() => {
    if (email === "" || email === null) {
      navigate("/login")
    }
  })
  
  return (
    
    <div className={`${isDark && "dark"}`}>
     
      <main className='min-h-screen dark:bg-[#fff] bg-zinc-950 '>

          <div className='flex justify-center bg-zinc-700'>
          {mostrItems && <ul className='items-center w-[75%] md:w-[30%] mt-5 fixed text-white dark:text-zinc-700 dark:shadow-inner md:ml-[60%] bg-opacity-30 rounded-md backdrop-blur-md animate-fade p-1 bg-zinc-300 lg:hidden dark:text-zinc-800'>
              {isChange && <div className='flex justify-end'><svg onClick={() => { setIsChange(false); setMostraItems(false) }} className="lucide lucide-circle-x animate-fade dark:text-[#277FE3] cursor-pointer lg:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </div>}
              <li className='flex justify-center'>
                <img src='img.png' />
              </li>
              <div className='text-justify mt-1'> 
                <li className='flex justify-center'>
                  <div className='lg:font-semibold text-justify'><p className='text-xs text-center md:text-sm lg:text-md text-justify'>{email}</p></div>
                </li>
                <li className='lg:font-semibold text-xs md:text-sm flex justify-center'>
                  <span >Admin</span>
                </li>
              </div>
              <li className='flex justify-center'>
                <svg width="33" height="43" viewBox="0 0 33 33" fill="none" onClick={() => setSair(true)}
                  className='transition hover:translate-y-1 duration-300 p-1 lg:p-0 cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                  <rect width="33" height="33" rx="7" fill="#FF6D6D" />
                  <path d="M11.5 8.75C9.99167 8.75 8.75 9.99167 8.75 11.5V22.5C8.75 24.0083 9.99167 25.25 11.5 25.25H19.2917C20.5806 25.25 21.7254 24.4101 22.0175 23.1687C22.0451 23.0515 22.0494 22.93 22.0301 22.8111C22.0107 22.6923 21.9682 22.5784 21.9049 22.476C21.8415 22.3736 21.7586 22.2846 21.6609 22.2142C21.5632 22.1439 21.4526 22.0934 21.3354 22.0658C21.2182 22.0382 21.0967 22.0339 20.9778 22.0532C20.859 22.0726 20.7451 22.1151 20.6427 22.1785C20.5402 22.2418 20.4513 22.3247 20.3809 22.4224C20.3106 22.5201 20.2601 22.6308 20.2325 22.748C20.1579 23.0649 19.7444 23.4167 19.2917 23.4167H11.5C10.9917 23.4167 10.5833 23.0083 10.5833 22.5V11.5C10.5833 10.9917 10.9917 10.5833 11.5 10.5833H19.2917C19.7444 10.5833 20.1579 10.9351 20.2325 11.252C20.2601 11.3692 20.3106 11.4799 20.3809 11.5776C20.4513 11.6753 20.5402 11.7582 20.6427 11.8215C20.7451 11.8849 20.859 11.9274 20.9778 11.9468C21.0967 11.9661 21.2182 11.9618 21.3354 11.9342C21.4526 11.9066 21.5632 11.8561 21.6609 11.7858C21.7586 11.7154 21.8415 11.6264 21.9049 11.524C21.9682 11.4216 22.0107 11.3077 22.0301 11.1889C22.0494 11.07 22.0451 10.9485 22.0175 10.8313C21.7254 9.58989 20.5806 8.75 19.2917 8.75H11.5ZM21.5735 13.3244C21.3912 13.3246 21.2131 13.3792 21.062 13.4811C20.9109 13.583 20.7936 13.7277 20.7251 13.8966C20.6566 14.0655 20.64 14.251 20.6774 14.4294C20.7148 14.6078 20.8046 14.771 20.9352 14.8981L22.1204 16.0833H13.7917C13.6702 16.0816 13.5496 16.1041 13.4369 16.1494C13.3242 16.1946 13.2216 16.2619 13.1351 16.3472C13.0486 16.4325 12.9799 16.5341 12.933 16.6462C12.8861 16.7582 12.8619 16.8785 12.8619 17C12.8619 17.1215 12.8861 17.2418 12.933 17.3538C12.9799 17.4659 13.0486 17.5675 13.1351 17.6528C13.2216 17.7381 13.3242 17.8054 13.4369 17.8506C13.5496 17.8959 13.6702 17.9184 13.7917 17.9167H22.1204L20.9352 19.1019C20.8472 19.1864 20.777 19.2875 20.7286 19.3995C20.6802 19.5114 20.6547 19.6319 20.6534 19.7539C20.6522 19.8758 20.6753 19.9968 20.7214 20.1097C20.7675 20.2226 20.8357 20.3252 20.9219 20.4114C21.0081 20.4977 21.1107 20.5658 21.2236 20.6119C21.3365 20.658 21.4575 20.6811 21.5795 20.6799C21.7014 20.6787 21.8219 20.6531 21.9339 20.6047C22.0458 20.5563 22.147 20.4861 22.2314 20.3981L24.9814 17.6481C25.1533 17.4762 25.2498 17.2431 25.2498 17C25.2498 16.7569 25.1533 16.5238 24.9814 16.3519L22.2314 13.6019C22.1459 13.514 22.0436 13.4441 21.9306 13.3964C21.8176 13.3488 21.6961 13.3243 21.5735 13.3244Z" fill="white" />
                </svg>
              </li>
            </ul>}</div>
            <div className='flex justify-start items-center'>
              <div className='flex justify-start mt-2 w-[100%] mt-5 lg:mt-0'>
                {isDark ? <p className='flex animate-fade mr-2 ml-4 text-zinc-800 text-sm'>Modo claro</p> : <p className='flex animate-fade mr-2 ml-4 text-zinc-200 text-sm'>Modo claro</p>}
                <div>
                  <button onClick={trocaCor}>
                    {isDark ?
                      <svg width="42" height="22" className='animate-fade p-1 lg:p-0 lg:w-8' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="42" height="22" rx="11" fill="#4CD080" />
                        <circle cx="31" cy="11" r="9" fill="white" />
                      </svg> :
                      <svg width="42" height="22" className='animate-fade p-1 lg:p-0 text-sm lg:w-8' viewBox="0 0 42 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="42" height="22" rx="11" fill="#D5D5D5" />
                        <circle cx="11" cy="11" r="9" fill="white" />
                      </svg>
                    }
                  </button>
                </div>
                </div>

                <div className="text-zinc-50 flex justify-end ">
          <ul className=' hidden w-[70%] md:w-[35%] ml-[20%] md:ml-[60%] justify-end bg-opacity-30 rounded-md backdrop-blur-md animate-fade justify-end p-3 bg-zinc-300 lg:flex lg:bg-opacity-0 lg:w-[40%] dark:text-zinc-800 my-2 ml-3 lg:ml-[60%] '>
            <li className='flex justify-center lg:mr-2'>
              <img src='img.png' className='fixed mr-10' />
            </li>
            <div className=''>
              <li className=''>
                <span className='lg:font-semibold flex justify-center'><p className='text-sm lg:text-md'>{email}</p></span>
              </li>
              <li className='lg:font-semibold text-sm'>
                <span >Admin</span>
              </li>
            </div>
            <li className='flex justify-center'>
              <svg width="33" height="43" viewBox="0 0 33 33" fill="none" onClick={() => setSair(true)}
                className='transition hover:translate-y-1 duration-300 p-1 lg:p-0 lg:ml-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="7" fill="#FF6D6D" />
                <path d="M11.5 8.75C9.99167 8.75 8.75 9.99167 8.75 11.5V22.5C8.75 24.0083 9.99167 25.25 11.5 25.25H19.2917C20.5806 25.25 21.7254 24.4101 22.0175 23.1687C22.0451 23.0515 22.0494 22.93 22.0301 22.8111C22.0107 22.6923 21.9682 22.5784 21.9049 22.476C21.8415 22.3736 21.7586 22.2846 21.6609 22.2142C21.5632 22.1439 21.4526 22.0934 21.3354 22.0658C21.2182 22.0382 21.0967 22.0339 20.9778 22.0532C20.859 22.0726 20.7451 22.1151 20.6427 22.1785C20.5402 22.2418 20.4513 22.3247 20.3809 22.4224C20.3106 22.5201 20.2601 22.6308 20.2325 22.748C20.1579 23.0649 19.7444 23.4167 19.2917 23.4167H11.5C10.9917 23.4167 10.5833 23.0083 10.5833 22.5V11.5C10.5833 10.9917 10.9917 10.5833 11.5 10.5833H19.2917C19.7444 10.5833 20.1579 10.9351 20.2325 11.252C20.2601 11.3692 20.3106 11.4799 20.3809 11.5776C20.4513 11.6753 20.5402 11.7582 20.6427 11.8215C20.7451 11.8849 20.859 11.9274 20.9778 11.9468C21.0967 11.9661 21.2182 11.9618 21.3354 11.9342C21.4526 11.9066 21.5632 11.8561 21.6609 11.7858C21.7586 11.7154 21.8415 11.6264 21.9049 11.524C21.9682 11.4216 22.0107 11.3077 22.0301 11.1889C22.0494 11.07 22.0451 10.9485 22.0175 10.8313C21.7254 9.58989 20.5806 8.75 19.2917 8.75H11.5ZM21.5735 13.3244C21.3912 13.3246 21.2131 13.3792 21.062 13.4811C20.9109 13.583 20.7936 13.7277 20.7251 13.8966C20.6566 14.0655 20.64 14.251 20.6774 14.4294C20.7148 14.6078 20.8046 14.771 20.9352 14.8981L22.1204 16.0833H13.7917C13.6702 16.0816 13.5496 16.1041 13.4369 16.1494C13.3242 16.1946 13.2216 16.2619 13.1351 16.3472C13.0486 16.4325 12.9799 16.5341 12.933 16.6462C12.8861 16.7582 12.8619 16.8785 12.8619 17C12.8619 17.1215 12.8861 17.2418 12.933 17.3538C12.9799 17.4659 13.0486 17.5675 13.1351 17.6528C13.2216 17.7381 13.3242 17.8054 13.4369 17.8506C13.5496 17.8959 13.6702 17.9184 13.7917 17.9167H22.1204L20.9352 19.1019C20.8472 19.1864 20.777 19.2875 20.7286 19.3995C20.6802 19.5114 20.6547 19.6319 20.6534 19.7539C20.6522 19.8758 20.6753 19.9968 20.7214 20.1097C20.7675 20.2226 20.8357 20.3252 20.9219 20.4114C21.0081 20.4977 21.1107 20.5658 21.2236 20.6119C21.3365 20.658 21.4575 20.6811 21.5795 20.6799C21.7014 20.6787 21.8219 20.6531 21.9339 20.6047C22.0458 20.5563 22.147 20.4861 22.2314 20.3981L24.9814 17.6481C25.1533 17.4762 25.2498 17.2431 25.2498 17C25.2498 16.7569 25.1533 16.5238 24.9814 16.3519L22.2314 13.6019C22.1459 13.514 22.0436 13.4441 21.9306 13.3964C21.8176 13.3488 21.6961 13.3243 21.5735 13.3244Z" fill="white" />
              </svg>
            </li>
          </ul>
          
            <button type='button' className='sm:mr-10 md:mr-10 lg:hidden' onClick={trocaChange}>
              {!isChange &&
                <svg onClick={trocaMostrar} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinejoin="round" className="lucide lucide-menu animate-fade dark:text-[#277FE3] mt-3"><line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              }
            </button>
              </div>
            </div>
        
        <div className='flex justify-center h-10'>
          <div className="shadow-inner text-zinc-50 top-0 flex justify-between p-4 h-20 rounded-md bg-zinc-800 dark:bg-[#E8F3FF]" >
            <button className={`${activeStyleList} mr-3 lg:mr-3 md:p-3 rounded-md`} onClick={e => { setAction("LIST") }}>Lista de Notificações</button>
            <button className={`${activeStyleAdd} ml-3 md:p-3  rounded-md`} onClick={e => { setAction("ADD") }}>Adicionar Notificação</button>
          </div>
        </div>
        
        {action === "ADD" ? <Form /> : <Lista />}

        {sair && <div><div className="fixed inset-0 dark:bg-zinc-700 dark:bg-opacity-40 bg-black bg-opacity-50"></div>
          <div className="fixed inset-0 flex justify-center items-center  animate-fade">
            <div className="bg-[#fff] p-3 rounded-md flex w-[200px] justify-center">
              <div className="">
                <div className="flex justify-center">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="15" fill="#CFE4FF"/>
                    <path d="M9.75 7C8.24167 7 7 8.24167 7 9.75V20.75C7 22.2583 8.24167 23.5 9.75 23.5H17.5417C18.8306 23.5 19.9754 22.6601 20.2675 21.4187C20.2951 21.3015 20.2994 21.18 20.2801 21.0611C20.2607 20.9423 20.2182 20.8284 20.1549 20.726C20.0915 20.6236 20.0086 20.5346 19.9109 20.4642C19.8132 20.3939 19.7026 20.3434 19.5854 20.3158C19.4682 20.2882 19.3467 20.2839 19.2278 20.3032C19.109 20.3226 18.9951 20.3651 18.8927 20.4285C18.7902 20.4918 18.7013 20.5747 18.6309 20.6724C18.5606 20.7701 18.5101 20.8808 18.4825 20.998C18.4079 21.3149 17.9944 21.6667 17.5417 21.6667H9.75C9.24167 21.6667 8.83333 21.2583 8.83333 20.75V9.75C8.83333 9.24167 9.24167 8.83333 9.75 8.83333H17.5417C17.9944 8.83333 18.4079 9.18511 18.4825 9.50203C18.5101 9.61924 18.5606 9.72986 18.6309 9.82758C18.7013 9.92529 18.7902 10.0082 18.8927 10.0715C18.9951 10.1349 19.109 10.1774 19.2278 10.1968C19.3467 10.2161 19.4682 10.2118 19.5854 10.1842C19.7026 10.1566 19.8132 10.1061 19.9109 10.0358C20.0086 9.96538 20.0915 9.87644 20.1549 9.77403C20.2182 9.67161 20.2607 9.55772 20.2801 9.43887C20.2994 9.32001 20.2951 9.19851 20.2675 9.0813C19.9754 7.83989 18.8306 7 17.5417 7H9.75ZM19.8235 11.5744C19.6412 11.5746 19.4631 11.6292 19.312 11.7311C19.1609 11.833 19.0436 11.9777 18.9751 12.1466C18.9066 12.3155 18.89 12.501 18.9274 12.6794C18.9648 12.8578 19.0546 13.021 19.1852 13.1481L20.3704 14.3333H12.0417C11.9202 14.3316 11.7996 14.3541 11.6869 14.3994C11.5742 14.4446 11.4716 14.5119 11.3851 14.5972C11.2986 14.6825 11.2299 14.7841 11.183 14.8962C11.1361 15.0082 11.1119 15.1285 11.1119 15.25C11.1119 15.3715 11.1361 15.4918 11.183 15.6038C11.2299 15.7159 11.2986 15.8175 11.3851 15.9028C11.4716 15.9881 11.5742 16.0554 11.6869 16.1006C11.7996 16.1459 11.9202 16.1684 12.0417 16.1667H20.3704L19.1852 17.3519C19.0972 17.4364 19.027 17.5375 18.9786 17.6495C18.9302 17.7614 18.9047 17.8819 18.9034 18.0039C18.9022 18.1258 18.9253 18.2468 18.9714 18.3597C19.0175 18.4726 19.0857 18.5752 19.1719 18.6614C19.2581 18.7477 19.3607 18.8158 19.4736 18.8619C19.5865 18.908 19.7075 18.9311 19.8295 18.9299C19.9514 18.9287 20.0719 18.9031 20.1839 18.8547C20.2958 18.8063 20.397 18.7361 20.4814 18.6481L23.2314 15.8981C23.4033 15.7262 23.4998 15.4931 23.4998 15.25C23.4998 15.0069 23.4033 14.7738 23.2314 14.6019L20.4814 11.8519C20.3959 11.764 20.2936 11.6941 20.1806 11.6464C20.0676 11.5988 19.9461 11.5743 19.8235 11.5744Z" fill="#277FE3" />
                  </svg>
                </div>
                <div className="p-2 text-center text-[#656565] font-semibold font-family-sans"><p>Tem certeza que<br />pretende sair?</p></div>
                <div className="flex p-2"><button type="button" onClick={() => setSair(false)} className="bg-[#D4D4D4] transition  duration-300 hover:bg-zinc-400 text-white font-family-sans rounded-md p-2 w-full">Cancelar</button>
                  <button type="button" onClick={handleLogout} className="bg-[#277FE3] ml-2 transition  duration-300 hover:bg-[#2167B6] text-white font-family-sans rounded-md p-2 w-full">Confirmar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }

      </main>
    </div>
  );
};
