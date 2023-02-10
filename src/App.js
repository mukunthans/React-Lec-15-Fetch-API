import { useState,useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType,setReqType] = useState('posts');
  const [items,setItems] =useState([]);

  useEffect(() => {

    const fetchItems = async () => {
    try{
      const response = await fetch(`${API_URL}${reqType}`);
      if(!response.ok) throw Error('failed to fetch data');
      const data = await response.json();
      setItems(data);
    }catch(err){
      console.log(err.message);
    }
  }

  fetchItems();

  },[reqType])



  return (
    <div className="App">
      <Form  reqType={reqType} setReqType={setReqType}/>
      {/* <List items={items}/> */}
      <Table  items={items}/>


    </div>

  );
}

export default App;
