package pl.hobly.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.hobly.springboot.exception.ResourceNotFoundException;
import pl.hobly.springboot.model.Worklog;
import pl.hobly.springboot.repository.WorklogRepository;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/rest/api/1")
public class WorklogController {
	
	@Autowired
	private WorklogRepository worklogRepository;
	
	@GetMapping("/worklogs")
	public List<Worklog> getAllWorklogsForIssue(){
		return worklogRepository.findAll();
	}
	
	@PostMapping("/worklogs")
	public Worklog createWorklog(@RequestBody Worklog worklog) {
		return worklogRepository.save(worklog);
	}
	
	@PutMapping("/worklogs/{id}")
	public ResponseEntity<Worklog> updateWorklog(@PathVariable Long id, @RequestBody Worklog worklogDetails) {
		Worklog worklog = worklogRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Worklog not found with id:" + id));
		worklog.setName(worklogDetails.getName());
		worklog.setCreated(worklogDetails.getCreated());
		worklog.setUpdated(worklogDetails.getUpdated());		
		worklog.setStarted(worklogDetails.getStarted());
		worklog.setTimeSpent(worklogDetails.getTimeSpent());
		worklog.setTimeSpentSeconds(worklogDetails.getTimeSpentSeconds());
		
		
		Worklog updatedWorklog = worklogRepository.save(worklog);
		return ResponseEntity.ok(updatedWorklog);
	}
	
}