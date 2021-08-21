import Image from 'next/image';
import FacebookLogo from '../assets/Facebook-logo.png';
import { signIn } from 'next-auth/client';

function Login(){
    return (
        <div className="grid place-items-center">
            <Image
                src={FacebookLogo}
                height={400}
                width={400}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
