function employe(name,salary,age,designation,coluge){
    this.name=name;
    this.salary=salary;
    this.age=age;
    this.designation=designation;
    this.coluge=coluge;

    this.display= function(){
        console.log(this.name)
        console.log(this.salary)
        console.log(this.age)
        console.log(this.designation)
        console.log(this.coluge)  
    }
}

const employe1= new employe("Atik", 30000, 32, 'SQA',['rakib','Akib','bakib','sakib']);
const employe2= new employe("Atkia Fahmida", 20000, 26, 'Web dev', ['Soma','sornali','bornali','rthu']);
const employe3= new employe("Moriam Sorna", 40000, 25, 'Marketer', ['Alvi','Rafi','bafi','cafi']);

 employe1.display();
 employe2.display();
 employe3.display();