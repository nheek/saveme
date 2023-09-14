# stacc-challenge

This is my submission for the Stacc challenge, please read ## heads-up / how-to-run to learn how to get the best intended results when using the application.

## heads-up / how-to-run

For this project I focused on making the app function for mobile devices with a min-with of 320px to a max-width of 550px.
The reasoning for this is that the application is created to be used in a banking app. To get the best experience when using it I recommend opening on a laptop or computer, with inspect and choose any mobile dimensions. You can also open the link on mobile and it will mostly work as intended. The project was built with: HTML,CSS,Javascript and Tailwind.

## Links

For a live version of the website/application:
https://playful-taffy-cea844.netlify.app/

## explanation

The idea behind the app is to give users a good way to save money when having the urge to buy something. Buying on impulse is something that most people do once in a while. With Impulsknappen added as a widget or just using it in the app, users can feel good about themselves by clicking the button every time there is an urge to buy something.
People like to feel good about their choices. By giving them the ability to send the money they were to spend on an impulse buy, to a locked bank account in a single click, they will learn to save and value the money they have.

## how-it-works

The value in each click can be decided by the user and is standard 5NOK and maximum 100NOK per click.
The user enters the desired input value, and each click the current inputvalue is pushed to an array. This array is summed up and printed on the page. And also saved to sessionStorage. The total sum when the app is closed, will be charged directly to the users bank-account and the money will be sent to a separate account with the name of the users saving goal (sparemål). When the app is closed there value in sessionStorage will also be moved and added to the previous TotalValue in localStorage. The user also gets to decide if they want to lock the account for a certain amount of months, or if they wish to leave the account open.

## what-I-Learned

I suddenly thought of ideas to add to the project all the time. I therefore started adding more and more things before I had the chance to finish the first idea! A valuable lesson I learned from that is too write down the ideas and finish the original product beforehand. Building this website has taught me a lot about localStorage and sessionStorage that I did not previously know.

### regrets

Some functionality is very hard to achieve on a mobile browser and I lack some things I would have liked to have included. If I had more time I would have built the app in React Native, but the delivery deadline made it hard to learn in time. This project is therefore more of a prototype than an actual App.
