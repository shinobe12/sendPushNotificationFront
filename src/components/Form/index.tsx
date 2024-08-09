import {useEffect, useState} from "react"
import { BellRing } from 'lucide-react';
import { createPortal } from 'react-dom';
import Modal from "../Modal";


export function Form() {     

    
    function enviar(e: any,params:any){
        e.preventDefault();
        console.log(params)
        if(formObject.app === "" || formObject.app ==="--Selecionar App--"){
            alert("Selecione a App")
        }else{
            console.log(formObject)
            alert('Dados envados com sucesso!')}
    }

    const [mostrar, setMostrar] = useState(false)

    const [modal, setModal] = useState(false)
    const mostrarModal = () =>{setModal(!modal)}

    const [formObject, setFormObject]=useState({
        id: "",
        select: "",
        app : "",
        titulo:"",
        subTitulo: "",
        mensagem: "" 
    })

    return(
        <div className="grid grid-cols-1 gap-4 place-items-center h-svh shadow-lg">
            <div className="rounded-lg max-w-[600px] p-[30px] shadow-2xl bg-zinc-800">  
            <div className="grid grid-cols-1 gap-4 place-items-center h-6 p-1">   
                <BellRing size={65} color="white"/>
                </div>
                <form className="mt-14 m-10" id="form" onSubmit={(e)=>enviar(e,formObject)}>
                    <div className="grid grid-cols-2">
                        <select required id="select" className="mt-3 mr-3 w-100 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500" value={formObject.select} onChange={
                                e => {
                                    if(e.currentTarget.options.selectedIndex === 1){
                                        setMostrar(true)
                                    }
                                    else{
                                        setFormObject({...formObject, id:""})
                                        setMostrar(false);
                                    }
                                    setFormObject({...formObject, select: e.target.value})
                                } 
                            }> 
                            <option>Todos utilizadores</option>
                            <option id="utilizador">Um utilizador</option>
                            
                        </select>
                        <select required id="selected_app" className="mt-3 w-full border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500" value={formObject.app} onChange={
                                e =>setFormObject({...formObject, app: e.target.value})
                            }>
                            <option >--Selecionar App--</option>
                            <option>Só Money</option>
                            <option>Paga Só</option>
                        </select><br/>
                    </div>
                    
                            {mostrar 
                            && <input className="rounded-md w-full shadow-sm p-1 placeholder-zinc-500" required id="id" placeholder="Insira o ID do utilizador" value={formObject.id} onChange={
                            e =>setFormObject({...formObject, id: e.target.value})
                            }/>
                            } 
                        <br/><br/>
                    
                        <label className="text-slate-50 ">Título</label>
                            <input required className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"
                                 value={formObject.titulo} onChange={
                                e =>setFormObject({...formObject, titulo: e.target.value})
                            }  type="text" id="titulo"/>
                
                    <br/>

                    <div>
                        <label className="text-slate-50">Sub-Título</label>
                        <input required type="text" id="subTitulo" name="subtitulo" className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500" value={formObject.subTitulo} onChange={
                            e => setFormObject({...formObject, subTitulo: e.target.value})
                        } />
                        
                    </div>
                    <br/>

                    <div>
                        <textarea rows={3} required className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-zinc-500
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"   id="mensagem" placeholder="Escreva aqui sua mensagem" value={formObject.mensagem} onChange={
                            e => {setFormObject({...formObject, mensagem: e.target.value})}
                        } />
                    </div> 
                    <div className="flex justify-between mt-5">
                        <button type="submit" id="_enviar" className="
                        rounded-md bg-green-600 text-md font-semibold text-white hover:bg-green-700
                        transition hover:translate-y-1 duration-300 w-[45%] ">Enviar</button>
                        <button type="reset" id="_limpar"className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700
                        transition hover:translate-y-1 duration-300 w-[45%] " onClick={() => setModal(true)}>Cancelar</button>
                    </div>
                    {modal && createPortal(
                        <Modal onClose={() => setModal(false)} />,
                        document.body
                    )}
                </form>
                  
            </div>
           
        </div>

    );      
};