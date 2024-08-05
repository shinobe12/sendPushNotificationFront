import styles from "./Form.module.css"

export function Form() {
    return(

        <div className={styles.form}>
            <form id="form" metoh="post" styles="background-color: #csc;">
                <select class="select">
                    <option>...</option>
                </select><br/><br/>
                
                <div class="input-single">
                    <input type="text" id="titulo" class="input" autocomplete="off"/>
                    <label for="nome">Titulo</label>
                </div>
                <br/><br/>

                <div class="input-single">
                    <input type="text" id="titulo" name="subtitulo" autocomplete="off"/>
                    <label for="nome">Sub-titulo</label>
                </div>
                <br/><br/>

                <div class="input-single">
                    <textarea class="mensagem" id="mensagem" placeholder="Escreva aqui sua mensagem"/>
                </div>
                <br/><br/>

                <div class="btn">
                    <button type="submit" id="enviar" name="enviar">Enviar</button>
                </div>
            </form>
        </div>

    );    
};