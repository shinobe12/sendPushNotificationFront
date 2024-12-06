import React from "react"

const Sucesso = ({ isVisible, onClose }:{isVisible:boolean, onClose:()=>void}) => {
    if(!isVisible) return null
    return(
        <main>
            <div className="fixed inset-0 z-40 dark:bg-zinc-700 dark:bg-opacity-40 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 z-50 flex justify-center items-center  animate-fade">
            <div className="bg-[#fff]  p-3 rounded-md flex w-[200px] justify-center">
            <div className="">
                <div className="flex justify-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="15" fill="#CFE4FF"/>
                    <path d="M15 6C10.0371 6 6 10.0371 6 15C6 19.9629 10.0371 24 15 24C19.9629 24 24 19.9629 24 15C24 10.0371 19.9629 6 15 6ZM15 7.5C19.1514 7.5 22.5 10.8486 22.5 15C22.5 19.1514 19.1514 22.5 15 22.5C10.8486 22.5 7.5 19.1514 7.5 15C7.5 10.8486 10.8486 7.5 15 7.5ZM18.1406 10.5469C18.0293 10.5645 17.9355 10.623 17.8594 10.7344L14.1797 16.1953L12.4453 14.4844C12.2959 14.2588 12.0088 14.2412 11.8594 14.3906L11.1797 15.0703C11.0303 15.2959 11.0303 15.6006 11.1797 15.75L13.8047 18.375C13.9541 18.4512 14.165 18.6094 14.3906 18.6094C14.54 18.6094 14.7803 18.5303 14.9297 18.3047L19.4297 11.6953C19.5791 11.4697 19.4941 11.2588 19.1953 11.1094L18.4453 10.5703C18.3691 10.5322 18.252 10.5293 18.1406 10.5469Z" fill="#277FE3"/>
                    </svg>
                </div>
                <div className="p-2 text-center text-[#656565] font-semibold font-family-sans" onClick={() => onClose()}><p>Notificação<br/>Enviada!</p></div>
                <div><button type="button" onClick={() => onClose()} className="bg-[#277FE3] transition  duration-300 hover:bg-[#2167B6] text-white font-family-sans rounded-md p-2 w-full">Concluir</button></div>
            </div>
            </div>
        </div>
        </main>  
    )
}
export default Sucesso 