Replace the vanilla JS or jQueryLite with React (or an equivalent client framework).

Must use at least two React (or equivalent) components.

To your existing page,

   A. Add login/signup page(s).

    
The roles are admin, teacher, TA, and student.

    
Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.

    
Teacher can create a course, add a student, create a TA, see all their courses, and logs.

    
TA can see all their courses, and logs. TA can create a student.

    
A student can only see their own courses, and logs.

  B. What you have in previous practicums is the student page.

    
Add an admin page.

    
Add a teacher page.

    
Add a TA page.

    
Add the ability for a student to add self to a course, either on the existing student page or a new page.

  D. Use client side routing for navigating between pages.

  E. Use a state store.

  F. You are responsible for a decent GUI design and UX.

  G. Admin, teacher, TA, student must be able to add a graphic.

You must have automated testing.

You must host it somewhere that's not your laptop. No localhost. No 127.0.0.1. No local IP address.

Use CockroachDB (SQL, edge) or MongoDB (NoSQL).

Add multitenants,

    A. UVU has URL, and U has another URL.

    B. UVU has UVU theme, and U has UofU theme.

    C. UVU admin/teacher/TA/student can't see anything of the U, and vice versa.
Every thing that need to be done to complete the project