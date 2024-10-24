import { useState, createContext, useEffect } from "react"

export function ImageInput(children:any) {

    const [category, setCategory] = useState("-- Categoria --")
    const [selectCategory, setSelectCategory] = useState(false)
    const [modalImg, setModalImg] = useState(false)
    const [modalImgErro, setModalImgErro] = useState(false)

    const [imgHeader, setImgHeader] = useState("")
    const [imgBanner, setImgBanner] = useState("")
    const [dimensionsHeader, setDimensionsHeader] = useState({ height: 0, width: 0 })
    const [dimensionsBanner, setDimensionsBanner] = useState({ height: 0, width: 0 })
    const [megabyte, setMegabyte] = useState(0)
    const [tamanhoErro, setTamanhoErro] = useState(false)
    const [formatoHeader, setFormatoHeader] = useState("")
    const [formatoBanner, setFormatoBanner] = useState("")
    const [erroFormato, setErroFormato] = useState(Boolean)

    //header
    const handleImgHeader = (e: any) => {
        //console.log(e.target.files)
        setImgHeader(URL.createObjectURL(e.target.files[0]))
        const file = e.target.files[0]
        const byte = file.size // valor em byte
        file.type === "image/png" || file.type === "image/jpeg" ? setFormatoHeader("ok") : setFormatoHeader("erro")
        setMegabyte(byte * (0.000001)) // valor em MB
    }

    //banner
    const handleImgBanner = (e: any) => {
        setImgBanner(URL.createObjectURL(e.target.files[0]))
        const file = e.target.files[0]
        const byte = file.size // valor em byte
        file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg" ? setFormatoBanner("ok") : setFormatoBanner("erro")
        setMegabyte(byte * (0.000001)) // valor em MB
    }

    const [statusHeader, setStatusHeader] = useState(false)
    const [statusBanner, setStatusBanner] = useState(false)

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

    }, [ dimensionsHeader.width, dimensionsHeader.height])

    //Banner
    useEffect(() => {
        const imgB = new Image()
        imgB.src = imgBanner
        imgB.onload = () => {
            setDimensionsBanner({ height: imgB.height, width: imgB.width })
        }
    }, [imgBanner])

    //console.log(modalImgErro)
    //console.log(formatoBanner)

    useEffect(() => {
        
        if (formatoBanner === "erro") {
            setErroFormato(true)
            setStatusBanner(false)
            return
        }
        else if (formatoBanner === "ok") {
            if (megabyte > 2) {
                setModalImgErro(true)
                setStatusBanner(false)
                return
            }
            if (dimensionsBanner.width === 1170 && dimensionsBanner.height === 642) {
                setStatusBanner(true)
                setModalImg(true)
                return
            }
            else {
                setModalImgErro(true)
                setStatusBanner(false)
                return
            }
        }
    }, [ dimensionsBanner.width, dimensionsBanner.height])

    //header

    const datas = {
        imageHeader: imgHeader,
        imageBanner: imgBanner,
        tags: [category]
    }
    
    //console.log(datas)
    return (
        <main>

            <label htmlFor="img" className={'text-slate-50 mt-3 dark:text-[#656565] animate-fade'}>Imagem pra o Header *</label>
            <input required className="cursor-pointer
                                mt-1 block w-full lg:p-3 animate-fade text-slate-300 text-slate-600
                                rounded-md dark:shadow-sm text-sm bg-slate-50
                                focus:outline-none dark:ring-1 dark:ring-[#EEEEEE]"
                onChange={
                    handleImgHeader
                } type="file" id="imgHeader" accept=".jpg, .jpeg, .png" />
            <p className=" text-sm text-white dark:text-zinc-700 mb-2">Tamanho máximo: 1MB</p>

            {statusHeader === true ? <img src={imgHeader} width={50} className="mb-4 rounded-md" /> : ""}

            <label htmlFor="img" className={'text-slate-50 mt-3 dark:text-[#656565] animate-fade'}>Imagem pra o Banner *</label>
            <input required placeholder="img" className="cursor-pointer
                                mt-1 block w-full lg:p-3 animate-fade text-slate-300 text-slate-600
                                rounded-md dark:shadow-sm text-sm bg-slate-50
                                focus:outline-none dark:ring-1 dark:ring-[#EEEEEE]"
                onChange={
                    handleImgBanner
                } type="file" id="imgBanner" accept=".jpg, .jpeg, .png" />
            <p className=" text-sm text-white dark:text-zinc-700 mb-2">Tamanho máximo: 2MB</p>
            {statusBanner === true ? <img src={imgBanner} width={50} className="mb-4 rounded-md" /> : ""}

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