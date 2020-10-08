import axios from "axios";

const  url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo{
    id:number;
    title:string;
    completed:boolean;
}

function logTodo(id:number, title:string, completed:boolean) {
    console.log(id, title, completed);
}

axios.get(url).then(response =>{
     const data = response.data as Todo;
     const id = data.id;
     const title = data.title;
     const  completed = data.completed;
     logTodo(id,title,completed);
})
