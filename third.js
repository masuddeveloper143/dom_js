let main = document.getElementById("main-container");

let section = document.createElement('section');

section.innerHTML = `

<h1> my dynamic section <h1/>
<p>extra text added inside petagreph <p/>
<ul> 
<li>first item<li/>
<li>second item<li/>
<li>tihrd item<li/>
<li>four item<li/>
<li>fuve item<li/>
<ul/>
`

main.appendChild(section);