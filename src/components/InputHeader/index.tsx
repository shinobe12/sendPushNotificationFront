import axios from "axios"
import { useState, createContext, useEffect } from "react"

export function InputHeader({ handleHeader }: { handleHeader: (headerUrl: string) => void }) {

    const [modalImg, setModalImg] = useState(false)
    const [modalImgErro, setModalImgErro] = useState(false)

    const [imgHeader, setImgHeader] = useState("")

    const [dimensionsHeader, setDimensionsHeader] = useState({ height: 0, width: 0 })

    const [megabyte, setMegabyte] = useState(0)

    const [formatoHeader, setFormatoHeader] = useState("")

    const [erroFormato, setErroFormato] = useState(Boolean)
    const [upload, setUpload] = useState(false)
    const [download, setDownload] = useState(false)
    const [loading, setLoading] = useState(false)


    //header
    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const [linkImg, setLinkImage] = useState("")
    const handleImgHeader = async (e: any) => {
        //console.log(e.target.files)
        setImgHeader(URL.createObjectURL(e.target.files[0]))
        const file = e.target.files[0]

        const filebase64 = await convertBase64(e.target.files[0]) as string
        filebase64.length !== 0 && setUpload(true)

        setLinkImage(filebase64)
        handleHeader(filebase64)
        const byte = file.size // valor em byte
        file.type === "image/png" || file.type === "image/jpeg" ? setFormatoHeader("ok") : setFormatoHeader("erro")
        setMegabyte(byte * (0.000001)) // valor em MB
    }

    const [statusHeader, setStatusHeader] = useState(false)

    async function enviar(e: any) {
        try {
            setLoading(true)
            const { data, status } = await axios.post("https://base64api-f2b5a4f63a56.herokuapp.com/api/v1/decodefile", { name: `pagaso-${Date.now()}`, file: linkImg })
          
            setLoading(false)
        } catch (erro) {
         
            setLoading(false)
        }

    }

    //header
    useEffect(() => {
        const imgH = new Image()
        imgH.src = imgHeader
        imgH.onload = () => {
            setDimensionsHeader({ height: imgH.height, width: imgH.width })
        }
    }, [imgHeader])

    useEffect(() => {

        if (formatoHeader === "erro") {
            setErroFormato(true)
            setStatusHeader(false)
            return
        }
        else if (formatoHeader === "ok") {
            if (megabyte > 1) {
                setModalImgErro(true)
                setStatusHeader(false)
                return
            }
            if (dimensionsHeader.width === 936 && dimensionsHeader.height === 351) {
                setModalImg(true)
                setStatusHeader(true)
                return
            }
            else {
                setModalImgErro(true)
                setStatusHeader(false)
                return
            }
        }

    }, [dimensionsHeader.width, dimensionsHeader.height])

    //console.log(datas)
    return (
        <main>

            <label htmlFor="img" className={'text-slate-50 mt-3 dark:text-[#656565] animate-fade'}>Imagem pra o Header *</label>
            <div className="flex items-center  bg-white rounded-md">
                <input required className="cursor-pointer
                                mt-1 block w-full lg:p-3 animate-fade text-slate-300 text-slate-600
                                rounded-md dark:shadow-sm text-sm bg-slate-50
                                focus:outline-none dark:ring-1 dark:ring-[#EEEEEE]"

                    onChange={
                        handleImgHeader
                    } type="file" id="imgHeader" accept=".jpg, .jpeg, .png" />
                <button type="submit" onClick={enviar}>
                    {upload ? !loading?<svg xmlns="http://www.w3.org/2000/svg" color="" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" animate-fade lucide lucide-upload bg-white mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" /></svg>:<div role="status" className="flex justify-center mt-10">
                        <svg aria-hidden="true" className=" w-8 h-8 text-gray-600 animate-spin dark:text-zinc-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                       
                    </div>:null}

                    {download && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-download animate-fade"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>}
                </button>

            </div>


            <p className=" text-sm text-white dark:text-zinc-700 mb-2">Tamanho máximo: 1MB</p>

            {statusHeader === true ? <img src={imgHeader} width={50} className="mb-4 rounded-md" /> : ""}

            {modalImg &&
                <div className="">
                    <div className="fixed inset-0 dark:bg-zinc-700 dark:bg-opacity-40 bg-black bg-opacity-50 flex justify-center items-center animate-fade">
                        <div className="bg-[#fff] p-3 rounded-md flex w-[200px] justify-center">
                            <div className="">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                                </div>
                                <div className="p-2 text-center text-[#656565] font-semibold font-family-sans" ><p>Imagem anexada com sucesso!</p></div>
                                <div><button type="button" onClick={() => setModalImg(false)} className="bg-[#277FE3] transition  duration-300 hover:bg-[#2167B6] text-white font-family-sans rounded-md p-2 w-full">Ok</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {modalImgErro &&
                <div className="">
                    <div className="fixed inset-0 dark:bg-zinc-700 dark:bg-opacity-40 bg-black bg-opacity-50 flex justify-center items-center animate-fade">
                        <div className="bg-[#fff] p-3 rounded-md flex w-[200px] justify-center">
                            <div className="">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                                </div>
                                <div className="p-2 text-center text-[#656565] font-semibold font-family-sans" ><p>Verifique o tamanho ou as dimensões da imagem!</p></div>
                                <div><button type="button" onClick={() => setModalImgErro(false)} className="bg-[#277FE3] transition  duration-300 hover:bg-[#2167B6] text-white font-family-sans rounded-md p-2 w-full">Ok</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {erroFormato &&
                <div className="">
                    <div className="fixed inset-0 dark:bg-zinc-700 dark:bg-opacity-40 bg-black bg-opacity-50 flex justify-center items-center animate-fade">
                        <div className="bg-[#fff] p-3 rounded-md flex w-[200px] justify-center">
                            <div className="">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-x"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" /></svg>
                                </div>
                                <div className="p-2 text-center text-[#656565] font-semibold font-family-sans" ><p>Submeta apenas imagem no formato recomendado!</p></div>
                                <div><button type="button" onClick={() => setErroFormato(false)} className="bg-[#277FE3] transition  duration-300 hover:bg-[#2167B6] text-white font-family-sans rounded-md p-2 w-full">Ok</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </main>

    );
};