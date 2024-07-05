import { useEffect, useState } from "react"

import ContestPreview from "./contest-preview";
import { fetchContestList } from "../api-client";

const ContestList = ( { initialContests, onContestClick }) => {
    const [contests, setContests] = useState(initialContests)
    // useEffect( () => {
    //     fetchContestList().then((contests) =>{
    //         setContests(contests)}
    //     );
    // }, []);

    return (
        <div className="contest-list">
            {contests.map((contest) => {
                return (    
                    <ContestPreview key={contest.id} contest={contest} onClick={onContestClick}/>
                    );
                })}
        </div>
    );
};

export default ContestList;