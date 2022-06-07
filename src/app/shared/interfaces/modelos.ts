export interface Componente {
    tipo: string,
    descripcion: string,
    precio: number,
    modelo: string,
    marca: string,
    tdp?: number,
    imgs?: Array<string>
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
    dimensiones: string
}
export interface Cpu extends Componente{
    nucleos: number,
    hilos: number,
    memoria_cache_l2?: number,
    memoria_cache_l3: number,
    socket: string,
    frecuencia_base: number,
    frecuencia_turbo: number,
    graficos_integrados: false

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

export interface PlacaBase extends Componente{
    puetos_usb_2_0: number,
    puertos_usb_c: number,
    puertos_usb_3_2: number,
    tamaño: string,
    dimensiones: string,
    rgb: boolean
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
    tecnologia: string,
    velocidad: number
}

export interface Ventilacion extends Componente{
    tipo_ventilacion: string,
    ancho?: number,
    rgb: boolean,
    alto?: number,
    socket: string,
    tamaño?: number
}

export interface Psu extends Componente{
    potencia: number,  
    certificacion: string,
    cableado: string
}

export interface Pc {
    componentes: Array<Componente>
    tipo: string,
    precio: number,
    descripcion: string,
    tdp: number,
    imgs?: Array<string>
}
export interface PcFavorito extends Pc {
    nombre: string,
    descripcion_propia: string
}

export interface Usuario {
    nombre: string,
    apellidos: string,
    password: string,
    email: string,
    cp: number,
    telefono: number,
    pc_favoritos?: PcFavorito[],
    componente_favoritos?: Componente[],
}
export interface IFilterObject {
    filterByText: string;
    filterByStatus: boolean | null;
  }