// B Reusing the file downloaded for the previous page. Try to do the following thing in the console of the developer tools in Javascript , not adding to the html.


// Adding a contact to the contact list
//      Name: Peter
//      telephone: 123456789
//      email: peter@gmail.com
let tbody = $('tbody');

tbody.append(
    '<tr class="row"><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>');
    

// Adding an extra button to the form called Clear
let rowSubmit = $('#row-submit');

rowSubmit.append(
    '<button>clear</button>'
    );
        

// Change the title of the page to <Your name>'s contact list application
let title = $('#header h1');

title.html("Matt's Contact List");


// Change the color of the text in the contact list.
tbody.css('color','blue');