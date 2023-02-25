package pl.hobly.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.hobly.springboot.model.Worklog;


public interface WorklogRepository extends JpaRepository<Worklog, Long> {

}