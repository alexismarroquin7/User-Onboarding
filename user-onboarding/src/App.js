import './App.css';
import Form from "./components/Form"
import React, {useState} from "react";
import axios from "axios";
import formSchema from "./validation/formSchema"

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

const initialUsers = []
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState();



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
