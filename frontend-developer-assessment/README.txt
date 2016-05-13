Front-end Developer Assessment

Create a basic address book with the features listed below. This assessment will be reviewed to not only confirm functionality, but the code will also be reviewed to assess code quality. When submitting your completed assessment, please describe the functionality that you were able to implement, and how much time was spent developing it (expected to take between 1-3 hours depending on ability).

Note: you may use any front-end framework: AngularJS, Backbone, ExtJS, Marionette, Ember, etc.

---

Basic Requirements: (use the mockups as a guide)

1. The initial page should be a directory page listing all of the contacts that have been added the directory.
2. Each item in the list of contacts, should be displayed in the format "LastName, FirstName". followed by a button with the text: "Delete"
3. If you click on the delete button, that contact will be removed from the directory.
4. If you click on the name of the contact, it should take you to a page to edit the contact.
5. A button below the list of contacts should take you to a page to create new contacts.
6. On the create a contact page, it should have an input for: First Name, Last Name, and Email.
7. Each input requires an input, and additionally, the email should follow a valid email format.
8. The data will be managed by the server, and can be interacted with by using the API described below.
9. Should function in all modern browsers (IE9+)

Bonus Requirements: (something to consider: these additions are easy to do when using a framework)

1. Sort the list of contacts in the directory Last Name
2. Split various views into "partial" or "template" views
3. Implement routing
4. Style the application like the mockups

---

To run the server: 

1. Install nodejs
2. run the command in your terminal or command line: node server.js
3. Access server from http://localhost:3000
4. Place frontend files in the public folder

---

API:

GET - api/contacts/
params: none
returns list of contacts


GET - api/contacts/:id
params: {
	id: int
}
returns contact with given id or null if contact does not exist


POST - api/contacts/
data: {
	firstName: string,
	lastName: string,
	email: string
} 
returns saved contact


PUT - api/contacts/
data: {
	id: int,
	contact: 
	{
		firstName: string,
		lastName: string,
		email: string
	}
}
return updated contact


DELETE - api/contacts/:id
params: {
	id: int
}
returns a true or false depending on if contact was successfully deleted