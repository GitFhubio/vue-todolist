const app = new Vue({
    el: '#app',
    data: {
    todo_list: ['Fare gli auguri a Davide'
    ,'Passare quanto prima ad Eolo'
    ,'Cercare di non trattare male le persone che usano jQuery'],
    newTodo: '',
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
  remove2(index){
    this.todo_list=this.todo_list.filter((elem,ind)=>{
    return index!=ind;})
  }
}
});
