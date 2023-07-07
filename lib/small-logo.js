window.onresize = set_logo_size;
var smaller_view = new Boolean(false)

function set_logo_size()
{
    logo = document.getElementById("small-logo-container");
    height = logo.offsetHeight;
    // Get the computed style of the element
    var style = window.getComputedStyle(logo);

    // Check the visibility property
    var visible = style.getPropertyValue("visibility");
    console.log(visible);
    
    if(visible)
    {
        logo.style.height = "120px";
        height = logo.offsetHeight;
        if(height < 120)
        {
            logo.style.height = "0px";
        }
    }
    else
    {
        logo.style.height = "0px";
    }
    
}