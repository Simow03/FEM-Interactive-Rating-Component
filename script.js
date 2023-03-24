//introducing the first rating page
const ratingState = document.getElementById('rating-state');

//introducing the second thank you page
const thankYouState = document.getElementById('Thank-you-state');

//defining the submit button
const submitBtn = document.querySelector('.btn');

//creating the selecting text that will be shown on the second page
const text = document.getElementById('selection');

//whenever we click the submit button :
submitBtn.addEventListener("click", () =>{
    //remove the class of hidden from the second page(so it will be visible)
    thankYouState.classList.remove('hidden');
    //and hide the first page meanwhile :
    ratingState.style.display = "none";
});

//calling all the buttons with the same class 'shape'
const ratings = document.querySelectorAll('.shape');

ratings.forEach((rating) =>{
    rating.addEventListener("click", () =>{
        //getting whatever number that's in the button clicked :
        const currentRate = rating.innerHTML;
        //paste it in the text field
        text.innerText = `You selected ${currentRate} out of 5`;
    })
})