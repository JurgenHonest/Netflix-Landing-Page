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

