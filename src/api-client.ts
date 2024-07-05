import axios from "axios"

import { API_SERVER_URL } from "./public-config"

export const fetchContestList = async () => {
    const resp = await axios.get(`${API_SERVER_URL}/contests`)
    console.log(`fetch init list ${JSON.stringify((resp.data))}`)
    return resp.data.contests;
};

export const fetchContest = async (contestId) => {
    const resp = await axios.get(`${API_SERVER_URL}/contest/${contestId}`)
    console.log(`fetch init ${JSON.stringify((resp.data))}`)
    return resp.data.contest;
};
