import {useState} from "react"
import styles from "./Form.module.css"

export function Form() {
    
    
    function enviar(e){
        e.preventDefault();

        
        console.log( 
            formObject
        );
        alert("Dados enviados com sucesso");
    }
    

    const [formObject, setFormObject]=useState({
        select: "",
        app : "",
        titulo:"",
        subTitulo: "",
        mensagem: "" 
    })


    return(

        <div className={styles.form}>
            <form id="form" metoh="post" styles="background-color: #csc;">
                <select id="select" valeu={formObject.select} onChange={
                        e => setFormObject({...formObject, select: e.target.value})
                    }>
                    <option>selecionar campo</option>
                    <option>Enviar para um Utilizador</option>
                    <option>Enviar para todos Utilizadores</option>
                </select>
                <select id="selected_app" valeu={formObject.app} onChange={
                        e =>setFormObject({...formObject, app: e.target.value})
                    }>
                    <option>Selecionar o método de envio</option>
                    <option>Só Money</option>
                    <option>Paga Só</option>
                </select><br/><br/>
                
                <div >
                <label>Título</label>
                    <input valeu={formObject.titulo} onChange={
                        e =>setFormObject({...formObject, titulo: e.target.value})
                    }  type="text" id="titulo"  />
                    
                </div>
                <br/><br/>

                <div>
                    <label >Sub-Título</label>
                    <input type="text" id="subTitulo" name="subtitulo" valeu={formObject.subTitulo} onChange={
                        e => setFormObject({...formObject, subTitulo: e.target.value})
                    } />
                    
                </div>
                <br/><br/>

                <div >
                    <textarea  id="mensagem" placeholder="Escreva aqui sua mensagem" valeu={formObject.mensagem} onChange={
                        e => {setFormObject({...formObject, mensagem: e.target.value})}
                    } />
                </div>
                
                <button type="submit" id="_enviar" onClick={enviar}>Enviar</button>
                
            </form>
            
        </div>

    );    
};