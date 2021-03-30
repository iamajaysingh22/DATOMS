select student.first_name, student.last_name,student.city, student.age from course 
inner join student on student.stu_id = course.stu_id where  course.COURSE_NAME in ['PHYSICS','MATHS'];
