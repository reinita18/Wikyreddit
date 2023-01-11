export interface Post{
    id_post?: number;
    id_usuario?: number;
    titulo?: string;
    descripcion?: string;
    imagen_es?: string;
    fecha?: Date;
    etiquetas?: string;
    valoracion?: number;
    categoria?:string;
}
