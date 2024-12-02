1. To your existing page,

   A. Add login/signup page(s).

    1. The roles are admin, teacher, TA, and student.

    2. Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.  Seed the database with two admin users named "root_uvu" and "root_uofu"; the passwords should be "willy" and "swoopy" respectively.

    3. A teacher can create a course, add a student, create a TA, see all their courses, and logs.

    4. TA can see all their courses, and logs. TA can create a student.

    5. A student can only see their own courses, and logs.

  B. Pages

Student page.
Admin page.
Teacher page.
    3. Add a TA page.

    4. Add the ability for a student to add self to a course, either on the existing student page or a new page.

  D. Use client side routing for navigating between pages.

  E. Use a state store.

  F. You are responsible for a decent GUI design and UX.

  G. Admin, teacher, TA, student must be able to add a graphic.

2. You must have automated testing.

3. Use MongoDB (recommended to access via Mongoose).

4. Add multi-tenants,

    A. UVU has URL, and U has another URL.

    B. UVU has UVU theme, and U has UofU theme.

    C. UVU admin/teacher/TA/student can't see anything of the U, and vice versa. 