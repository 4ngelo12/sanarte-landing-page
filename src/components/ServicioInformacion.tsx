import { useState } from "react";
import { FormularioReserva } from "./form-overlay/FormularioReserva";

export const ServicioInformacion = ({ title, image, description, price, duration, btnText }
    : { title: string, image: string, description: string, price: string, duration: string, btnText: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    // const handleReservar = (title: string) => {
    //     const URL =
    //         `https://api.whatsapp.com/send?phone=51955329677&text=Hola,%20quiero%20más%20información%20acerca%20de%20${title}`;

    //     window.open(URL, "_blank");
    // }

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-col w-[21.6rem] rounded-md">
            <picture>
                <source srcSet={`/img/${image}.webp`} type="image/webp" />
                <source srcSet={`/img/${image}.png`} type="image/png" />
                <img
                    loading="lazy"
                    className="w-full h-40 rounded-t-md"
                    src={`/img/${image}.webp`}
                    alt={`${title} image`}
                />
            </picture>

            <section
                className="servicio-contenedor text-center flex flex-col items-center justify-center rounded-b-md min-h-[23rem]"
            >
                <div className="my-auto px-5">
                    <h4 className="font-bold text-xl mb-3">{title}</h4>

                    <p className="text-[.965rem] ">
                        {description}
                    </p>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex gap-1">
                        <h4 className="font-semibold">Precio: </h4>
                        <p className="inline-block">S/ {price}</p>
                    </div>

                    <div className="flex gap-1">
                        <h4 className="font-semibold">Duración:</h4>
                        <p className="inline-block">{duration}</p>
                    </div>
                </div>

                <button
                    onClick={(toggleForm)}
                    className="mt-auto w-full bg-[#637558] hover:bg-[#4a6c34] text-white rounded-b-md p-2 font-semibold"
                >
                    {btnText}
                </button>

                <FormularioReserva isOpen={isOpen} onClose={(toggleForm)} title={title} />
            </section>


        </div >
    )
}
