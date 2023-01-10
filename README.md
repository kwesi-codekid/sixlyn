# SIXLYN

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

Laravel is accessible, powerful, and provides tools required for large, robust applications.

### Contributers

-   **[Kwesi Codekid](https://github.com/kwesi-codekid)**
-   **[Kwamina Otabil](https://github.com/kwaminawhyte)**

### Instructions

-   Clone the project
-   Open it in your desired IDE
-   Create a database, name `sixlyn`
-   In the root directory of the project,

-   run `php rtisan migrate`, this will create the required tables in the database
-   run `npm run dev` to start the frontend dev server
-   run `php artisan serve`, to start the laravel dev server

**Access the project on [Localhost](http://127.0.0.1:8000)**

## Folder Structure

### Frontend

```
|—— resources
|    |—— js
|        |—— app.jsx
|        |—— bootstrap.js
|        |—— Components
|            |—— ApplicationLogo.jsx
|            |—— Button.jsx
|            |—— Checkbox.jsx
|            |—— Dropdown.jsx
|            |—— Input.jsx
|            |—— Label.jsx
|            |—— NavLink.jsx
|            |—— ResponsiveNavLink.jsx
|            |—— SideNavigation.jsx
|            |—— ValidationErrors.jsx
|        |—— Layouts
|            |—— Authenticated.jsx
|            |—— Guest.jsx
|        |—— Pages
|            |—— Attendance.jsx
|            |—— Auth
|                |—— ConfirmPassword.jsx
|                |—— ForgotPassword.jsx
|                |—— Login.jsx
|                |—— Register.jsx
|                |—— ResetPassword.jsx
|                |—— VerifyEmail.jsx
|            |—— Dashboard.jsx
|            |—— Lecturer
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Lecturers.jsx
|            |—— Settings.jsx
|            |—— Staff.jsx
|            |—— Student
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Students.jsx
|            |—— Welcome.jsx
```

### Whole Project Structure

```
|—— app
|    |—— Http
|        |—— Controllers
|            |—— AdminController.php
|            |—— AttendanceController.php
|            |—— Controller.php
|            |—— EmployeeController.php
|            |—— LecturerController.php
|            |—— LogController.php
|            |—— SettingController.php
|            |—— StudentController.php
|    |—— Models
|        |—— Admin.php
|        |—— Attendance.php
|        |—— Employee.php
|        |—— Lecturer.php
|        |—— Log.php
|        |—— Setting.php
|        |—— Student.php
|        |—— User.php
|—— database
|    |—— factories
|        |—— AdminFactory.php
|        |—— AttendanceFactory.php
|        |—— EmployeeFactory.php
|        |—— LecturerFactory.php
|        |—— LogFactory.php
|        |—— SettingFactory.php
|        |—— StudentFactory.php
|        |—— UserFactory.php
|    |—— migrations
|        |—— 2014_10_12_000000_create_users_table.php
|        |—— 2014_10_12_100000_create_password_resets_table.php
|        |—— 2019_08_19_000000_create_failed_jobs_table.php
|        |—— 2019_12_14_000001_create_personal_access_tokens_table.php
|        |—— 2022_07_04_170215_create_students_table.php
|        |—— 2022_07_04_170456_create_lecturers_table.php
|        |—— 2022_07_04_170752_create_logs_table.php
|        |—— 2022_07_04_170954_create_attendances_table.php
|        |—— 2022_07_04_171038_create_employees_table.php
|        |—— 2022_07_04_171118_create_admins_table.php
|        |—— 2022_07_04_171356_create_settings_table.php
|    |—— seeders
|        |—— AdminSeeder.php
|        |—— AdminsSeeder.php
|        |—— AttendanceSeeder.php
|        |—— DatabaseSeeder.php
|        |—— EmployeeSeeder.php
|        |—— LecturerSeeder.php
|        |—— LogSeeder.php
|        |—— SettingSeeder.php
|        |—— StudentSeeder.php
|—— resources
|    |—— js
|        |—— app.jsx
|        |—— bootstrap.js
|        |—— Components
|            |—— ApplicationLogo.jsx
|            |—— Button.jsx
|            |—— Checkbox.jsx
|            |—— Dropdown.jsx
|            |—— Input.jsx
|            |—— Label.jsx
|            |—— NavLink.jsx
|            |—— ResponsiveNavLink.jsx
|            |—— SideNavigation.jsx
|            |—— ValidationErrors.jsx
|        |—— Layouts
|            |—— Authenticated.jsx
|            |—— Guest.jsx
|        |—— Pages
|            |—— Attendance.jsx
|            |—— Auth
|                |—— ConfirmPassword.jsx
|                |—— ForgotPassword.jsx
|                |—— Login.jsx
|                |—— Register.jsx
|                |—— ResetPassword.jsx
|                |—— VerifyEmail.jsx
|            |—— Dashboard.jsx
|            |—— Lecturer
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Lecturers.jsx
|            |—— Settings.jsx
|            |—— Staff.jsx
|            |—— Student
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Students.jsx
|            |—— Welcome.jsx
|—— routes
|    |—— api.php
|    |—— auth.php
|    |—— channels.php
|    |—— console.php
|    |—— web.php

```
