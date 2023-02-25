import React, { useState, useEffect } from'react'
import WorklogService from '../services/WorklogService'

const ListWorklogComponent = () => {

    const [worklogs, setWorklogs] = useState([])

    useEffect(() => {
        
        WorklogService.getWorklogs().then((response) => {
            setWorklogs(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        } )
    }, [])

    
    

    return (
        <div className='container'>
        <h2 className="text-center"> Worklog List</h2>
            <div>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Worklog author</th>                          
                            <th> Created</th>
                            <th> Updated</th>
                            <th> Started</th>
                            <th> Time spent</th>
                            <th> In seconds</th>
                            <th> Issue id</th> 
                            <th> Actions</th>                               
                        </tr>
                    </thead>
                    <tbody>
                        {
                            worklogs.map(
                                worklog =>
                                <tr key = {worklog.id}>
                                    <td> {worklog.name}</td>
                                    <td> {worklog.created}</td>
                                    <td> {worklog.updated}</td>
                                    <td> {worklog.started}</td>
                                    <td> {worklog.timeSpent}</td>
                                    <td> {worklog.timeSpentSeconds}</td>
                                    <td> {worklog.issueId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListWorklogComponent





 