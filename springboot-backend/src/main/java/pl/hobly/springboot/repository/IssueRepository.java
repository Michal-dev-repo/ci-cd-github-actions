package pl.hobly.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.hobly.springboot.model.Issue;


public interface IssueRepository extends JpaRepository<Issue, Long> {

}