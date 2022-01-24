import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: 'Spoqa Han Sans', sans-serif;
}

a {
	color: #121417;
}
// ===========================================================================
// Font Style
// ===========================================================================
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 100;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Thin.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Thin.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Thin.otf') format('opentype');
}
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 300;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Light.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Light.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Light.otf') format('opentype');
}
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 400;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Regular.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Regular.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Regular.otf') format('opentype');
}
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 500;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Medium.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Medium.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Medium.otf') format('opentype');
}
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.otf') format('opentype');
}
@font-face {
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.woff2') format('woff2'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.woff') format('woff'),
       url('assets/fonts/Spoqa-Han-Sans-Neo-Bold.otf') format('opentype');
}
// ===========================================================================
// Reset CSS
//
// http://meyerweb.com/eric/tools/css/reset/ 
//  v2.0 | 20110126
// License: none (public domain)
// ===========================================================================
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
	border: unset;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
html {
	overflow-y: auto;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input, input:hover, input:active {
	outline: 0;
} 
`;

export default GlobalStyle;
