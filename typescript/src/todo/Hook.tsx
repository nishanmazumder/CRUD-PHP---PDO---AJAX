import React, { useEffect, useState } from 'react'

type UserType = {
    id: number,
    name: string
}

function Hook() {

    const [user, setUser] = useState<UserType[] | null>(null)

    useEffect(() => {

        console.log("Mount");
        console.log("User", user);

        return () => console.log("Unmount");
    }, [user])


    return (
        <div>Hook</div>
    )
}

export default Hook
