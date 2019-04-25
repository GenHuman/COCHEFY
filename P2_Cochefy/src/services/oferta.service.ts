import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Oferta } from "../models/oferta.model";

@Injectable()
export class OfertaService{

    private ofertasRef=this.db.list<Oferta>('OfertaFirebase');


    constructor(private db:AngularFireDatabase){}

    addOferta(value: Oferta){
       var ref = this.ofertasRef.push(value);
       value.id = ref.key;
       return this.updateOferta(value);
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
