/* Version 1 */
var element = document.getElementsByClassName("navbar-brand");
element[0].innerHTML = "<style>.toplogo { width: auto; height:42px; padding-right:3px; } .navbar-brand span { padding-left: 3px; } .course-price { display: none; } </style> <img src=\"https://d35v9chtr4gec.cloudfront.net/hayclass/1655118166418716096.png\" class=\"toplogo\"><span class=\"align-middle\"></span>";


/* Version 2 */
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://arman.cz/hayclass/stylesheet.css';
document.getElementsByTagName('HEAD')[0].appendChild(link);
var element = document.getElementsByClassName("navbar-brand");
element[0].innerHTML = "<style>.toplogo-img { width: 116px; height:40px; padding-right:3px; } .toplogo-text { font-family: hayclassregular; } .navbar-brand span { padding-left: 3px; color: #F0AE00 !important; } .course-price { display: none; } </style> <span class=\"toplogo-text pt-2\"><h1>@yclass</h1></span>";