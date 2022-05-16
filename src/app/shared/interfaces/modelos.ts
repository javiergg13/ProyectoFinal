export interface Componente {
    id: string,
    tipo_componente: string,
    descripcion: string,
    precio: number,
    modelo: string,
    marca: string,
    imagenes: Array<ImageBitmap>
}

export interface Gpu extends Componente{
    tecnologia: string,
    memoria_virtual: number,
    nucleos_cuda: number,
    nucleos_rt: number,
    nucleos_tensor: number,
    frecuencia_base: number,
    frecuencia_turbo: number,
    tdp: number,
    ancho: number,
    alto: number
}
export interface Cpu extends Componente{
    nucleos: number,
    hilos: number,
    memoria_cache: number,
    chipset: string,
    socket: number,
    frecuencia_base: number,
    frecuencia_turbo: number,
    tdp: number,
}

export interface PlacaBase extends Componente{
    chipset: string,
    socket: number,
    slots_ram: number,
    puetos_usb_2_0: number,
    puertos_usb_c: number,
    puertos_usb_3_2: number,
    puertos_hdmi: number,
    display_ports: number,
    tamaño: string
}
export interface DiscosDuros extends Componente{
    memoria: number,  
    velocidad_lectura: number,
    velocidad_escritura: number,
    tecnologia: string
}

export interface RAM extends Componente{
    memoria: number,  
    latencia: number,
    tecnologia: string
}

export interface Ventilacion extends Componente{
    tipo_ventilacion: string,
    led: boolean,
    tdp: number,
    ancho: number,
    alto: number,
    socket: string,
    rpm: number;
    tamaño_ventilador: number
}

export interface Psu extends Componente{
    potencia: number,  
    certificacion: string,
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