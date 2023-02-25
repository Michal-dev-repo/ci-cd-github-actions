# define base docker image
FROM openjdk:17
LABEL maintainer="michal pokorski"
ADD target/springboot-backend-0.0.1-SNAPSHOT.jar springboot-backend.jar
ENTRYPOINT ["java","-jar", "springboot-backend.jar"]