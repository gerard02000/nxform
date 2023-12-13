'use client'
import { SubmitButton } from '@/app/submitButton'
import { handle } from '@/app/actions'
import { toast } from 'react-hot-toast';

export function Formulario() {
    async function wrapper(data) {
        const { type, message } = await handle(data);
        if (type === 'success') toast.success(message)
        if (type === 'error') toast.error(message)
    }

    return (
        <form onSubmit={wrapper}>
            <input type="text" required name="nombre" placeholder="Introduce tu nombre" />
            <input type="text" required name="apellidos" placeholder="Introduce tus apellidos" />

            <label>
                Contraseña:
                <input type="password" required name="password" />
            </label>

            <label>
                Opciones de radio:
                <input type="radio" name="opcion" value="opcion1" /> Opción 1
                <input type="radio" name="opcion" value="opcion2" /> Opción 2
                <input type="radio" name="opcion" value="opcion3" /> Opción 3
            </label>

            <label>
                Opciones de checkbox:
                <input type="checkbox" name="opcion1" /> Opción 1
                <input type="checkbox" name="opcion2" /> Opción 2
                <input type="checkbox" name="opcion3" /> Opción 3
            </label>

            <label>
                Select con 3 opciones:
                <select name="seleccion">
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                </select>
            </label>

            <label>
                Textarea:
                <textarea name="mensaje" placeholder="Introduce tu mensaje"></textarea>
            </label>

            <label>
                Fecha y hora:
                <input type="datetime-local" name="fechaHora" />
            </label>

            <label>
                Mes:
                <input type="month" name="mes" />
            </label>

            <label>
                Semana:
                <input type="week" name="semana" />
            </label>

            <label>
                Rango:
                <input type="range" name="rango" />
            </label>

            <label>
                Número:
                <input type="number" name="numero" />
            </label>

            <label>
                Búsqueda:
                <input type="search" name="busqueda" />
            </label>

            <label>
                Teléfono:
                <input type="tel" name="telefono" />
            </label>

            <label>
                Correo electrónico:
                <input type="email" name="email" />
            </label>

            <label>
                URL:
                <input type="url" name="url" />
            </label>

            <SubmitButton />
        </form>
    )
}
