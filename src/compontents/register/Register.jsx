import './register.scss';
import {useFormik} from 'formik'
// import { useState } from 'react';
import * as Yup from 'yup';
function Register() {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  // const [phone,setPhone]=useState('');
  // const [password,setPassword]=useState('');
  // const [confirm,setConfirm]=useState('');

  const formik =useFormik({
    initialValues:{
      name:"",
      email:"",
      phone:"",
      pass:"",
      confirm:""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(4,"Must be 4 characters or more"),
      email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please enter valid email address"),
      password: Yup.string().required("Required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,17}$/,"Password must be 8-17 character and contain at least one letter, one number"),
     confirm: Yup.string().required("Required").oneOf([Yup.ref("password"),null], "Password must match"),
     phone: Yup.string().required("Required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"Must be a valid phone number"),

      

    })
  })

  return (
    <div className="register">
      <div className="register__contaniner">
        <div className="register__header">
          <p className="register__heading">Đăng kí tài khoản</p>
        </div>
        <div className="register__body">
          <form action="" className="inforfrom" onSubmit={formik.handleSubmit}>
            <label> Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name"
            />
            {formik.errors.name &&
              <p className="error">{formik.errors.name}</p>

            }
             <label> Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your email"
            />
             {formik.errors.email &&
              <p className="error">{formik.errors.email}</p>

            }
             <label> Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your password"
            />
             {formik.errors.password &&
              <p className="error">{formik.errors.password}</p>

            }
             <label> Confirm Password</label>
            <input
              type="text"
              id="confirm"
              name="confirm"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
            />
             {formik.errors.confirm &&
              <p className="error">{formik.errors.confirm}</p>

            }
              <label> Confirm Password</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Enter your phone number"
            />
             {formik.errors.phone &&
              <p className="error">{formik.errors.phone}</p>

            }
            <div className="register__submit">
              <button type="submit" className="submit"> Submit</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
