# Bookworm-Library

## Project Description

This application is an open-source online library platform where users can read books for free. Administrators oversee the operation of the website and manage the inventory of available items. 

## Technologies Used

* Spring MVC
* Hibernate
* React
* React Redux
* PostgreSQL
* Java
* JavaScript

## Features
**Users can:**
* Register 
* Login/Logout 
* Edit their account information 
* View current selection of books 
* Check out a book 
* View previously checked out books
* Search for a specific book

**Admin Users can: **

* View all inventory, authors, and genres
* Add books
* Remove books
* Add users (basic and admin roles)
* Remove users
* View library transactions 

To-do list:

Allow users to:
* Recover their password through email 
* Filter books by category
* Request a book be added to inventory
* View recommendations of books they might enjoy
* View “More by this author”

Allow Admin to:
* View usage statistics
* Send messages to users

## Getting Started
In PostgreSQL:
1. Paste the commands found in setup.sql

In your terminal:
1. Copy the repository to your local machine
   `git clone https://github.com/meganorth14/Bookworm-Library.git`
2. Launch backend server
   `cd backend`
   `java -jar backend/bookwormlibrary/target/bookwormlibrary-0.0.1-SNAPSHOT.jar com.revature.bookwormlibrary.BookwormlibraryApplication`
4. Launch frontend server
   `cd frontend`
   `npm install`
   
In your browser:
1. Navigate to http://localhost:8080
2. Enjoy your library experience


(include git clone command)
(include all environment setup steps)

> Be sure to include BOTH Windows and Unix command  
> Be sure to mention if the commands only work on a specific platform (eg. AWS, GCP)

- All the `code` required to get started
- Images of what it should look like

## Usage

> Here, you instruct other people on how to use your project after they’ve installed it. This would also be a good place to include screenshots of your project in action.

## Contributors

> Here list the people who have contributed to this project. (ignore this section, if its a solo project)

## License

This project uses the following license: [<license_name>](<link>).
