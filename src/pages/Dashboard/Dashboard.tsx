import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/auth-context';



function Dashboard() {
    const [isLoading, setLoading] = useState(false);
    const { token } = useAuth();
    const [scoreBoardData, setScoreBoardData] = useState([])

    // async function getScoreboard() {
    //     const getScoreBoardResponse = await axios.get("http://localhost:8080/score/dashboard", { headers: { authorization: `Bearer ${token}` } })
    //     console.log(getScoreBoardResponse.data.score);
    //     if (getScoreBoardResponse.status === 200) {
    //         setScoreBoardData(getScoreBoardResponse.data.score)
    //         setLoading(false)
    //     }
    // }

    useEffect(() => {
        setLoading(true)
        // getScoreboard()
    }, [])
    console.log(scoreBoardData)
    return (
        <>
            {isLoading && <p>Loading ... </p>}
            {!isLoading &&
                <>
                    <div className={`flex flex-col md:ml-40  md:mr-40 sm:ml-0 sm:mr-0`} style={{ border: "1px solid red" }}>
                        <span>Your Scoreboard</span>
                    </div>
                    <div className={`flex flex-col md:ml-40  md:mr-40`} style={{ border: "1px solid green" }}>
                        {
                            scoreBoardData.map((scoreBoardDataItem) => {
                                // console.log(scoreBoardDataItem.score)
                                return (
                                    <span>Hello</span>
                                )
                            })
                        }
                    </div>
                </>

            }
        </>

    )
}

export default Dashboard
