import React from 'react';
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import gitPic from '../../../images/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorMassage;

    if (googleLoading || gitLoading || facebookLoading) {
        return <Loading></Loading>
    }
    if (googleError || gitError || facebookError) {
        errorMassage = <p className='text-danger'>Error: {googleError?.message} {gitError?.message} {facebookError?.message}</p>
    }
    if (googleUser || gitUser || facebookUser) {
        navigate('/home');
    }

    return (
        <div>
            <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorMassage}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto mx-2 my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button 
                    onClick={() => signInWithFacebook()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={gitPic} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;