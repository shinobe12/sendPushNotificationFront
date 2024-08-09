
export default function Modal(fechar: any ){
    return (
        <div className="modal">
            <div>Deseja realmente Cancelar?</div>
            <button onClick={fechar}>Cancelar</button>
        </div>
    )
}