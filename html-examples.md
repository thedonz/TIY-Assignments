<!---
Use the HTML Reference on MDN to identify at least 10 block-level tags like the ones we discussed today. Write down the "symbol" of the tag -- <html> -- and what its use means.
-->

This will contain 10 examples of HTML code.

1. Blockquote

```HTML
<blockquote>
TESTING!
</blockquote>
```
* The HTML Block Quotation Element indicates that the enclosed text is an extended quotation.

* Example 1: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

`<blockquote cite="http://developer.mozilla.org">
 <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>`

* Example 2: http://orlando.theironyard.com

`<blockquote>
<p><em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual knowledge)</em></p>
</blockquote>`

* Example 3: http://www.w3.org/TR/html-markup/blockquote.html

`<div class="no-number no-toc interface" id="blockquote-interface"></div>`

2. Line Break

```HTML
<p> "Get a shuttle ready. I shall assume full responsibility for losing them, and apologize to Lord Vader. Meanwhile, continue to scan the area!" </p>
<hr>
<p> "Apology accepted, Captain Needa." </p>
```

The `<hr>` element represents a thematic break between paragraph-level elements.

* Example 1: http://www.w3schools.com/tags/tag_hr.asp

`<p>The &lt;hr&gt; element is used to separate content (or define a change) in an HTML page.</p>

<hr>

<h2>Browser Support</h2>
`
* Example 2: http://www.w3schools.com/tags/tag_hr.asp

`<p>All the layout attributes are removed in HTML5. Use CSS instead.</p>
<hr>

<h2>Differences Between HTML and XHTML</h2>
`
* Example 3: http://xdonze.github.io/sweet_test.html

`<p> "Get a shuttle ready. I shall assume full responsibility for losing them, and apologize to Lord Vader. Meanwhile, continue to scan the area!" </p>
    <hr>
    <p> "Apology accepted, Captain Needa." </p>`


3. Audio

```HTML
<audio controls="controls"><source src="http://www.starwars.stopklatka.pl/sounds/reward.wav" type="audio/wav">
</audio>
```
* The audio element is used to embed sound content in documents. (Like badass Empire Strikes Back quotes!)

* Example 1: http://xdonze.github.io/sweet_test.html

`<audio controls="controls"><source src="http://www.starwars.stopklatka.pl/sounds/reward.wav" type="audio/wav">
</audio>`

* Example 2: http://xdonze.github.io/sweet_test.html
`    <audio controls="controls"><source src="http://www.moviesoundclips.net/tv1/drwho/susan.mp3" type="audio/wav"></audio>
`

* Example 3: http://xdonze.github.io/sweet_test.html
`    <audio controls="controls"><source src="http://www3.cellsea.com//content/ringtone/2012/RT4fa7627f291d9.mp3" type="audio/wav"></audio>
`

4. Forms

```HTML
<h3>What's your name, fool?</h3>
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>
```
* The `<form>` element represents a document section that contains interactive controls to submit information to a web server.

* Example 1: http://xdonze.github.io/sweet_test.html
`<form action="http://seveninchesofyourtime.com/wp-content/uploads/2014/06/guy.gif">`

* Example 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
`<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>`

* Example 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
`<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name">
  <input type="submit" value="Save">
</form>
`

5. Body Tag

```HTML
<html>
  <body>
    <h1>Howdy!</h1>
  </body>
</html>
```
* The HTML body element represents the content of an HTML document. There is only one body element in a document.

* Example 1: http://xdonze.github.io/
`<html>
  <head>
    <title>Donze's Domain</title>
  </head>
  <body>
    <h1 id="welcome-to-your-doom">Welcome to your doom!!</h1>
    ....
  </body>
</html>`

* Example 2: http://www.theironyard.com/
`<html>
  <head>
    <title>Welcome to The Iron Yard</title>
    <meta name="description" content="We run an intensive code school, a startup accelerator, kids's programming classes, and organize tech conferences and events."/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory-->
    <link rel="stylesheet" href="/styles/vendor.css">
    <link rel="stylesheet" href="/styles/main.css">
    <script src="/scripts/vendor/modernizr.js"></script>
    <script type="text/javascript" src="//use.typekit.net/zza7guc.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
  </head>
  <body>`

* Example 3: http://www.starwars.com
`
<!--

    "May the Source be with you"

-->

<!--[if lt IE 9]><html class="no-js no-media-query"><![endif]-->
<!--[if (gte IE 9)|(!IE)]><!-->
  <html class="no-js" version="HTML+RDFa 1.1" lang="en">
<!--<![endif]-->

<head prefix="fb: http://ogp.me/ns/fb# og: http://ogp.me/ns#">
  <title>StarWars.com | Star Wars: Episode VII and Star Wars Rebels</title>
  <link rel="stylesheet" href="//a.dilcdn.com/sw/application-d6ac209a135c.css" type="text/css">
<link rel="stylesheet" href="//a.dilcdn.com/sw/modules-ea7d5d83c41e.css" type="text/css">
  <script type="text/javascript">this.Disney={"portal":"www.starwars.com","ajaxBase":"/","didBase":"https://a.dilcdn.com/_swdid/"};</script>
<script src="//a.dilcdn.com/sw/head-b043660f8716.js" type="text/javascript"></script>
<link rel="canonical" href="http://www.starwars.com">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="apple-mobile-web-app-title" content="Star Wars">
<link rel="apple-touch-icon" href="//a.dilcdn.com/sw/apple-touch-icon-7c2f50571356.png">
<link rel="icon" sizes="196x196" href="//a.dilcdn.com/sw/apple-touch-icon-7c2f50571356.png">
<link rel="shortcut icon" href="//a.dilcdn.com/sw/favicon-222e13624446.ico">
<meta name="msvalidate.01" content="0A95B63CDADDB26AD590E60BDAB5728B">
<meta name="google-site-verification" content="BU5NQtTlFE3G5bdScjCT2NxDKZfMMCeCrx5tjletJg0">
<link rel="publisher" href="https://plus.google.com/+StarWars">
<meta name="description" content="The official site for Star Wars, featuring the latest on Star Wars: Episode VII and Star Wars Rebels, with daily news, games, and videos.">
<meta property="fb:app_id" content="251829831684619">
<meta property="og:title" content="StarWars.com | Star Wars: Episode VII, Star Wars Rebels &amp; Games">
<meta property="og:description" content="Visit the official site for Star Wars, featuring the latest on Star Wars: Episode VII and Star Wars Rebels, with daily news, games, and videos.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="StarWars.com">
<meta property="og:url" content="http://www.starwars.com">
<meta property="og:image" content="http://cdnvideo.dolimg.com/cdn_assets/1ee75700e088859e680f34438e823aed9be1dae9.png">
</head>

<body class="mtt">
`

6. Tables

```HTML
<table>
  <tr>
    <td>
    </td>
  </tr>
</table>
```
* Creates a spreadsheet-like table. Easy peasy.

* Example 1: http://xdonze.github.io/sweet_test.html
`<p>Spanish Study Group Members</p>
<table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
  </tr>
  <tr>
    <td>Troy</td>
    <td>Barnes</td>
  </tr>
    <td>Abed</td>
    <td>Nadir</td>
  </tr>
  <tr>
    <td>Annie</td>
    <td>Edison</td>
  </tr>
  <tr>
    <td>Britta</td>
    <td>Perry</td>
  </tr>
  <tr>
    <td>Jeff</td>
    <td>Winger</td>
  </tr>
  <tr>
    <td>Shirley</td>
    <td>Bennett</td>
  </tr>
  <tr>
    <td>Pierce</td>
    <td>Hawthorn</td>
  </tr>
</table>
`

* Example 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
`<p>Simple table with header</p>
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
`
* Example 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
`<table>
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>
`

7. Paragraph Tag
```HTML
<html>
  <body>
    <p></p>
  </body>
</html>
```
* Used to represent a paragraph of text.

* Example 1: http://xdonze.github.io/
`<p>This is a paragraph tag. It doesn't have to be a paragraph, tho.</p>
<p>See</p>
<p>Like this!</p>
<p>Some more</p>
<p>S'mores</p>
<p>"You're killing me Smalls!"</p>
`
* Example 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
`<p>This is the first paragraph of text. This is the first paragraph of text.
  This is the first paragraph of text. This is the first paragraph of text.</p>
`
* Example 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
`<p>This is second paragraph of text. This is second paragraph of text.
   This is second paragraph of text. This is second paragraph of text.</p>`


8. Description List
```HTML
<dl>
  <dt></dt>
  <dd></dd>
</dl>
```
* Creates a dictionary-like description list where items are correctly indented.

* Example 1:
`<dl>
  <dt>The Doctor</dt>
  <dd> The Doctor is a <b>Time Lord</b> from the planet of <i>Gallifrey</i> who travels through time and space in a dimensionally transcendent time machine called the <a href= "http://img0.joyreactor.com/pics/post/gif-art-tardis-doctor-who-967783.gif">TARDIS</a> (Time and Relative Dimensions In Space) which takes the exterior form of a 1963 London-era police telephone call box.
  </dd>
</dl>`

* Example 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
`<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>
</dl>
`
* Example 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
`<dl>
  <dt>Firefox</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>
  <dd>The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox,
      is a mostly herbivorous mammal, slightly larger than a domestic cat
      (60 cm long).</dd>
</dl>
`


9. Ordered List
```HTML
<ol>
  <li></li>
</ol>
```

* A numbered list, in the proper order.

* Example 1:
`<h4>My favorite doctors(and the actors who portrayed them)</h4>
<ol>
  <li>The 9th Doctor  (Christopher Eccleston)</li>
  <li>The 11th Doctor (Matt Smith)</li>
  <li>The 12th Doctor (Peter Capaldi)</li>
  <li>The 4th Doctor  (Tom Baker)</li>
  <li>The 10th Doctor (David Tennant)</li>
</ol>`
* Example 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
`<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
`
* Example 3:https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
`<ol start="7">
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>`

10. Heading Levels
```HTML
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
```

* Implement six levels of document headings, `<h1>` being most important and `<h6>` being least.

* Example 1:http://xdonze.github.io/
`<h1>"Fantastic!!""</h1>`
* Example 2:http://xdonze.github.io/
`<h2>"Geronimoooo!"</h2>`
* Example 3:http://xdonze.github.io/
`<h3>"Would you like a jelly baby?"</h3>`
