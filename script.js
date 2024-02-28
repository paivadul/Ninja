class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log('El nombre del ninja es ' + this.nombre);
    }
    showStats(){
        // console.log('La salud del Ninja es ' + this.salud);    
        console.log(`La salud del Ninja es ${this.salud}, Su velocidad es de ${this.velocidad}`);
    }
    drinkShake(){
        this.salud+=10;
        console.log(`La salud del Ninja aumentó a ${this.salud}`);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();