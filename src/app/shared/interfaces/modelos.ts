export interface Componente {
    tipo: string,
    descripcion: string,
    precio: number,
    modelo: string,
    marca: string,
    imagenes?: Array<ImageBitmap>
}

export interface Gpu extends Componente{
    aarquitectura: string,
    vram: number,
    tipo_memoria: string,
    nucleos_cuda: number,
    nucleos_rt: number,
    nucleos_tensor: number,
    frecuencia_base?: number,
    frecuencia_turbo: number,
    tdp: number,
    dimensiones: string
}
export interface Cpu extends Componente{
    nucleos: number,
    hilos: number,
    memoria_cache: number,
    chipset: string,
    socket: string,
    frecuencia_base: number,
    frecuencia_turbo: number,
    tdp: number,
}

export interface PlacaBase extends Componente{
    chipset: string,
    socket: string,
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
    tipo: string
}

export interface Pc {
    componentes: Array<Componente>
    tipo: string,
    precio: number,
    descripcion: string,
    imagenes?: Array<ImageBitmap>
}

export interface Usuario {
    nombre: string,
    apellidos: string,
    password: string,
    email: string,
    cp: number,
    telefono: number,
    pc_favoritos?: Array<Pc>,
    componente_favoritos?: Array<Componente>,
}