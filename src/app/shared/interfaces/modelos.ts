export interface Componente {
    id: string,
    tipo_componente: string,
    descripcion: string,
    nucleos?: number,
    hilos?: number,
    precio?: number,
    memoria_cache?: number,
    socket?: number,
    modelo?: string,
    chipset?: string,
    slots_ram?: number,
    puetos_usb_2_0?: number,
    puertos_usb_c?: number,
    puertos_usb_3_2?: number,
    puertos_hdmi?: number,
    display_ports?: number,
    frecuencia_base?: number,
    frecuencia_turbo?: number,
    memoria?: number,
    memoria_virtual?: number,
    nucleos_cuda?: number,
    nucleos_rt?: number,
    nucleos_tensor?: number,
    tdp?: number,
    marca?: string,
    latencia?: number,
    tecnologia?: string,
    imagenes: Array<ImageBitmap>
}

export interface Pc {
    id: string,
    componentes: Array<Componente>
    precio: number,
    descripcion?: string,
    imagenes?: Array<ImageBitmap>
}

export interface Usuario {
    id: string,
    nombre: string,
    apellidos: string,
    password: string,
    email: string,
    cp: number,
    telefono: number,
    pc_favoritos?: Array<Pc>,
    componente_favoritos?: Array<Componente>,
}