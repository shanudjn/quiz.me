import React from 'react';
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <p>This is home page</p>
            <Link to="/quiz/RDR">RDR Quiz</Link>
            <Link to="/quiz/RDR2">RDR2 Quiz</Link>

        </div>
    )
}

export default Home
