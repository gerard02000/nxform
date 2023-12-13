'use server'

import fs from 'node:fs'

export async function handle(formData) {
    const nombre = formData.get('nombre')
    const apellidos = formData.get('apellidos')
    const avatar = formData.get('avatar')
    const password = formData.get('password');
    const opcionesRadio = formData.getAll('opcion'); // Obtener todas las opciones seleccionadas
    const opcionesCheckbox = formData.getAll('opcionCheckbox'); // Obtener todas las opciones seleccionadas
    const seleccion = formData.get('seleccion');
    const mensaje = formData.get('mensaje');
    const fechaHora = formData.get('fechaHora');
    const mes = formData.get('mes');
    const semana = formData.get('semana');
    const rango = formData.get('rango');
    const numero = formData.get('numero');
    const busqueda = formData.get('busqueda');
    const telefono = formData.get('telefono');
    const email = formData.get('email');
    const url = formData.get('url');

    const buffer = await avatar.arrayBuffer()
    const bytes = new Uint8Array(buffer)

    console.log('Datos del formulario:');
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Password:', password);
    console.log('Opciones de Radio:', opcionesRadio);
    console.log('Opciones de Checkbox:', opcionesCheckbox);
    console.log('Selección:', seleccion);
    console.log('Mensaje:', mensaje);
    console.log('Fecha y Hora:', fechaHora);
    console.log('Mes:', mes);
    console.log('Semana:', semana);
    console.log('Rango:', rango);
    console.log('Número:', numero);
    console.log('Búsqueda:', busqueda);
    console.log('Teléfono:', telefono);
    console.log('Email:', email);
    console.log('URL:', url);

    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
        fs.writeFileSync('public/' + avatar.name, bytes, 'binary')
        return { type: 'success', message: 'Datos guardados' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }

}
