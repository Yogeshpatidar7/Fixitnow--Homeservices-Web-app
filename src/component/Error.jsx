import { Link } from "react-router-dom";

const Error = () => {
    return(
        <>
            <div className="error-page">
                <div className="error-content">
                    <h2 className="error-heading">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>
                        Oops! It seems like the page you're trying to access doesn't exist. <br />
                        If you believe there's an issue, feel free to report it, and we'll look into it.
                    </p>

                    <div className="btns">
                        <Link to="/" className="err-btn">Return home</Link>
                        <Link to="contact" className="err-btn">Report problem</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;