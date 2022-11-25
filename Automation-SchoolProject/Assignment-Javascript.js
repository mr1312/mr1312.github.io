//Assignment Javascript 
//Mainly used to centrally copy all functions inside website 

function HideMuhPassword()
{
	var Password_Value = document.getElementById("password");
	
	if (Password_Value.type === "password") 
		{
			Password_Value.type = "text";
		}	
	else 
			{
				Password_Value.type = "password";
			}
}

function SubmitContactDocument()
{
	alert("Your message has been sent :)");
}

function SubmitRegister()
{
	alert("Your account has been registered");
}

function SubmitLogin()
{
		alert("You have successfully logged in");
}
