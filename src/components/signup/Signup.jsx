import React, { useState } from 'react'
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./signup.css"
// import { useHistory } from 'react-router-dom'

const Signup = ({onAuth}) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    // const history = useHistory();

    const formSubmission = (event) => {
        event.preventDefault();
        onAuth(values);
        setValues({
            name: "",
            email: "",
            password: ""
        })
        // history.push("/");
    };
  return (
    <>
        <section className='sign mb'>
        <Back name='Sign Up' title='Get Friendly Budgets Home' cover={img} />
        <div className='container'>
          <form onSubmit={formSubmission} className='shadow'>
            <h4>Sign up</h4> <br />
            <div>
              <input value={values.name} onChange={(e) => setValues({...values, name: e.currentTarget.value})} type='text' placeholder='Name' />
            </div>
            <div>
              <input value={values.email} onChange={(e) => setValues({...values, email: e.currentTarget.value})} type="email" placeholder='Email' />
            </div>
            <div>
              <input value={values.password} onChange={(e) => setValues({...values, password: e.currentTarget.value})} type='password' placeholder='Password' />
            </div>
            <button>Sign Up </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Signup