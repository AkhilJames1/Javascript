
        // class Animal{
        //     constructor(name, color){
        //         this.name = name;
        //         this.color =  color;
        //     }
        //     sayHi(){
        //         console.log(`Hi ${this.name}` )
        //     }
        //     myColor()
        //     {
        //         console.log(`My color is ${this.color}`)
        //     }
        // }
        // let ani = new Animal("Lion","Brown")
        // ani.sayHi()
        // ani.myColor()



        // class Animal2 extends Animal{
        //     hunting(){
        //         console.log(`${this.name} is hunting`)
        //     }

        // }
        // let mon = new Animal2("Tiger","Orange");
        // mon.hunting()
        // mon.sayHi()
        // mon.myColor()




        // class Students{
        //     constructor(name,rollNo){
        //         this.name =name;
        //         this.rollNo = rollNo;
        //     }
        //          hello(){
        //             console.log(`My name is ${this.name}`)
        //         }
        //         roll(){
        //             console.log(`My roll number is ${this.rollNo}`)
        //         }

        // }
        // class Grade extends Students{
        //     constructor(name,rollNo,point){
        //         super(name,rollNo);
                
            
        //         this.point = point;
            
        //     }
        //     mark(){

        //         console.log(`My mark is ${this.point}`)
        //     }
        // }

        // let stud = new Students("Tony",1,100);
        // let mrk = new Grade("Arun",2,100)
        // stud.hello()
        // stud.roll()
        // mrk.hello()
        // mrk.mark()





        class Animal {

            constructor(name) {
              this.name = name;
            }
          
          }
          
          class Rabbit extends Animal {
            constructor(name) {
                super(name);
              this.name = name;
              this.created = Date.now();
            }
          }
          
          let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
          console.log(rabbit.name);
