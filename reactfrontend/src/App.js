import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListIssueComponent from './components/ListIssueComponent';
import ListWorklogComponent from './components/ListWorklogComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateIssueComponent from './components/CreateIssueComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                  <Routes>
                    <Route path ="/" exact element = {<ListIssueComponent/>}/>
                    <Route path ="/issues" element = {<ListIssueComponent/>}/>          
                    <Route path ="/worklogs" element = {<ListWorklogComponent/>}/>            
                    <Route path ="/create-issue" element = {<CreateIssueComponent/>}/>  
                    <Route path ="/edit-issue/:id" element = {<CreateIssueComponent/>}/> 
                  </Routes>
                </div>
              <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
