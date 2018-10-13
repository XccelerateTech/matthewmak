

// B Reusing the file downloaded for the previous page. Try to do the following thing in the console of the developer tools in Javascript , not adding to the html.


// Adding a contact to the contact list
//      Name: Peter
//      telephone: 123456789
//      email: peter@gmail.com
let tbody = $('tbody');

tbody.append(
    '<tr class="row"><td>Peter</td><td>123456789</td><td>peter@gmail.com</td></tr>');
    
    
// Adding an extra button to the form called Clear
$('#row-submit1').append(
    '<button class="clearbutt1">clear</button>'
);

$('#row-submit2').append(
    '<button class="clearbutt2">clear</button>'
);

$('#row-submit2 input[type="submit"]').remove();

// Change the title of the page to <Your name>'s contact list application
let title = $('#header h1');

title.html("Matt's Contact List");

// Change the color of the text in the contact list.
tbody.css('color','blue');
        
// D Continue on the exercise for the previous two sections. As we know how to use JQuery event right now, we can now implement the validation logic and submission logic for our form.

// 1. Validate using JQuery the name should be less than 50 characters
// 2. Validate phone number should be between 6 numbers to 16 numbers
// 4. When the input field is invalid, the border of the corresponding input should be changed to red

let nam1 = $('#row-name1 input');
let tel1 = $('#row-phone1 input');
let em1 = $('#row-email1 input');
let sub1 = $('#row-submit1 input');
let nam2 = $('#row-name2 input');
let tel2 = $('#row-phone2 input');
let em2 = $('#row-email2 input');


$('#form1,#form2,button').submit(function(e) {
    e.preventDefault();
});

sub1.on("click",function(){
    
    if (nam1[0].value.length > 49) {
        
        nam1.css('border','solid red');
        
        alert("Your name should be less than 50 characters, right?");

    } else if ((tel1[0].value.length < 6) || (tel1[0].value.length > 16) || (isNaN(tel1[0].value))) {
        
        tel1.css('border','solid red');

        alert("If you input this phone number again, I will put in 999 for you! (Phone number need to be 6 to 16 numbers");

    } else {

        tbody.append(
            `<tr class="row"><td>${nam1[0].value}</td><td>${tel1[0].value}</td><td>${em1[0].value}</td></tr>`);
        
        nam1.css('border','');
        tel1.css('border','');
        nam1[0].value = "";
        tel1[0].value = "";
        em1[0].value = "";

        alert("Congrat, your data is barely okay. I shall add it to my contact list.");
    }

});

// 3. The Clear button should remove all the value input to the text box.

$('.clearbutt1').on("click",function(){
    nam1.css('border','');
    tel1.css('border','');
    nam1[0].value = "";
    tel1[0].value = "";
    em1[0].value = "";
});

$('.clearbutt2').on("click",function(){
    nam2.css('border','');
    tel2.css('border','');
    nam2[0].value = "";
    tel2[0].value = "";
    em2[0].value = "";
});

// 5. Add a Update Contacts list section for the page which has the same validation as the create contact list.
// 7. Alert the input of name , phone number and email after both forms are submitted and validated.



// 6. When I click on the row of the contact list, the values of the contact list should be filled in to the update form.
$('.row').each(function(){

$(this).click(function(){

    if ((nam2[0].value == "")&&(tel2[0].value == "")&&(em2[0].value == "")) {

    } else if (nam2[0].value.length > 49) {
        
        nam2.css('border','solid red');
        
        alert("Your name should be less than 50 characters, right?");

    } else if ((tel2[0].value.length < 6) || (tel2[0].value.length > 16) || (isNaN(tel2[0].value))) {
        
        tel2.css('border','solid red');

        alert("If you input this phone number again, I will put in 999 for you! (Phone number need to be 6 to 16 numbers");

    } else {

        $(this).replaceWith(`<tr class="row"><td>${nam2[0].value}</td><td>${tel2[0].value}</td><td>${em2[0].value}</td></tr>`);

        // $(this)[0].html() = nam2[0].value;
        // $(this)[1].html() = tel2[0].value;
        // $(this)[2].html() = em2[0].value;

        nam2.css('border','');
        tel2.css('border','');
        nam2[0].value = "";
        tel2[0].value = "";
        em2[0].value = "";

        alert("Congrat, your data is barely okay. I shall update it to my contact list.");
    }

});

});



