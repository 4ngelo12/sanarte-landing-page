import { useForm } from 'react-hook-form'
import { Fragment } from 'react/jsx-runtime';
import './formularioReserva.scss';

export const FormularioReserva = ({ title, isOpen, onClose }: { title: string, isOpen: boolean, onClose: () => void }) => {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const onSubmit = handleSubmit((data) => { });

    return (
        <Fragment>
            {
                isOpen && (
                    <div className='overlay'>
                        <div className=' overlay__background' onClick={onClose} />
                        <div className='rounded-md overlay__container'>
                            <div className='overlay__controls'>
                                <button className='overlay__close' type='button' onClick={onClose}></button>
                            </div>
                            <form className=' p-6' onSubmit={onSubmit}>
                                <legend className='mb-3 font-semibold text-2xl'>Reserva de {title}</legend>

                                <div>
                                    <label htmlFor='name' className='block text-sm font-semibold leading-6
                                         text-gray-900 text-start'>
                                        Nombres
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        placeholder='Nombre'
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Este campo es requerido',
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'El texto ingresado debe ser más largo',
                                            },
                                        })}
                                        className='block w-full rounded-md border-0 px-3.5 py-2 my-2
                                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 
                                            focus:ring-2 focus:ring-inset 
                                            focus:ring-amber-700 sm:text-sm sm:leading-6'
                                    />

                                    {
                                        errors.name && (
                                            <span className='text-red-500 text-sm mt-1'>
                                                {String(errors.name.message)}
                                            </span>
                                        )
                                    }
                                </div>

                                <div>
                                    <label htmlFor='lastname' className='block text-sm font-semibold leading-6
                                         text-gray-900 text-start'>
                                        Apellidos
                                    </label>
                                    <input
                                        type='text'
                                        id='lastname'
                                        placeholder='Apellidos'
                                        {...register('lastname', {
                                            required: {
                                                value: true,
                                                message: 'Este campo es requerido',
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'El texto ingresado debe ser más largo',
                                            },
                                        })}
                                        className='block w-full rounded-md border-0 px-3.5 py-2 my-2
                                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 
                                            focus:ring-2 focus:ring-inset 
                                            focus:ring-amber-700 sm:text-sm sm:leading-6'
                                    />

                                    {
                                        errors.lastname && (
                                            <span className='text-red-500 text-sm mt-1'>
                                                {String(errors.lastname.message)}
                                            </span>
                                        )
                                    }
                                </div>

                                <div>
                                    <label htmlFor='phone' className='block text-sm font-semibold leading-6
                                         text-gray-900 text-start'>
                                        Número de Teléfono
                                    </label>
                                    <input
                                        type='number'
                                        id='phone'
                                        placeholder='Teléfono'
                                        {...register('phone', {
                                            required: {
                                                value: true,
                                                message: 'Este campo es requerido',
                                            },
                                            minLength: {
                                                value: 9,
                                                message: 'El número de teléfono debe tener al menos 9 dígitos',
                                            },
                                        })}
                                        className='block w-full rounded-md border-0 px-3.5 py-2 mt-2
                                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 
                                            focus:ring-2 focus:ring-inset 
                                            focus:ring-amber-700 sm:text-sm sm:leading-6'
                                    />

                                    {
                                        errors.phone && (
                                            <span className='text-red-500 text-sm mt-1'>
                                                {String(errors.phone.message)}
                                            </span>
                                        )
                                    }
                                </div>

                                <div className='mt-2'>
                                    <button
                                        type='submit'
                                        className='block w-full rounded-md bg-[#637558] px-3.5 py-2.5 text-center 
                                        text-sm font-semibold text-white shadow-sm hover:bg-[#7d976c]'
                                    >
                                        Enviar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}