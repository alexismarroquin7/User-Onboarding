import './App.css';
import Form from "./components/Form"
import User from "./components/User"
import React, {useState, useEffect} from "react";
import axios from "axios";
import formSchema from "./validation/formSchema"
import * as yup from 'yup'
 

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
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const postNewUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map((user, idx) => {
          return (
            <User key={idx} details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
