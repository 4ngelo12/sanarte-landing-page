
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function ContactoForm() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <form onSubmit={onSubmit} className="mx-auto max-w-xl mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
                        Nombre:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="nombre"
                            {...register('nombre', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido',
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El texto ingresado debe ser más largo',
                                },
                            })}
                            className="block w-full rounded-md border-0 px-3.5 py-2 
                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300
                            placeholder:text-gray-500 focus:ring-2 focus:ring-inset 
                            focus:ring-amber-700 sm:text-sm sm:leading-6"
                        />

                        {
                            errors.nombre && (
                                <span className="text-red-500 text-sm mt-1">{String(errors.nombre.message)}</span>
                            )
                        }
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'El campo email es requerido',
                                },
                                pattern: {
                                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                                    message: 'El texto no parece un correo válido',
                                }
                            })}
                            id="email"
                            placeholder='correo@mail.com'
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 
                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300
                            placeholder:text-gray-500 focus:ring-2 focus:ring-inset 
                            focus:ring-amber-700 sm:text-sm sm:leading-6"
                        />

                        {
                            errors.email && (
                                <span className="text-red-500 text-sm mt-1">{String(errors.email.message)}</span>
                            )
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">
                        Teléfono:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            {...register('telefono', {
                                required: {
                                    value: true,
                                    message: 'El campo teléfono es requerido',

                                }
                            })}
                            id="telefono"
                            placeholder='(01) 456-7890'
                            className="block w-full rounded-md border-0 px-3.5 py-2 
                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300
                            placeholder:text-gray-500 focus:ring-2 focus:ring-inset 
                            focus:ring-amber-700 sm:text-sm sm:leading-6"
                        />

                        {
                            errors.telefono && (
                                <span className="text-red-500 text-sm mt-1">{String(errors.telefono.message)}</span>
                            )
                        }
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-gray-900">
                        Mensaje
                    </label>
                    <div className="mt-2">
                        <textarea
                            {...register('mensaje', {
                                required: {
                                    value: true,
                                    message: 'El campo mensaje es requerido',
                                },
                                minLength: {
                                    value: 10,
                                    message: 'El mensaje debe tener al menos 10 caracteres'
                                }
                            })}
                            id="mensaje"
                            rows={8}
                            className="block w-full rounded-md border-0 px-3.5 py-2 
                            text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300
                            placeholder:text-gray-500 focus:ring-2 focus:ring-inset 
                            focus:ring-amber-700 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />

                        {
                            errors.mensaje && (
                                <span className="text-red-500 text-sm mt-1">{String(errors.mensaje.message)}</span>
                            )
                        }
                    </div>
                </div>

            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-[#637558] px-3.5 py-2.5 text-center text-sm font-semibold
                     text-white shadow-sm hover:bg-[#7d976c]"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
}