import React, {useState, useEffect} from 'react'
import './Contact.scss'

const Contact = () => {
  const [formValue, setFormValue] = useState({name: '', email: '', message: ''})
  const [formError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false)

  const handleValidation = (e) => {
    const {name, value} = e.target;
    setFormValue({...formValue, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue))
    setSubmit(true)
  };


  const validateForm = (value) => {
    const error = {};
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!value.name) {
      error.name = 'Please enter your name'
    }

    if(!value.email) {
      error.email = 'Please enter your email'
    }else if (!emailReg.test(value.email)){
      error.email = 'invalid Email'
    }

    if(!value.message) {
      error.message = 'This field is required'
    }

    return error;
  }

  useEffect(() => {
    if(Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError, formValue, isSubmit])

  return (
    <section className='container' id='contact'>
      <h3 className='--ta'>Contact Us</h3>

      <div className='contact'>
        <div>
          <div>
            <label>PHONE:</label>
            <p>+234 8142793892</p>
          </div>
          <div>
            <label>ADDRESS:</label>
            <p>NO 5, ODENIYI CLOSE - OKO FILLING, OFF AIT ROAD <br/> KOLA B/STOP, LAGOS STATE, NIGERIA.</p>
          </div>
          <div>
            <label>EMAIL:</label>
            <p>rajiabdullahi907@gmail.com</p>
          </div>
        </div>

        <form className='--center' onSubmit={handleSubmit}>
          <div className='form-items'>
            <input type="text" name="name" value={formValue.name} onChange={handleValidation} placeholder='name'/>
              <span>{formError.name}</span>
            <input type="email" name="email" value={formValue.email} onChange={handleValidation} placeholder='Email'/>
              <span>{formError.email}</span>
          </div>
            <textarea name='message' placeholder='message..' value={formValue.message} onChange={handleValidation} rows='10'/>
              <span>{formError.message}</span>
          
          <br/>

          <button type='submit' className='btn'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact