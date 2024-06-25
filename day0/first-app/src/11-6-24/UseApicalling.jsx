import React, { useEffect, useState } from 'react'



function UseApicalling() {
    const [userDetail, setUserDetail] = useState([]);
    const [loading,setLoading]=useState(false)
    console.log(userDetail,"userDetail")

    async function callingApi() {
        setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            const data = await response.json();
            setUserDetail(data);
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        callingApi();
    },[])

    return (

        <div>

            {loading ? (<h1>loading...</h1>):
            (   
             userDetail.map((users)=>(
                <div key={users.id}>
                    <div>
                     <img src={users.url} alt="" />
                    </div>
                    
                </div>
            )))}
            
        </div>
    )
}

export default UseApicalling