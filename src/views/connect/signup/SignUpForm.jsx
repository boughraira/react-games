import { useFormik } from "formik";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { basicSchema } from "../schemas";
import styled from "styled-components";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log("submitted");
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const SignUpForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <SignUpFormWrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="line-input">
          <GrMail className="react-icon" />

          <input
            type="email"
            value={values.email}
            id="email"
            onChange={handleChange}
            placeholder="Enter your Email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
        </div>
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <div className="line-input">
          <FaUserAlt className="react-icon" />
          <input
            type="number"
            value={values.age}
            id="age"
            onChange={handleChange}
            placeholder="Enter your Age"
            onBlur={handleBlur}
            className={errors.age && touched.age ? "input-error" : ""}
          />
        </div>
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <div className="line-input">
          <RiLockPasswordFill className="react-icon" />
          <input
            type="password"
            value={values.password}
            id="password"
            onChange={handleChange}
            placeholder="Enter your Password"
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
        </div>
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}

        <div className="line-input">
          <RiLockPasswordFill className="react-icon" />
          <input
            type="password"
            value={values.confirmPassword}
            id="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
          />
        </div>
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit" className="submit">
          SIGN UP
        </button>
        <p className="info">
          Already have an account?<span> </span>
          <Link to="/connect/signin" className="info-plus">
          Sign In
                </Link>
        </p>
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;

const SignUpFormWrapper = styled.div`
  .info {
    color: white;
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
  }
  .info-plus {
    color: white;
    font-size: 2.3rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    &:hover {
      color: #4caf50;
    }
  }
  .error {
    color: #fc8181;
    font-size: 1.5rem;
    text-align: left;
    margin-top: 0.25rem;
  }

  .checkbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
  }

  form {
    z-index: 99;
    width: 50rem;
    height: 43.5rem;
    margin: -17rem 0 0 25rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input,
  select {
    width: 90%;
    height: 6rem;
    padding: 0.65rem 0.5rem;
    font-size: 3rem;
    color: white;
    border: 2px solid #4a5568;
    background-color: #2d3748;
    border-radius: 10px;
    outline: none;
  }

  input:focus,
  select:focus {
    border-color: #4299e1;
  }

  input::placeholder,
  select::placeholder {
    color: #a0aec0;
  }

  input[type="checkbox"] {
    width: fit-content;
    margin-right: 0.5rem;
    transform: scale(1.25);
  }

  input.input-error,
  select.input-error {
    border-color: #fc8181;
  }

  button:disabled {
    opacity: 0.35;
  }

  .line-input {
    border-radius: 2rem;
    background-color: #009f9d;
    width: 45rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
  }

  .submit {
    background-color: #009f9d;
    height: 5.5rem;
    width: 19rem;
    font-size: 3.5rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bold;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
    margin: 0 auto;
    color: aliceblue;
    &:hover {
      background-color: #e91e63;
    }
  }

  .react-icon {
    font-size: 3.2rem;
    color: azure;
    margin-right: 0.7rem;
  }

  //**responsive**/
  @media (max-width: 768px) {
    form {
      width: 40rem;
      height: 41rem;
      margin: -3rem 0 0 10rem;
      padding: 2rem;
    }

    input,
    select {
      width: 90%;
      height: 5rem;
      padding: 0.65rem 0.5rem;
      font-size: 2.5rem;
      color: white;
      border: 2px solid #4a5568;
      background-color: #2d3748;
      border-radius: 10px;
      outline: none;
    }

    .line-input {
      width: 37rem;
    }

    .submit {
      height: 4.5rem;
      width: 20rem;
      font-size: 1.5rem;
    }

    .react-icon {
      font-size: 2.2rem;
      color: azure;
      margin-left: 1rem;
    }
  }

  @media (max-width: 480px) {
    .info {
      font-size: 1.8rem;
      font-weight: 400;
    }
    .info-plus {
      font-size: 2rem;
    }
    form {
      width: 32rem;
      height: 40rem;
      margin: -3rem 0 0 2rem;
      padding: 2rem;
    }

    input,
    select {
      width: 90%;
      height: 5rem;
      padding: 0.65rem 0.5rem;
      font-size: 2rem;
      color: white;
      border: 2px solid #4a5568;
      background-color: #2d3748;
      border-radius: 10px;
      outline: none;
    }

    .line-input {
      width: 28rem;
    }

    .submit {
      height: 4.5rem;
      width: 20rem;
      font-size: 2.5rem;
    }

    .react-icon {
      font-size: 2.4rem;
      color: azure;
      margin-left: 1rem;
    }
  }
`;
