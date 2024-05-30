import { useState } from "react";

const Login1 = () =>{

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        console.log(e);
        const{name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        alert(user);
    }

    return(
        <>
        <section>
            <main>
                <div className="login-section">
                    <div className="login-container">
                        <div className="heading">
                            <h1>Login form</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email" 
                                value={user.email}
                                onChange={handleInput}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                value={user.password}
                                onChange={handleInput}
                                />

                            </div>
                            <br />
                            <button type="submit" className="login-btn btn-submit">
                                        Login Now
                                    </button>

                        </form>
                    </div>
                </div>
            </main>
        </section>
        
        </>
    )
}

export default Login1;