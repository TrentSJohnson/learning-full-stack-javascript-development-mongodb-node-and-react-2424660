import { fetchContest, } from "../api-client";
import {useState, useEffect } from "react"


const Contest = ({initialContest}) => {
    const [contest, setContest] = useState(initialContest);

    // useEffect(() => {
    //     fetchContest(contest.id).then((contest => {
    //         setContest(contest);
    //     }));
    // }, [contest]);
    return (
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contest.description}</div>
        </div>
    )
};

export default Contest;