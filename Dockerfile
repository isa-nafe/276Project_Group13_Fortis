FROM maven:3.8.5-openjdk-17 as build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/276Project_Group13_Fortis-0.0.1-SNAPSHOT.jar 276Project_Group13_Fortis.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","276Project_Group13_Fortis.jar"]