package pl.hobly.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.hobly.springboot.exception.ResourceNotFoundException;
import pl.hobly.springboot.model.Issue;
import pl.hobly.springboot.repository.IssueRepository;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/rest/api/1")
public class IssueController {
	
	@Autowired
	private IssueRepository issueRepository;
	
	@GetMapping("/issues")
	public List<Issue> getAllIssues(){
		return issueRepository.findAll();
	}
	
	@PostMapping("/issues")
	public Issue createIssue(@RequestBody Issue issue) {
		return issueRepository.save(issue);
	}
	
	@GetMapping("/issues/{id}")
	public ResponseEntity<Issue> getIssueById(@PathVariable Long id){
		Issue issue = issueRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Issue no found with id:" + id));
		return ResponseEntity.ok(issue);
	}
	
	@PutMapping("/issues/{id}")
	public ResponseEntity<Issue> updateIssue(@PathVariable Long id, @RequestBody Issue issueDetails) {
		Issue issue = issueRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Issue no found with id:" + id));
		issue.setKey(issueDetails.getKey());
		issue.setSummary(issueDetails.getSummary());
		issue.setApplication(issueDetails.getApplication());
		issue.setTimespent(issueDetails.getTimespent());
		
		Issue updatedIssue = issueRepository.save(issue);
		return ResponseEntity.ok(updatedIssue);
	}
	
	@DeleteMapping("/issues/{id}")
	public ResponseEntity<HttpStatus> deleteIssue(@PathVariable long id){
		
		Issue issue = issueRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Issue no found with id:" + id));
				issueRepository.delete(issue);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
}