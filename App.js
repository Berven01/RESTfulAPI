.app {
 padding: 30px;
 background-color: floralwhite;
}

.todo {
 align-items: center;
 display: flex;
 font-size: 18px;
 justify-content: space-between;
}


------------------

App.js


import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
 const [todos, setTodos] = React.useState([
 {
 text: "This is a sampe todo",
 isDone: false
 }
 ]);
}



const addTodo = text => {
 const newTodos = [...todos, { text }];
 setTodos(newTodos);
 };






const removeTodo = index => {
 const newTodos = [...todos];
 newTodos.splice(index, 1);
 setTodos(newTodos);
 };






return (
 <div className="app">
 <div className="container">
 <h1 className="text-center mb-4">Todo List</h1>
 <FormTodo addTodo={addTodo} />
 <div>
 {todos.map((todo, index) => (
 <Card>
 <Card.Body>
 <Todo
 key={index}
 index={index}
 todo={todo}
 markTodo={markTodo}
 removeTodo={removeTodo}
 />
 </Card.Body>
 </Card>
 ))}
 </div>
 </div>
 </div>
 );








function Todo({ todo, index, markTodo, removeTodo }) {
 return (
 <div
 className="todo"
 
>
 <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
 <div>
 <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
 <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
 </div>
 </div>
 );
}







function FormTodo({ addTodo }) {
 const [value, setValue] = React.useState("");

 const handleSubmit = e => {
 e.preventDefault();
 if (!value) return;
 addTodo(value);
 setValue("");
 };

 return (
 <Form onSubmit={handleSubmit}> 
<Form.Group>
 <Form.Label><b>Add Todo</b></Form.Label>
 <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
 </Form.Group>
 <Button variant="primary mb-3" type="submit">
 Submit
 </Button>
 </Form>
 );
}









------------------



importReactfrom"react";	
	import"./App.css";
	import{Button,Card,Form}from'react-bootstrap';
	import'bootstrap/dist/css/bootstrap.min.css';
	functionTodo({todo,index,markTodo,removeTodo }){
	return(
	<div
	className="todo"
	>
	<spanstyle={{textDecoration: todo.isDone? "line-through": ""}}>{todo.text}</span>
	<div>
	<Buttonvariant="outline-success"onClick={()=>markTodo(index)}>✓</Button>{' '}
	<Buttonvariant="outline-danger"onClick={()=>removeTodo(index)}>✕</Button>
	</div>
	</div>
	);
	}
	functionFormTodo({addTodo }){
	const[value,setValue]=React.useState("");
	consthandleSubmit=e=>{
	e.preventDefault();
	if(!value)return;
	addTodo(value);
	setValue("");
	};
	return(
	<FormonSubmit={handleSubmit}>
	<Form.Group>
	<Form.Label><b>Add Todo</b></Form.Label>
	<Form.Controltype="text"className="input"value={value}onChange={e=>setValue(e.target.value)}placeholder="Add new todo"/>
	</Form.Group>
	<Buttonvariant="primary mb-3"type="submit">
	Submit
	</Button>
	</Form>
	);
	}
	functionApp(){
	const[todos,setTodos]=React.useState([
	{
	text: "This is a sampe todo",
	isDone: false
	}
	]);
	constaddTodo=text=>{
	constnewTodos=[...todos,{text }];
	setTodos(newTodos);
	};
	constmarkTodo=index=>{
	constnewTodos=[...todos];
	newTodos[index].isDone=true;
	setTodos(newTodos);
	};
	constremoveTodo=index=>{
	constnewTodos=[...todos];
	newTodos.splice(index,1);
	setTodos(newTodos);
	};
	return(
	<divclassName="app">
	<divclassName="container">
	<h1className="text-center mb-4">Todo List</h1>
	<FormTodoaddTodo={addTodo}/>
	<div>
	{todos.map((todo,index)=>(
	<Card>
	<Card.Body>
	<Todo
	key={index}
	index={index}
	todo={todo}
	markTodo={markTodo}
	removeTodo={removeTodo}
	/>
	</Card.Body>
	</Card>
	))}
	</div>
	</div>
	</div>
	);
	}
	exportdefaultApp;

