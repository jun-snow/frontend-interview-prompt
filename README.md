# frontend_interview_prompt
This is the homework assignment given to prospective frontend engineers. This task should not take more than 4 hours of your time. This prompt itself should last 3.5 hours, with half an hour to fill out the remaining questions on this README. 

## Task
Create a dashboard as close as possible to the following image: 
![Dashboard_mockup](https://i.imgur.com/5yDwTXk.png)

The graphs underneath <strong> Site Visits </strong> and <strong> Revenue </strong> can be placeholder images and any image that you see fit. 

## Getting started

Fork this project and clone it into your own repository. 

Please use any front-end framework you are comfortable with. 
We suggest getting started with [material-ui](https://material-ui.com/) as they have many of the the components pre-built. If you are using a different framework, there are usually equivalent libraries for material design. 

If you choose to start from scratch the font-type is: [Roboto](https://fonts.google.com/specimen/Roboto),

## Things we are looking for 
- [ ] Are the margins and padding similar to the image? Were the colors close? 
- [ ] Were clickable items accounted for with the right elements? e.g. (was a button or dropdown element used where it should have been used)
- [ ] How was the project set up? 
- [ ] If deviations to the design were made, were they justified? 

### Going above and beyond
Before moving onto these, please make sure you are happy with the overall look of your dashboard already! 
- [ ] Use your best judgement to make the dashboard responsive and collapsible at 1200px breakpoint. 
      - The lefthand drawer should collapse at 1200px.  
      - The "Totals" Section should collapse to a 2x2 block
      - The two graph blocks should stack. 

- [ ] If you have extra time, replace the placeholder images with dummy data and graphs from a visualization library like C3, D3, or React Vis. The filters on the graph do not have to work, but please share below if you had more time what you would filter on. 

- [ ] Replace the `Totals` section with data from the following endpoint with a new request being made each refresh: http://www.mocky.io/v2/5d018fbd3100005400ab2968, use your best judgement how to handle this new data. 

## Questions To Answer: 
This is your chance to talk about the prompt! Please provide these answers on your README. 
- Please share your screen resolution, OS, browser version (best if you're using latest) you used to test in so we can look at it in: 

**Screen resolution: 13.3-inch (2560 x 1600)**

**OS: MacOS High Sierra Version 10.13.6 (17G7024)**

**Browser: Chrome Version 74.0.3729.169 (Official Build) (64-bit)**

- What part of the design did you get stuck on? What took the most time? Similarly, what was the easiest part? 

**I spent a lot of time on figuring out Material UI, like reading the docs and searching for icons. I started off by adding classes to the Material UI components to style them in the css files, but in retrospect I should have used the native withstyles API.**

**The top search bar was probably the easiest since it had the least amount of components.**

- What part of the design didn't make sense? Did you change anything?

**I wasn't too sure about that gray box on the very top left part of the page, but I left it in as a placeholder.**

**The settings button that's getting clipped on the right looked wrong so I fixed that.**


- If you had more time, what would you have liked to implement? 

**The page looks great on my macbook, but looked a little off on other settings. I definitely would make it look better on other browsers if I had more time. I included an image in the main folder to show what it looks like on my setup.**

**I also made the mistake of using buttons instead of dropdowns for some of the elements, which I didn't realize until the end.**

**I would've liked to learn d3 as well.**

- What did you have to research or lookup while working on this? 

**Everything related to Material UI, and a few CSS properties here and there.**


**Overall, I had a lot of fun with the project!** :+1:














