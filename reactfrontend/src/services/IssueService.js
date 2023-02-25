import axios from 'axios'

const ISSUE_API_BASE_URL = 'http://localhost:8080/rest/api/1/issues'

class IssueService {
  getIssues () {
    return axios.get(ISSUE_API_BASE_URL)
  }

  createIssue (issue) {
    return axios.post(ISSUE_API_BASE_URL, issue)
  }

  getIssueById (issueId) {
    return axios.get(ISSUE_API_BASE_URL + '/' + issueId)
  }

  updateIssue (issueId, issue) {
    return axios.put(ISSUE_API_BASE_URL + '/' + issueId, issue)
  }

  deleteIssue (issueId) {
    return axios.delete(ISSUE_API_BASE_URL + '/' + issueId)
  }
}

export default new IssueService()
