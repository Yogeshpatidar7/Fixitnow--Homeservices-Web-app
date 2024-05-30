
import { useState  } from "react";
import { Link, useLocation, useNavigate, createSearchParams } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const URL = "http://localhost:5000/api/bookingform/booking/serviceproviderlist";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation()
  const { service } = location.state
  const [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    address: "",
    city:"",
    services: "",
    serviceDetail: "",
    datetime: "",
  });

  const [userData, setUserData] = useState(true);

  const {user} = useAuth();

  if(userData && user){
    setForm({
      username: user.username,
      phone: user.phone,
      email: user.email,
      address: user.address,
      city: user.city,
      services: service,
      serviceDetail: "",
      datetime: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      // const response = await fetch(URL, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': "application/json"
      //   },
      //   body: JSON.stringify(form),
      // })

      if (true) {
        const City = form.city;
        const Services = form.services;
        const serviceDetail = form.serviceDetail;
        const datetime = form.datetime;
     
        setForm({
          username: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          services: "",
          serviceDetail: "",
          datetime: "",
        })
        navigate({
          pathname: "/Servicebooking",
          search: createSearchParams({
              City: City,
              Service: Services,
              ServiceDetail: serviceDetail,
              Datetime: datetime
          }).toString()
        });
      }
      
    } catch (error) {
      console.log("Booking ", error);
    }
  };

  const checkUser = () => {
    if(!user){
      navigate("/login");
    }
  };



  return (
    <div className="App">
      <form className="booking-form" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="booking-heading">Service Booking</h2>
          <div className="register-form">
            <div className="form1">

              <div className="Field">
                <label>
                  Name <sup>*</sup>
                </label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleInput}
                  placeholder="Name"
                  required
                  
                />
              </div>
              <div className="Field">
                <label>Mobile Number <sup>*</sup></label>
                <input
                  name="phone"
                  value={form.phone}
                  placeholder="Mobile number"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="Field" id="email" >
                <label>
                  Email address <sup>*</sup>
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="Field" >
                <label>
                  Address <sup>*</sup>
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleInput}
                  placeholder="Address"
                  required
                />
              </div>

              <div className="Field">
                <label>
                  City <sup>*</sup>
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleInput}
                  placeholder="City"
                  required
                />
              </div>
              <div className="Field1">
                <label>
                  Service <sup>*</sup>
                </label>
                <select
                  name="services"
                  value={form.services}
                  onChange={handleInput}
                  required
                  disabled
                >
    
                  <option value="carpenter" >Carpenter</option>
                  <option value="plumber" >Plumber</option>
                  <option value="painter" >Painter</option>
                  <option value="electrician" >Electrician</option>
                  <option value="mechanic" >Mechanic</option>
                  <option value="salon" >Salon</option>
                  <option value="acappliance" >AC & appliances repair</option>
                  <option value="cleaning" >Cleaning</option>
                </select>
              </div>

              <div className="Field" id="serviceDetail" >
                <label>
                  Service Detail <sup>*</sup>
                </label>
                <input
                  name="serviceDetail"
                  value={form.serviceDetail}
                  onChange={handleInput}
                  placeholder="Service Detail"
                  required
                />
              </div>

              <div className="Field" id="dateTime" >
                <label>
                  Please select your schedule to book your service <sup>*</sup>
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={form.datetime}
                  onChange={handleInput}
                  placeholder="Date Time"
                  required
                />
              </div>
            </div>
          </div>
          <button onClick={checkUser} className=" book-btn">Next</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Booking