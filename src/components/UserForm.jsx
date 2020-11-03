import React, {useState} from 'react'

const UserForm = props => {

    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");

    const handleSubmit = e => {
        e.preventDefault();

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }


    return(
        <>
        <form className="col-5 mx-auto my-5" onSubmit={handleSubmit }>
            <div className="form-group">
                <label>User First Name: </label>
                <input 
                    type="text"  
                    className="form-control"
                    firstname="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span className="text-danger">{ firstName.length > 1 ? "" : "First Name must be at least two characters long" }</span>
            </div>
            <div className="form-group">
                <label>User Last Name: </label>
                <input 
                    type="text"  
                    className="form-control"
                    lastname="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <span className="text-danger">{ lastName.length > 1 ? "" : "Last Name must be at least two characters long" }</span>
            </div>
            <div className="form-group">
                <label>User Email: </label>
                <input 
                    type="text"  
                    className="form-control"
                    email="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-danger">{ email.length > 4 ? "" : "Email must be at least five characters long" }</span>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input 
                    type="password"  
                    className="form-control"
                    password="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="text-danger">{ password.length > 7 ? "" : "Password must be eight characters" }</span>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input 
                    type="password"  
                    className="form-control"
                    confirmPassword="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="text-danger">{ confirmPassword === password  ? "" : "Password not the same"}</span>
            </div>
            <input type="submit" value="Create User" className="btn btn-light"/>
        </form>
        <div className="col-5 mx-auto card">
            <div className="card-body">
                <h4 className="card-title">{firstName}, {lastName}</h4>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Password: {password}</p>
                <p className="card-text">Confirm Password: {confirmPassword}</p>
            </div>

        </div>
        </>
    );

}

export default UserForm;