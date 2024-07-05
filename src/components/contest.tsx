import { fetchContest, } from "../api-client";
import {useState, useEffect } from "react"


const Contest = ({initialContest, onContestListLink}) => {
    const [contest, setContest] = useState(initialContest);

    useEffect(() => {
        if (!contest.names) {
            fetchContest(contest.id).then((contest => {
                setContest(contest);
            }));
        }
    }, [contest.id, contest.names]);

    const handClickonContestList= (event) => {
        return onContestListLink();
    }

    return (
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contest.description}</div>

            <div className="title">Proposed Names</div>
            <div className="body">
                {contest.names?.length > 0 ? (
                    <div className="list">
                        {contest.names.map((proposedName) => (                            <div key={proposedName.id} className="item">
                            {proposedName.name}
                          </div>
                        ))}
                    </div>
                ): <div> No names proposed</div>
            }
            </div>
            <a link="/" className="link" onClick={handClickonContestList}>Contest List</a>
        </div>
    )
};

export default Contest;