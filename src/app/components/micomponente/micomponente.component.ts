import {Component } from '@angular/core';

@Component({
    selector:'micomponente',
    template: `
        <h1>{{titulo}}</h1>
        <h2>{{year}}</h2>
        <p>{{comentario}}</p>
    `
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    
    
    constructor(){
        this.titulo = "Hola esta es la propiedad titulo del compoennete"
        this.comentario = "Esto e sun comentario"
        this.year = 2020;
        console.log("Componente micomponente cargado!!");
        console.log(this.comentario, this.comentario, this.year);
    }

}

//Una ves creo mi componente me dirijo al app.module.ts para tenerlo disponible en cualqueir aprte de la aplicación