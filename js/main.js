// Proseguendo l'esercitazione (snackone) in classe, creare una todolist dove l'utente potrà:
// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente
// Bonus:
// lavorate lato CSS, per rendere la todolist più carina seguendo la vostra creatività.
// Vi lascio un esempio di todolist.
//

const app = new Vue({
    el: '#app',
    data: {
    todo_list: ['Fare i compiti'
    ,'Fare la spesa'
    ,'Fare il bucato'],
    newTodo: '',
    placeholder:'Nuovo Todo',
    logo: { url : 'https://www.boolean.careers/images/misc/logo.png',
    alt:'logo_Boolean'
    }
  },
    methods: {

    addText(){
      if(this.newTodo!=''){
     this.todo_list.push(this.newTodo);}
     this.newTodo='';
    }
    ,
    remove(index){
    this.todo_list.splice(index,1);
  },
  // versione alternativa
  remove2(index){
    this.todo_list=this.todo_list.filter((elem,ind)=>{
    return index!=ind;})
  }
}
});
