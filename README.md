# GifTastic

# Description
This is an assignment for UW Coding Bootcamp. Enter in your favorite type of food into the input text area and create a new button. Select any of the buttons to automatically display gifs! Click on the gifs to animate them.

# Problems
At first, I struggled with trying to make the "Saved Gifs" section collapsible. It did not quite disappear how I liked it. Fortunately, I was able to fix it by creating a class for the gifs and hiding the class div when a certain button was clicked.

# Technical Approach
The Giphy API and Bootstrap were used to create this webpage.

I started by first looking at the Giphy API and understanding how to call the specific gif that I wanted. I used the value of a food button to be entered into a query URL to search Giphy. The still image and animated image URLs were both added to the queryURL to be displayed on the page. The image defaults to the still image, and will animate when a user clicks on the image by switching attributes.

For each Gif that was added, a small "Save" Button was also created and appended so users would be able to sav their favorite Gif. When they click on "Save Gif", then that Gif's animated URL is added to the 'Favorite' class that is displayed at the top of the page.

An array of topics are already added as suggestions. The user is able to enter into the text field and a new button is appended to the array when the 'Crave It' button is clicked.
