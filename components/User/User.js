import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

function User() {
    const { data: session} = useSession();
    if(session){
        return(
          <button onClick={signOut }>
              <h5>{session.user.name}</h5>
          </button>
            
        )
    }

    return (
        <>
              <button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md">
                  Sign in
              </button>
        </>
    );
}

export default User;
