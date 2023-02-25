import { Link } from 'react-router-dom';
import React, { useState, useEffect } from'react'
import IssueService from '../services/IssueService'


const ListIssueComponent = () => {

    const [issues, setIssues] = useState([])

    useEffect(() => {
        getAllIssues();
    }, [])

    const getAllIssues = () => {
        IssueService.getIssues().then((response) => {
            setIssues(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        } )
    }

    const deleteIssue = (issueId) => {
          IssueService.deleteIssue(issueId).then((response) => {
            getAllIssues();
          }).catch(error => {
              console.log(error);
          })
    
        }

    return (
            <div>
                <h2 className="text-center"> Issue List</h2>
                <Link to = "/create-issue" className = "btn btn-primary mb-2" >Create Issue</Link>   
                <div className='row'>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Issue id</th>  
                            <th> Issue key</th>                          
                            <th> Issue summary</th>
                            <th> Issue application</th>
                            <th> Issue time spent</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            issues.map(
                                issue =>
                                <tr key = {issue.id}>
                                    <td> {issue.id}</td>                                        
                                    <td> {issue.key}</td>
                                    <td> {issue.summary}</td>
                                    <td> {issue.application}</td>
                                    <td> {issue.timespent}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-issue/${issue.id}`}> Update {issue.id} </Link>
                                        <button className='btn btn-danger' onClick = {() => deleteIssue(issue.id)} style  = {{marginLeft:"5px"}}> Delete </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
    ) 
}
export default ListIssueComponent




