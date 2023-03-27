# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Rating State](./images/Screenshot%202023-03-25%20021341.png)
![Submited State](./images/Screenshot%202023-03-25%20022139.png)

### Links

- Live Site URL: [live site URL](https://kaleidoscopic-maamoul-75994a.netlify.app/)

## My process

### Built with

- HTML5 markup
- Including some id attributes for Js 
- CSS custom properties (colors, font properties, spacing, etc)
- Flebox 
- desktop-first workflow (I only did desktop version, they look the same)

### What I learned

There is nothing much going on html and css part except for the use of the data attributes. They are really helpful if you want to style two different things that they have some common properties and differ on others.

For example :

```html
<picture class="shape">
    <img src="./images/icon-star.svg" alt="star-icon">
</picture>

<button class="shape" data-cursor="active">1</button>
```
Here we have two items that need the same background, but we obviously don't want to have a hover on the icon yet we need to be in the buttons.
So there where the ```data-cursor="active"``` comes in place to solve that problem :

```css
.shape {
    background: var(--clr-neutral-800);
    color: var(--clr-neutral-700);
    width: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    text-align: center;
}

.shape[data-cursor="active"] {
    cursor: pointer;
}
```
And sure enough we can just style them both as we want them to be without having to write plenty of code.

Also, I found that using costum properties inside of the same container we want them to be used (specially for spacing) can be much cleaner than declaring them on the ```:root```.

Like so :
```css
.container {
    --padding: 2rem;
    --spacing: 2rem;

    padding: var(--padding);
    gap: var(--spacing);
}
```

So that if we ever want to change the spacing in some ereas, we can just adjust the values and that will solve the problem without having to go one by one.

This is a cool way to switch between different pages : 

First, we hide the second page or the "direction" page that we want to get to it, with css :

```css
.hidden {
    display: none;
}
```
And then with the use of submit button we can hide the actual page and bring the other hidden one,
with Javescript :

```js
//whenever we click the submit button :
submitBtn.addEventListener("click", () =>{
    //remove the class of hidden from the second page(so it will be visible)
    thankYouState.classList.remove('hidden');
    //and hide the first page meanwhile :
    ratingState.style.display = "none";
});
```

### Useful resources

- [Css Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is a complete guide about flexbox and its functionality, definitely helpful!
- [Josh Comeau Costum Css Reset](https://www.joshwcomeau.com/css/custom-css-reset/) - this is the css reset I personally like to use.

## Author

- Frontend Mentor - [@Simow03](https://www.frontendmentor.io/profile/Simow03)
- Twitter - [@mx7staali](https://twitter.com/mx7staali)

