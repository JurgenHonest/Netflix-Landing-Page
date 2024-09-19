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

This code ensures that only the active tab is highlighted, and its corresponding content is displayed when clicked.

