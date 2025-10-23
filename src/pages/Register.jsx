import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log({ name, email, photoUrl, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });


    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name  */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {/* email  */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* photoURL  */}
                        <label className="label">PhotoURL</label>
                        <input name='photoUrl' type="text" className="input" placeholder="PhotoURL" required />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Allready Have An Acconut ? <Link className='text-secondary' to='/auth/login'>Login</Link> </p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;