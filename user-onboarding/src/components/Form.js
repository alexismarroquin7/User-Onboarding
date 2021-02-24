import React from "react";

const Form = (props) => {

    const {values} = props;

    return (
        <form className="Form">
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
        </form>
    )
}

export default Form;