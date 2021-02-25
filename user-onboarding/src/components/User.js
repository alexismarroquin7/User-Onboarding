import React from "react";

const User = ({details}) => {

    console.log(details)
    
    return (
        <div className="User">
            <h1>Success! Here are your credentials.</h1>
            <div>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <p>Name:<br />
                        <span>{details.name}</span>
                        </p>
                    </li>
                    
                    <li>
                        <p>Email:<br />
                        <span>{details.email}</span>
                        </p>
                    </li>
                    
                    <li>
                        <p>Password:<br />
                        <span>{details.password}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default User;