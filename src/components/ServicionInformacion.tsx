export const ServicionInformacion = ({ title, image, description, price, benefits }
    : { title: string, image: string, description: string, price: string, benefits: string[] }) => {

    const benefitsList = benefits.map((benefit) => {
        return (
            <li className="ms-6">{benefit}</li>
        )
    })

    const handleReservar = (title: string) => {
        const URL = `https://api.whatsapp.com/send?phone=51955329677&text=Hola,%20quiero%20más%20información%20acerca%20de%20${title}`;

        window.open(URL, "_blank");
    }

    return (

        <>
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>

            <picture className="my-5 md:flex md:justify-center">
                <source srcSet={`../img/${image}.webp`} type="image/webp" />
                <source srcSet={`../img/${image}.png`} type="image/png" />
                <img
                    loading="lazy"
                    className="md:h-96 md:w-[80%]"
                    src={`../img/${image}.webp`}
                    alt='{title} image' />
            </picture>

            <div className="mx-8 my-4">
                <h3 className="text-2xl font-semibold">Descripción</h3>

                <p className="mb-4">
                    {description}
                </p>

                <h3 className="text-2xl font-semibold">Beneficios</h3>

                <ol className="mb-4">
                    {benefitsList}
                </ol>

                <h3 className="text-2xl font-semibold">Precio</h3>

                <p className="font-semibold text-lg">S/. {price}</p>

                <button
                    className="bg-[#637558] hover:bg-[#4a6c34] text-white font-semibold py-2 px-6 rounded-md w-full md:w-auto mt-4"
                    onClick={() => handleReservar(title)}
                >
                    Reservar
                </button>
            </div>
        </>
    )
}