import React from "react";
import styled from "styled-components";
import Essay from "./Essay";
const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q="S2: What is the difference between Git, Github and Heroku?" >
                <ul>
                    <li>Git:Version control system, manage and edit code on their sysem; Free; Merge branches in once approved.</li>
                    <li>Github: A place for our Git Repos -- remote server -- leveraging Git. Teamwork, code review, sharing.</li>
                    <li>Heroku: Cloud Based Web (App) Server with the ability to deploy apps, without having a DevOps degree.</li>
                </ul>
            </Essay>
            <Essay q="S3: Explain the difference between HTML, CSS and JS." >
                <ul>
                    <li>HTML: Mark Up Language for tag based hierarchy and semantic definition.</li>
                    <li>CSS: The Skin (Appearance / Visual Asethetics), CSS Selectors -- to select html elements. </li>
                    <li>JS: Programming language for Interactive Features of the site (Behavior) Slideshows, scrolling, </li>
                </ul>
            </Essay>
            <Essay q="S4: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?" >
                <ul>
                    <li>Single Page: Does not have to reload like multi-page (less repetition)</li>
                    <li>Faster load time, more efficient.</li>
                </ul>
            </Essay>
            <Essay q="S5: What is the difference between Web Designer, Front End Developer and Back End develper?" >
                <ul>
                    <li><b>Web Designer:</b> A Web Designer is responsible for designing the overall layout and aesthetic for websites. Their duties include coding webpages or entire websites, meeting with clients to review website templates, mockups or refine their designs and running tests to preview layouts and website features.</li>
                    <li><b>Front-End Developer:</b> Front-end development is programming that focuses on the visual elements of a website or app that a user will interact with (the client-side). Front-end developers are responsible for implementing visual components on a website as well as interactive features like navigation, buttons, or anything that enhances overall usability. HTML, JavaScript, and CSS are often used to make sure the visual side (or client-side) of a site runs smoothly so that users can interact freely and comfortably with it. </li>
                    <li><b>Back-End Developer:</b> Back-end development focuses on data, modeling and the back side of website users can’t see (the server-side). The back-end developer is a programmer who creates components and features on the server-side, indirectly accessed by a user through a front-end application or system. These developers are tasked with creating, maintaining, testing, and debugging the entire back end. This includes the core application logic, databases, data and application integration, API, and other processes taking place behind the scenes. </li>
                </ul>
            </Essay>
            <Essay q="S6: Distinguish the difference between Site Relative, Document Relative, and Absolute Paths?" >
                <ul>
                    <li><b>Site Relative:</b> URL from the root of the website.</li>
                    <li><b>Document Relative:</b> Link to resources relative to the document writing </li>
                    <li><b>Absolute Path:</b> Fully resolved URL to a resource.</li>
                </ul>
            </Essay>
            <Essay q="S7: What is the difference between jpg, gif, png and SVG images?" >
                <ul>
                    <li><b>JPG:</b>Joint Photographic Expert Group: Lossy compression, can make for small files at the expense of quality.</li>
                    <li><b>GIF:</b>Indexed Color: Logos, graphic -- Graphic Interface Format: 256 total colors, animation is supported. Supports transparency.</li>
                    <li><b>PNG:</b>Millions of colors and Indexed Color: Lossless Compression, Portable Network Graphics: Transparency.</li>
                    <li><b>SVG:</b>Scalabe Vector Graphics: Animation, Lighter files due to vector, can also add images if necessary, without images scale without loss of quality. </li>
                </ul>
            </Essay>
            <Essay q="S8: Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps." >
                <ul>
                    <li><b>Project Manager: </b>Responsible for the entire project. Scope / goals, and orchestrating the team to meet deadlines. </li>
                    <li><b>Business Analyst: </b>Works with client to defined deliverables, understanding clients. They make the promises.</li>
                    <li><b>Scrum Master: </b>Manages the agile process, unlocking teams and keeping the ball moving forward.</li>
                    <li><b>UX Designer: </b>User Experience Designer: Design user stories, characters to visually implement the site.</li>
                    <li><b>Web Developer / Engineer: </b>Builds and maintains the website/ Translating UX Designs.</li>
                    <li><b>Quality Assurance Tester: </b>Test and find bugs in the app, working with developers to resolve before release. Automated testing.</li>
                    <li><b>DeOps: </b>Managing hardware and deployment of software.</li>
                    
                </ul>
            </Essay>
            <Essay q="S9: What is considered the right size for an image or video asset?" >
                <ul>
                    <p>Trick question, whatever size will give use the fastest download without compromising quality.</p>
                </ul>
            </Essay>
            <Essay q="S10: What does it mean for a company to be Agile? What are the pros and cons of being agile?" >
                <ul>
                    <li><b>Agigle Means: </b> Methodology allowing for more flexible rapid sprints -- using an interactive process. Adjust and change requirementsas they shift in real time.</li>
                    <li><b>Pros: </b>(1). Revisit: Revisits and rewrites of steps are encouraged to achieve the desired results. (2). Testing: Agile projects tasks are tested in flight, allowing for faster delivery and a better project. (3). Customer: Frequent delivery allows for quick changes in project direction while maintaining project scope.</li>
                    <li><b>Cons: </b>(1). Starting: Agile doesn’t set a strict schedule, which, if not managed, can be difficult under a tight deadline. (2).Finish line: Changing project requirements may cause problems in other areas of the organization. (3). Reliance: Agile requires a consistent team. A weak link in the Agile team or management could result in wasted time and money.</li>
                </ul>
            </Essay>
            <Essay q="S11: What are testing environments? What is the difference between Local, Dev, QA and Production?" >
                <p>A Testing Environments is: Space developers deploy their work for testing their work.</p>
                <ul>
                    <li><b>Local: </b>Developer's Machien -- to build and test your own code.</li>
                    <li><b>Dev: </b>Dev Testing Server: Dev Paired Code reviews.</li>
                    <li><b>QA: </b>Quality Assurance Testing Server for QA team.</li>
                    <li><b>UAT: </b>User Acceptance Testing Server for Customer to test.</li>
                    <li><b>Production: </b>Live website for users to access -- public domain.</li>
                </ul>
            </Essay>
            <Essay q="S12: Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?">
                <p>When we use it as a component or element to deliver some semantics, it is considered as part of HTML</p>
                <p>Printable is good in HTML, CSS by default is off -- as backgroudn image.</p>
                <p>HTML if image is related to content.</p>
            </Essay>
            <Essay q="S13. What is the difference between ID's, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)">
                <ul>
                    <li><b>ID: </b>Label: We use pound sign (#) in CSS and JS, Singular -- should only lablel one HTML element on a page.</li>
                    <li><b>Classes: </b>Label: We use the period (.) in CSS and JS, Defines a series; Multiple HTML elements. </li>
                    <li><b>Tag: </b>Any HTML tag in the HTML language.</li>
                    <li><b>Specificity: </b>Determines which selector and rule applies to an element.</li>
                </ul>
            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <ul>
                    <li><b>What is a CSS Preprocessor? </b>Turns CSS into Programming language to parsing variables and functions, etc.</li>
                    <li><b>What are some examples? </b>Sass, Less, Stylus</li>
                    <li><b>In react, what are styled components? </b> React Library -- can add styles directly in components. The evolution of CSS Preprocessors. Backticks -- template strings.</li>
                    <li><b>How do Styled Components violate separation of concerns? </b>Separation of concerns means: CSS for appearnce; JS for behavior; HTML for content.</li>
                </ul>
            </Essay>
            <Essay q="S15. Final Project: Pick a Subject Matter">
                <ul>
                    <li><b>Client: </b>My Real Estate Agent and Broker Friends</li>
                    <li><b>Purpose: </b>To showcase their current and previous property listings and their license and contact information.</li>
                    <li><b>Why did you choose the subject: </b> Because I currently work in Real Estate industry and have seen a great need of those agents and brokers who need their own personal website to display their portfolios and to connect with their clients.</li>
                </ul>
            </Essay>
            <Essay q="S16. What is the difference between Web Hosts, Domains, and FTP?">
                <ul>
                    <li><b>Web Hosts: </b>Service to host web files related to delivering your web applications.</li>
                    <li><b>Domains: </b>Address mapped to a website/app - human friendly way to access the IP version of a website.</li>
                    <li><b>FTP: </b>File Transfer Protocol: Used to move files from one system to a remote system. SFTP: Secure.</li>
                </ul>
            </Essay>
            <Essay q="S17. What is a Package Manager (e.g. NPM, Composer)? How does it play a role in software development?">
                <ul>
                    <li><b>What is a Package Manager: </b>Keeps track of software versions installed, upgrade, or remove. Packages -- collections of files to install. Creates a set of dependencies.</li>
                    <li><b>How does it play a role in software development? </b>Ensure all team members are using same dependencies. And control over versioning -- less likely to break apps.</li>
                </ul>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`