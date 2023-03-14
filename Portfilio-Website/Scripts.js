/*
Links 
https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event 

*/


// Used to match the current href with the Nav-link a tag if yes do styling
document.querySelectorAll('.Nav-link').forEach
(link => 
{
	if(link.href === window.location.href)
	{
		link.setAttribute('aria-current', 'page')
		
	}
	
})



/*
const test = document.getElementsByClassName("test");

test.addEventListener("mouseenter", (event) => 
	{
		event.target.style.color = "purple";
		event.target.style.fontSize = "20px";
		
		setTimeout(() => 
		{
			event.target.style.color = "";	
		}, 500);
		
	}
);
*/



/*
object.onmouseover = function()
{
	document.getElementsByClassName(".Nav-link").
	
}
*/