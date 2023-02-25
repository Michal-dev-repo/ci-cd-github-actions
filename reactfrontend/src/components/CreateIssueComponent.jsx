import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from'react'
import IssueService from '../services/IssueService';

const CreateIssueComponent = () => {

  const [key, setKey] = useState('')
  const [summary, setSummary] = useState('')
  const [application, setApplication] = useState('')
  const [timespent, setTimespent] = useState('')

  const navigate = useNavigate();
  const {id} = useParams();

  const saveOrUpdateIssue = (e) => {
    e.preventDefault();
    const issue = {key, summary, application, timespent}
    if(id){
      IssueService.updateIssue(id, issue).then((response) => {
        console.log(response.data)        
        navigate('/issues');          
      }).catch(error => {
          console.log(error);
      })

    }else{
      console.log(issue);
      IssueService.createIssue(issue).then((response) => {
        console.log(response.data)
        navigate('/issues');
  
      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if(id){
        IssueService.getIssueById(id).then((response) => {
          setKey(response.data.key)
          setSummary(response.data.summary)
          setApplication(response.data.application)
          setTimespent(response.data.timespent)
        }).catch(error => {
            console.log(error)
        })
    }

  
  }, [id])

  const title = () => {
    if(id){
      return <h3 className = 'text-center'>Update Issue</h3>
    }else
      return <h3 className = 'text-center'>Create Issue</h3>
  }
 
    return (
      <div>
        <br/>
        <div className='container'></div>
          <div className = 'row'>
              <div className='card col-md-6 offset-md-3 offset-ms-3'>
                  {
                    title()
                  }
                  <div className = 'card-body'>
                      <form>
                        <div className = 'form group'>
                          <label> Key: </label>
                          <input 
                            placeholder='Key' 
                            name='key' 
                            className='form-control' 
                            value= {key}
                            onChange = {(e) => setKey(e.target.value)}
                          >
                          </input>  
                        </div>
                        <div className = 'form group'>
                          <label> Summary: </label>
                          <input 
                            placeholder='Summary' 
                            name='summary' 
                            className='form-control' 
                            value= {summary}
                            onChange = {(e) => setSummary(e.target.value)}
                          >
                          </input>  
                        </div>   
                        <div className = 'form group'>
                          <label> Application: </label>
                          <input 
                            placeholder='Application' 
                            name='application' 
                            className='form-control' 
                            value= {application}
                            onChange = {(e) => setApplication(e.target.value)}
                          >
                          </input>  
                        </div>         
                        <div className = 'form group'>
                          <label> Time Spent: </label>
                          <input 
                            placeholder='Time spent' 
                            name='timespent' 
                            className='form-control' 
                            value= {timespent}
                            onChange = {(e) => setTimespent(e.target.value)}
                          >
                          </input>  
                        </div>  
                        <br></br>
                        <button className='btn btn-success' onClick = {(e) => saveOrUpdateIssue(e)}> Save </button>
                        <Link to = "/issues" className = "btn btn-danger" >Cancel</Link>  
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
}
export default CreateIssueComponent

