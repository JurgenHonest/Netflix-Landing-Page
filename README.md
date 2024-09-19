# Netflix-Landing-Page

### Can study the project by -- https://seewhatsnextbysumit.netlify.app/

## The HTML features:

### 1. Header:
A Netflix logo image and a "Sign in" button.
Showcase section with a heading, a description, and a call-to-action button offering a free trial.

### 2. Tab Section:
Three tab items offering highlights such as "Cancel Anytime," "Watch Anywhere," and "Pick your price," each with an icon.

### 3. Tab Content Section:
Detailed descriptions and images for each tab (e.g., watching on different devices, flexibility, and pricing plans).
A pricing table that compares the features of Basic, Standard, and Premium Netflix plans.

### 4. Footer:
Contact information and links to various Netflix resources like FAQ, Investor Relations, and legal notices.
The layout is structured using HTML tags like header, section, and table. The styling and interactions would be handled by external CSS (styles.css) and JavaScript (script.js)
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix - Watch TV Shows, Watch Movies Online</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/c6d4c6daf2.js" crossorigin="anonymous"></script>
</head>

<body>

    <header class="showcase">
        <div class="showcase-top">
            <img src="img/netflix.png" alt="Netflix">
            <a href="#" class="btn btn-rounded">Sign in</a>
        </div>
        <div class="showcase-content">
            <h1>See what's next</h1>
            <p>Watch anytime. Cancel anytime</p>
            <a href="#" class="btn btn-xl">
                Watch free for 30 Days <i class="fas fa-chevron-right btn-icon"></i>
            </a>
        </div>
    </header>

    <section class="tabs">
        <div class="container">
            <div id="tab-1" class="tab-item tabs-border">
                <i class="fas fa-door-open fa-3x"></i>
                <p class="hide-sm">Cancel Anytime</p>
            </div>
            <div id="tab-2" class="tab-item">
                <i class="fas fa-tablet-alt fa-3x"></i>
                <p class="hide-sm">Watch Anywhere</p>
            </div>
            <div id="tab-3" class="tab-item">
                <i class="fas fa-tags fa-3x"></i>
                <p class="hide-sm">Pick your price</p>
            </div>
        </div>
    </section>

    <section class="tab-content">
        <div class="container">
            <!--  Tab Content 1 -->
            <div id="tab-1-content" class="tab-content-item show">
                <div class="tab-1-content-inner">
                    <div>
                        <p class="text-lg">If you decide Netflix isn't for you - no problem, No commitment. Cancel
                            online anytime.</p>
                        <a href="#" class="btn btn-lg">Watch for Free For 30 Days</a>
                    </div>
                    <img src="img/tab-content-1.png" alt="">
                </div>
            </div>
            <!-- Tab 2 Content -->
            <div id="tab-2-content" class="tab-content-item">
                <div class="tab-2-content-top">
                    <p class="text-lg">
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </p>
                    <a href="#" class="btn btn-lg">Watch Free For 30 Days</a>
                </div>
                <div class="tab-2-content-bottom">
                    <div>
                        <img src="img/tab-content-2-1.png" alt="">
                        <p class="text-md">Watch on your TV</p>
                        <p class="text-dark">Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blues-ray players and
                            more.
                        </p>
                    </div>

                    <div>
                        <img src="img/tab-content-2-2.png" alt="">
                        <p class="text-md">Watch instantly or download for free</p>
                        <p class="text-dark">
                            Available on phone and tablet, wherever you go.
                        </p>
                    </div>

                    <div>
                        <img src="img/tab-content-2-3.png" alt="">
                        <p class="text-md">Use any computer</p>
                        <p class="text-dark">
                            Watch right on Netflix.com
                        </p>
                    </div>
                </div>
            </div>
            <!-- Tab 3 Content -->
            <div id="tab-3-content" class="tab-content-item">
                <div class="text-center">
                    <p class="text-lg">Choose one plan and watch everything on Netflix</p>
                    <a href="#" class="btn btn-lg">
                        Watch Free for 30 Days
                    </a>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly price after free month ends on 6/19/19</td>
                            <td>$8.99</td>
                            <td>$12.99</td>
                            <td>$15.99</td>
                        </tr>
                        <tr>
                            <td>HD Available</td>
                            <td><i class="fas fa-times"><i>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                        <tr>
                            <td>Ultra HD Available</td>
                            <td><i class="fas fa-times"><i>
                            <td><i class="fas fa-times"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                        <tr>
                            <td>Screens you can watch on at a the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Watch on your Laptop, TV, phone and tablet</td>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                        <tr>
                            <td>Unlimited movies and TV shows</td>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                        <tr>
                            <td>Cancel Anytime</td>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                        <tr>
                            <td>First month free</td>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                            <td><i class="fas fa-check"><i>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div class="footer-cols">
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Netflix Orginals</a></li>
            </ul>
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Redeem Gift Cards</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="#">Media center</a></li>
                <li><a href="#">Buy Gift Cards</a></li>
                <li><a href="#">Cookie Peferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
        </div>
    </footer>
    <script src="script.js"></script>
</body>

</html>
```


## The CSS defines the layout and styles for the Netflix Page. Key points including:

### 1. Global styles:
Resetting margins, paddings, and box-sizing. Defining root variables for primary colors.
### 2. Body styling:
Font settings, background color, and text color.
### 3. Showcase: 
Full-screen background image with overlay and centered content.
### 4. Tabs: 
A grid layout for tabs with hover effects and hidden content until selected.
### 5. Tab content:
Grid layouts to display images and descriptions.
### 6. Footer:
A responsive grid with links to various sections.
### 7. Buttons:
Styled for different sizes with hover effects.
### 8. Media queries: 
Adjust layouts and font sizes for smaller screens (max-width 960px).

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #c70711;
    --dark-color: #141414;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    --webkit-font-smoothing: antialised;
    background: #000;
    color: #999;
}

ul {
    list-style: none;
}

h1,
h2,
h3,
h4 {
    color: #fff;
}

a {
    color: white;
    text-decoration: none;
}

p {
    margin: 0.5rem 0;
}

img {
    width: 100%;
}

.showcase {
    width: 100%;
    height: 93vh;
    position: relative;
    background: url('../img/background.jpg') no-repeat center center/cover;
}

.showcase::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 80px 80px 150px #000000, inset -80px -80px 150px #000000;
}

.showcase-top {
    position: relative;
    height: 90px;
    z-index: 2;
}

.showcase-top img {
    width: 170px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.showcase-top a {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
}

.showcase-content {
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 4.5rem;
    z-index: 2;
}

.showcase-content h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.1;
    margin: 0 0 2rem 0;
}

.showcase-content p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.25;
    margin: 0 0 2rem;
}

/*Tabs*/
.tabs {
    background: var(--dark-color);
    padding-top: 1rem;
    border-bottom: 3px solid #3d3d3d;
}

.tabs .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: center;
    justify-content: center;
    text-align: center;
}

.tabs p {
    font-size: 1.2rem;
    padding-top: 0.5rem;
}

.tabs .container>div {
    padding: 1.5rem 0;
}

.tabs .container>div:hover {
    color: #fff;
    cursor: pointer;
}

.tabs-border {
    border-bottom: var(--primary-color) 4px solid;
}

/*Hide Content Initially*/
#tab-2-content,
#tab-1-content,
#tab-3-content {
    display: none;
}

.show {
    display: block !important;
}

/*Tabs Content*/

.tab-content {
    padding: 3rem 0;
    background: #000;
    color: #fff;
}

#tab-1-content .tab-1-content-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
}

#tab-2-content .tab-2-content-top {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
}

#tab-2-content .tab-2-content-bottom {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}
/*Table Content*/
.table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    border-spacing: 0;
}

.table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
}

.table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
}

.table tbody tr td:first-child {
    text-align: left;
}

.table tbody tr:nth-child(odd) {
    background-color: #222;
}

/*Footer*/
.footer {
    max-width: 75%;
    margin: 1rem auto;
    overflow: auto;
}

.footer,
.footer a {
    color: #999;
    font-size: 0.9rem;
}

.footer p {
    margin-bottom: 1.5rem;
}

.footer .footer-cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
}

.footer li {
    line-height: 1.9;
}

/*Conatainer*/
.container {
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
}

/*Text Styles*/
.text-xl {
    font-size: 2rem;
    margin-bottom: 1rem;

}

.text-lg {
    font-size: 1.8rem;
    margin-bottom: 1rem;

}

.text-center {
    text-align: center;
}

.text-dark {
    color: #999;
}

.text-md {
    font-size: 1.5rem;
    padding: 1rem;
}

/*Buttons*/
.btn {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
}

.btn-rounded {
    opacity: 0.9;
}

.btn:hover {
    border-radius: 5px;
}

.btn-xl {
    font-size: 1.5rem;
    padding: 1.5rem 2.1rem;
    text-transform: uppercase;
}

.btn-lg {
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
}
/*Responsive CSS Properties*/
@media(max-width: 960px) {
    .showcase {
        height: 70vh;
    }

    .hide-sm {
        display: none;
    }

    .showcase-top img {
        top: 30%;
        left: 5%;
        transform: translate(0);
    }

    .showcase-content h1 {
        font-size: 3.6rem;
        line-height: 1;
    }

    .showcase-content p {
        font-size: 1.2rem;
    }

    .footer .footer-cols {
        grid-template-columns: repeat(2, 1fr);
    }

    .btn-xl {
        font-size: 1.5rem;
        padding: 1.4rem 2rem;
    }

    .text-xl {
        font-size: 1.2rem;
    }

    .text-lg {
        font-size: 1.15rem;
    }

    .text-md {
        font-size: 1rem;
    }
}

@media(max-width: 960px) {
    .showcase:after {
        box-shadow: inset 60px 80px 150px #000000, inset -60px -80px 150px #000000;
    }

    #tab-1-content .tab-1-content-inner {
        grid-template-columns: 1fr;
        text-align: center;
    }

    #tab-2-content .tab-2-content-top {
        display: block;
        text-align: center;
    }

    #tab-2-content .tab-2-content-bottom {
        grid-template-columns: 1fr;

    }
}
```

## Javascript Code
Helps to manage the functionality of webpage; to wsitch between contents by clicking tabs.

### 1. querySelectors:
a. tabItems: Selects all elements with the class ".tab-item" (the clickable tabs).
b. tabContentItems: Selects all elements with the class ".tab-content-item" (the corresponding content sections).
### 2. selectItem function:
When a tab is clicked, it:
a. Calls removeBorder and removeshow to remove active styles from other tabs and content.
b. Adds a border to the clicked tab (tabs-border class).
c. Displays the corresponding content by adding the show class to the content element (identified using the clicked tab's ID).
### 3. Helper Functions:
a. removeBorder(): Removes the tabs-border class from all tab items.
b. removeshow(): Removes the show class from all content items, hiding them.
### 4.Event Listener:
Adds a click event listener to each tab item that triggers the selectItem function, enabling the tab-switching functionality.


```const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//Selecting tab Content item
function selectItem(e) {
    removeBorder();
    removeshow();
    
    //Add border to current tab
    this.classList.add("tabs-border");
    
    //Grab content item form DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    
    //Add show class
    tabContentItem.classList.add("show");
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tabs-border"));
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

//Listener for tab click 
tabItems.forEach(item => item.addEventListener("click", selectItem));
```
This code ensures that only the active tab is highlighted, and its corresponding content is displayed when clicked.

