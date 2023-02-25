import axios from "axios";

const WORKLOG_API_BASE_URL = "http://localhost:8080/rest/api/1/worklogs";

class WorklogService {

    getWorklogs(){
        return axios.get(WORKLOG_API_BASE_URL);
    }

}

export default new WorklogService()