
# My about me website (Second design)

## __AboutMe-MatthewMak__

Hi, I am Matthew. This is my second design for my about me website. 

Comparing to the first design, the content is basically the same. But I changed the color scheme from mainly white to dark. And I also applied more website effect using javascript and bootstrap.


### __Library used and other sources__

* Google font (Raleway)
* Bootstrap (mainly for the mobile responsive grid design)
* Fontawesome  (Icons)

## __Design__

* Generally a dark design
* Supplemented with the greenish blue color (#49C5B6)
* Some of the groups have gradient of black/ blue
* Content mainly arranged with card design, which fade in when viewpoint shown around 20% of the elements
* If a row have multiple card, there will be different delay applied to different card


## __Content__

### 1. __General__

#### CSS

* .flx-cen
    * When comes to positioning, I usually place elements at the center as its parent elements. Flexbox is an easy way to do so
    * Flex-flow with row and wrap enable multiple elements in a parent elements to arrange properly

* body
    * Raleway font
    * Dark background as color scheme
    * White font such that they may be viewed clearly on top of deep color

* .pad0
    * Bootstrap grid class always have padding with it so I created this CSS. When I don't need the padding, I just add this class to that element

* h3, h4
    * Color with the greenish blue to match the scheme

* .r (row class)
    * This row class is added into most section
    * Added left and right margin for this class such that the content can be placed relatively center
    * Added top and bottom margin the class to spaced between each another



### 2. __Hamburger menu__

#### HTML

Mainly:
* A div with button_container class
    * 3 span as the 3 bar in the menu button
* A div with overlay class

#### Javascript

*  When the menu button is pressed, it will trigger the __click__ function in javascript
    * JQuery __.toggleClass()__ function is used
    * Add or remove __active__ class to the button
    * Add or remove __open__ class for the overlay

#### CSS

* .button_container
    * position absolute to bootstrap navbar fixed top class. Thus can always appear on top left of the viewpoint
    * z-index set to 100 for it to always float on top of other elements
    * When mouse hover, its opacity will become 0.7 and the cursor will become pointer

* 3 span elements
    * The 3 span elements are 3 bars with empty color
    * When clicked, the button_container will be added with an acitve class. The 3 span will be transformed with 45 degree respectively to form a cross sign

* .overlay
    * Normally with opacity 0
    * When menu button clicked and added with open class, opacity become 0.9
    * The overlay animation takes 0.35s, then the menu option added 0.05s animation delay each

* The width of the menu button and overlay is normally 0. It will only be shown when media width is smaller than 768px (Using @media in css)

#### Credit

* Reference from Hamburger menu made by Kabir Shah



### 3. __Normal Overhead Navigation bar__

#### HTML

* Mainly a table and a div (class: selector) wrapped in a nav (class: tabs)

#### CSS

* .tabs
    * A rectangle white bar with 50px border radius
    * Hovered on top with the fixed-top class from Bootstrap

* .tabs a
    * Grey text
    * Display inline-block for it to line up horizontally and accept padding
    * When with .active class, text change to white

* .selector
    * The Greeenish blue button that indicate the active part of the page
    * Posititon absolute for it to hover on the .tabs

* @media width under 768px
    * Display none to make this bar disappear, replaced by hamburger menu

#### Javascript

* Switching active nav button when clicking
    * activeItem find the element that has active class
    * activeWidth find the width of activeItem, for the blue button to adjust its width to suit the activeItem
    * Coordinate of the active item is found by the JQuery .position().left method
    * When the page is loaded, the first activeItem should be the HOME button. So the blue button will be on top of it

* Switching active nav button when scrolling
    * When a scroll event is preformed, the .scroll function will be triggered and get the current vertical position of the scroll bar
    * Then it will went through the 4 items in the navbar and compare the current position with those 4 positions
    * The last item that the current position is under will be the active item and the blue button will be on top of it

#### Credit

* Navigation bar by Nenad Kaevik



### 4. __Header/hero__

#### HTML

* A banner photo with 2 sentences

#### CSS

* header
    * Margin top to leave space for navbar

* img
    * object-fit: contain such that the photo can fit the whole div

* .header-sen
    * position absolute to the left such that it will appear over the photo
    * @media width under 768px, .header-sen's position will be changed to relative such that it will appear below the photo



### 5. __Header/hero and Skill__

#### HTML

* Mostly unordered list inside div class
* Each list has different greyCard class for slightly different style
* The markers in in front of the list are icons from font awesome

#### CSS

* #SKILL li
    * Display: flex such that the icons and words can be on the same row
* .greyCard
    * With different grey background-color for the gradient effect
* @media (max-width: 990px)
    * Add margin between cards when the media viewpoint is too small



### 6. __Album__

#### HTML

* 4 div with row class wrapping 2 to 4 div blocks
* Inside the small div blocks, there are p elements for some descriptions

#### CSS

* .al 
    * Included in every small div blocks
    * The small blocks all have different background-image
    * This al class define that those background image should be positioned from the bottom and cover the whole blocks, such that the image won't leave space inside the blocks

* .rXcX
    * Assign different photos to different blocks

* .picWord
    * With opacity 0 at start, such that the sentence written in the box cannot be seen normally
    * When the mouse hover over the pictures, it will trigger javascript to change the background color and opacity. The sentence will then become visible

#### Javascript

* function mouseOverChangeColor
    * Triggered when mouseover 1 of the pictures of the rows
    * Turn up opacity of the div from 0 to 0.9 for div in the same row
    * Change the background-color depends on input

* function mouseOverChangeColor
    * Triggered when mouseleave the pictures of the rows
    * Change back the opacity to 0



### 7. __Footer__

#### HTML

* Sentences with icons wrapped anchor href
    * 1 with link to my facebook
    * 1 with my email address with default subject
* A small element at the bottom of the page



### 8. __Fade effect__

#### HTML

* I found the effects from Michał Sajnóg's github which is very easy to use
* Just place an attribute __data-aos__ with the desired fade effect as value
* If time delay is needed, __data-aos-delay__ can be used
* Finally, link the __aos.css__ and __aos.js__ to the HTML

#### CSS

* Basically, Michal made use of __transform:translate3d__ and __opacity__ for the fade effect. Can refer to his github or aos.css file



### 9. __Smooth scrolling when click on anchor link__

* Smooth scroll by Chris Ferdinandi