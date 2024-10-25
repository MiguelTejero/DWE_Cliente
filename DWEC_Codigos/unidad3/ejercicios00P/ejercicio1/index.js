class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    eat(){
        if (this.stomach.length < 10){
            return this.stomach.push("moreFood");
        }
        else{
            return "El estomago esta lleno";
        }
    }

    poop(){
        return this.stomach = [];
    }
    toString(){
        return "Tu nombre es" + this.name + "tu edad es" + this.age;
    }
}
