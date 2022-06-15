import React from 'react';
import Header from "../../components/Header/Header";
import {getProviders, signIn} from "next-auth/react";

import Image from "next/image";

function Login({providers}) {
    return (
        <div>
              <Header />
              <div className="container-fluid mx-auto">
                  <div className="container mx-auto flex justify-center">

                 
                    {Object.values(providers).map(provider => (
                        <div key={provider.name} className="mt-20 flex flex-col justify-center">
                        
                            <img className="w-[300px] h-[200px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png"
                               
                            />
                            <button 
                                className="bg-gray-300 rounded-md px-3 py-3"
                                onClick={() => signIn(provider.id, { callBackUrl: "/" }) }
                            >
                                Sigin with google
                            </button>
                        </div>
                    ))}
              </div>
                </div>
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: { providers },
    };
}

export default Login;
