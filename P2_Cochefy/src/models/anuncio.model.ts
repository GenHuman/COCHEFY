export interface Anuncio {
 id: string;//manejará el id cuando se utiliza firebase
 nombreUsuario: string;
 nPersonas: number;
 fSalida: string;
 fRecogida: string;
 localizacion: string;
 distancia: number;
 asegurado: boolean;
 cancelacion: boolean;
 alquilado: boolean;
}
