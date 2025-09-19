# Email Development Assessment – README


//My Sudo Code / Thought Proccess

-Gather all of the assets handed off to me
-No need to Slice, Team provided images that have already been uploaded to a server
    -Grab from Campaign Requeszt Form
-Set Up a Dev environment | VS Code for me or Parcel for Review | Then EmailOnAcid for testing across clients
-Review Insights into email in the Campaign Request from
-Layout:
    -Header: Mopdule 1:Teleion Logo with alt text and its link
    -Module 1: Hero Image, followed by icon next to a Paragraph with copy provided
                and a cta button which will include a <a> tag for linking, also provided.
    -Module 2: A Sevices image,that will just be a image block
    -Module 3: A total of three sub modules of three modules, figitial ops, anayltycs, and iot services, with all of them having a image link, a paragraph, and a borderless cta
    -Footer:  three icons, followed by a paragraph, and a unscribe text

Biggest diffrence between desktop and mobile view, is the services module, going 
from two rows in desktop to one single stacked column, will set this diffrence to show via css.

My accent color grabbed from psd file using the EyeDroper Tool:
#a8b34d

My footer color grabbed from the psd file using the EyeDroper Tool:
#7a756f


## Approach & Goals
The goal of this exercise was to create a production-ready, responsive marketing email using the assets provided. My focus was to build a template that:

- Displays consistently across major email clients (Gmail, Outlook, Apple Mail)
- Scales responsively for mobile devices
- Uses email-development best practices, including inline styles and table-based layout
- Ensures accessibility, readability, and brand fidelity

---

## Key Implementation Details

### 1. **Table-Based Layout**
I used nested `<table>` elements for structure, since this is the most reliable way to achieve consistent layouts across email clients. Also to ensure Outlook follows and listens as it tends to ignore specific stylying at times, thankfully teleion team provided rules beforehand.


### 2. **Inline CSS**
All critical styles were inlined to prevent stripping by Gmail or other ESPs. I used safe properties like `font-size`, `line-height`, and `background-color` for maximum compatibility.

### 3. **Responsive Design**
A simple `@media` query was included to make the template fluid on screens under 600px wide. This ensures mobile users have an optimized experience. I specifically created a media query for the sections Digital Ops, Internet of Things, and Analtycs module so that it can follow one stylying, which is the stacked view in mobile. 

### 4. **Accessibility & Semantics**
- Added the provided`ALT` text for images.
- Folowed color palate of email mock.
- Used semantic heading hierarchy to support screen readers.

### 5. **Bulletproof CTA Button**
The call-to-action was built using an `<a>` tag styled as a button with inline CSS to ensure it displays as expected across clients, including Outlook.

### 6. **Testing**
I previewed and validated the layout in desktop and mobile environments to ensure spacing, typography, and responsiveness looked correct. I just have a slight missalignment with my stacked images that some clients are picking up. 

Acid on Email Preview Link: https://app.emailonacid.com/shared-preview/CS8yKCC5xY

# Mobile View

https://github.com/Oscarl214/Email_Assestment/blob/main/MobileView.gif

# DeskTop View
https://github.com/Oscarl214/Email_Assestment/blob/main/DesktopView-.gif
---

## Notes & Future Considerations
In a real production environment, this email would likely be implemented as part of a modular template system or within a marketing automation platform (e.g., Salesforce Marketing Cloud, Marketo, Cordial, Oracle Rysps). For scalability, this layout could be converted into reusable components (e.g., React Email, MJML) to streamline future campaign creation.


