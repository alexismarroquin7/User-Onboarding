import React from "react";

const Form = (props) => {

    const {values} = props;

    return (
        <form className="Form">
            <h2>Create a new user</h2>
            <label>Name:
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                />
            </label><br />
            <label>Email:
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                />
            </label><br />
            <label>Password:
                <input 
                    type="text"
                    name="password"
                    value={values.password}
                />
            </label><br />
            <label>Agree to Terms Of Service:
                <input 
                    type="checkbox"
                    name="tos"
                    value={values.tos}
                />
            </label><br />
            <button>Submit</button>
        </form>
    )
}

export default Form;