import './App.css';
import Form from "./components/Form"
import React, {useState} from "react";

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (name, value) => {
    
  }

  return (
    <div className="App">
      <Form 
        values={formValues}

      />
    </div>
  );
}

export default App;
