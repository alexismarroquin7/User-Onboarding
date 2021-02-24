import React from "react";

const Form = (props) => {

    const {values, change} = props;

    const handleChange = e => {
        const {name, value, checked, type} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        console.log(name, value)
        change(name, valueToUse);
    }

    return (
        <form className="Form">
            <h2>Create a new user</h2>
            <label>Name:
                <input 
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    />
            </label><br />
            <label>Email:
                <input 
                    autoComplete="off"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    
                    />
            </label><br />
            <label>Password:
                <input 
                    autoComplete="off"
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    />
            </label><br />
            <label>Agree to Terms Of Service:
                <input 
                    autoComplete="off"
                    type="checkbox"
                    name="tos"
                    value={values.tos}
                    onChange={handleChange}
                />
            </label><br />
            <button>Submit</button>
        </form>
    )
}

export default Form;