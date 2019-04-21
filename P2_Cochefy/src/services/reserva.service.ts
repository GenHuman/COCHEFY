import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Reserva } from "../models/reserva.model";

@Injectable()
export class ReservaService{

    private reservasRef=this.db.list<Reserva>('AgendaFirebase');


    constructor(private db:AngularFireDatabase){}

    addReserva(value: Reserva){
       return this.reservasRef.push(value);
    }

    getReservas(){
      return this.reservasRef;
    }

    updateReserva(value: Reserva){
		return this.reservasRef.update(value.id,value);
    }

    removeReserva(value: Reserva){
		return this.reservasRef.remove(value.id);
    }
}
