import {useEffect, useState} from "react"


export function Form({formId, timestamp}:{formId: string, timestamp: number}) {     
    
    /*consumindo uma api*/
    const [api, setApi] = useState<any[]>([])
    function getLanguges(){
        fetch('https://alefesouza.dev/api/languages.php')
        .then(responde => responde.json())
        .then(_api => {
            setApi(_api)})
    }

    useEffect(() => {
        console.log(formId,timestamp)
        getLanguges()
      }, []);

    
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

    const [formObject, setFormObject]=useState({
        id: "",
        select: "",
        app : "",
        titulo:"",
        subTitulo: "",
        mensagem: "" 
    })

    return(
        <div className="grid grid-cols-1 gap-4 place-items-center h-svh">
            <div className="rounded-lg max-w-[600px] p-[30px] shadow-2xl bg-zinc-800">  
                <form className="mt-12 m-10" id="form" onSubmit={(e)=>enviar(e,formObject)}>
                    <div className="grid grid-cols-2">
                        <select required id="select" className="rounded mr-6 w-100" value={formObject.select} onChange={
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
                        <select required id="selected_app" className="rounded" value={formObject.app} onChange={
                                e =>setFormObject({...formObject, app: e.target.value})
                            }>
                            <option >--Selecionar App--</option>
                            <option>Só Money</option>
                            <option>Paga Só</option>
                        </select><br/><br/>
                    </div>
                    
                            {mostrar 
                            && <input className="rounded-md w-full shadow-sm p-1 fadeIn-right" required id="id" placeholder="Insira o ID do utilizador" value={formObject.id} onChange={
                            e =>setFormObject({...formObject, id: e.target.value})
                            }/>
                            } 
                        <br/><br/>
                    
                        <label className="text-slate-50">Título</label>
                            <input required className="rounded-md w-full shadow-sm p-1" value={formObject.titulo} onChange={
                                e =>setFormObject({...formObject, titulo: e.target.value})
                            }  type="text" id="titulo"/>
                
                    <br/><br/>

                    <div>
                        <label className="text-slate-50">Sub-Título</label>
                        <input required type="text" id="subTitulo" name="subtitulo" className="rounded-md w-full shadow-sm p-1" value={formObject.subTitulo} onChange={
                            e => setFormObject({...formObject, subTitulo: e.target.value})
                        } />
                        
                    </div>
                    <br/>

                    <div>
                        <textarea rows={3} required className="block border-0 py-1.5 rounded-md w-full  p-1 ring-1 ring-inset ring-gray-300 laceholder:text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-green-80 sm:text-md sm:leading-6"   id="mensagem" placeholder="Escreva aqui sua mensagem" value={formObject.mensagem} onChange={
                            e => {setFormObject({...formObject, mensagem: e.target.value})}
                        } />
                    </div> 
                    <div className="grid grid-cols-2 mt-5">
                        <button type="submit" id="_enviar" className="
                        rounded-md bg-green-600 text-md font-semibold text-white max-w-[100px] hover:bg-green-700
                        transition hover:translate-y-2 duration-300 ">Enviar</button>
                        <button type="reset" id="_limpar"className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700
                        transition hover:translate-y-2 duration-300 "><p>Cancelar</p></button>
                    </div>
                </form>     
            </div>
           
        </div>

    );      
};