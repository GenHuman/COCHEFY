import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Anuncio } from "../models/anuncio.model";

@Injectable()
export class AnuncioService{

    private anunciosRef=this.db.list<Anuncio>('AnunciosFirebase');


    constructor(private db:AngularFireDatabase){}

    addAnuncio(value: Anuncio){
       return this.anunciosRef.push(value);
    }

    getAnuncios(){
      return this.anunciosRef;
    }

    updateAnuncio(value: Anuncio){
		return this.anunciosRef.update(value.id,value);
    }

    removeAnuncio(value: Anuncio){
		return this.anunciosRef.remove(value.id);
    }
}
