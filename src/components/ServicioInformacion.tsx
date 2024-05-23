import { useState } from "react";
import { FormularioReserva } from "./form-overlay/FormularioReserva";

interface ServicioInformacionProps {
    title: string;
    image: string;
    description?: string;
    price?: string;
    duration?: string;
    include?: string[];
    cardMinHeight?: string; // Solo se envia si se quiere cambiar la altura del card en px, rem, etc.
    btnText: string;
}


export const ServicioInformacion = ({ title, image, description, price, duration, include, cardMinHeight = "min-h-[23rem]",
    btnText }: ServicioInformacionProps) => {
    const [isOpen, setIsOpen] = useState(false);

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
                className={`servicio-contenedor text-center flex flex-col items-center justify-center rounded-b-md ${cardMinHeight}`}
            >
                <div className="my-auto px-5">
                    <h4 className="font-bold text-xl mb-3">{title}</h4>

                    {
                        description &&
                        <p className="text-[.965rem] ">
                            {description}
                        </p>
                    }
                </div>

                {
                    include &&
                    <div className="flex flex-col gap-1 px-2.5 my-2">
                        <h4 className="ms-3 text-start font-semibold">Incluye:</h4>
                        <ul className="ms-7 text-start list-disc text-[.965rem]">
                            {
                                include.map((index, item) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                }

                <div className="flex gap-4 px-2.5 mb-4">
                    {
                        price &&
                        <div className="flex gap-1">
                            <h4 className="font-semibold">Precio: </h4>
                            <p className="inline-block">S/ {price}</p>
                        </div>

                    }
                    {
                        duration &&
                        <div className="flex gap-1">
                            <h4 className="font-semibold">Duración:</h4>
                            <p className="inline-block">{duration}</p>
                        </div>
                    }

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
