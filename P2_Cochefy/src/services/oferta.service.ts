import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Oferta } from "../models/oferta.model";

@Injectable()
export class OfertaService{

    private ofertasRef=this.db.list<Oferta>('AgendaFirebase');


    constructor(private db:AngularFireDatabase){}

    addOferta(value: Oferta){
       return this.ofertasRef.push(value);
    }

    getOfertas(){
      return this.ofertasRef;
    }

    updateOferta(value: Oferta){
		return this.ofertasRef.update(value.id,value);
    }

    removeOferta(value: Oferta){
		return this.ofertasRef.remove(value.id);
    }
}
