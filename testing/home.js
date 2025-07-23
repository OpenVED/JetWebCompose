import Button from "../components/button.js";
import setContent from "../core/utils.js";

setContent(
    Button(
        {
            text : "Click me!", 
            onclick : () => {
                alert("Ujjwal bhai is good")
            },
            modifier : {
                fontFamily : "Inter",
                width : '8rem',
                color : 'white',
                width : "400px",
                hover : {
                    color : "yellow"
                }
            }
        }
    )
)