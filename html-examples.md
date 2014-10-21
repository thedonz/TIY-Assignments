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

2. Line Break

```HTML
<p> "Get a shuttle ready. I shall assume full responsibility for losing them, and apologize to Lord Vader. Meanwhile, continue to scan the area!" </p>
<hr>
<p> "Apology accepted, Captain Needa." </p>
```

* The `<hr>` element represents a thematic break between paragraph-level elements.

3. Audio

```HTML
<audio controls="controls"><source src="http://www.starwars.stopklatka.pl/sounds/reward.wav" type="audio/wav">
</audio>
```
* The audio element is used to embed sound content in documents. (Like badass Empire Strikes Back quotes!)

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

5. Video

```HTML
<video src="//www.youtube.com/embed/wdcSxM7XNG4" autoplay>Enjoy!
</video>
```
* The `<video>` element is used to embed video content.

6. Tables

```HTML
<p>Spanish Study Group Members</p>
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
```
* Creates a spreadsheet-like table. Easy peasy.

7. Paragraph Tag
```HTML
<p>This is a paragraph tag. It doesn't have to be a paragraph, tho.</p>
<p>See</p>
<p>Like this!</p>
<p>Some more</p>
<p>S'mores</p>
<p>"You're killing me Smalls!"</p>
```

8. Description List
```HTML
<dl>
  <dt>The Doctor</dt>
  <dd> The Doctor is a <b>Time Lord</b> from the planet of <i>Gallifrey</i> who travels through time and space in a dimensionally transcendent time machine called the <a href= "http://img0.joyreactor.com/pics/post/gif-art-tardis-doctor-who-967783.gif">TARDIS</a> (Time and Relative Dimensions In Space) which takes the exterior form of a 1963 London-era police telephone call box.
  </dd>
</dl>
```
* Creates a dictionary-like description list where items are correctly indented.

9. Ordered List
```HTML
<h4>My favorite doctors(and the actors who portrayed them)</h4>
<ol>
  <li>The 9th Doctor  (Christopher Eccleston)</li>
  <li>The 11th Doctor (Matt Smith)</li>
  <li>The 12th Doctor (Peter Capaldi)</li>
  <li>The 4th Doctor  (Tom Baker)</li>
  <li>The 10th Doctor (David Tennant)</li>
</ol>
```

* A numbered list, in the proper order.

10. Heading Levels
```HTML
<h1>"Fantastic!!"</h1>
<h2>"Geronimooooo!!"</h2>
<h3>"SHUT UP! SHUTTETY UP UP!"</h3>
<h4>"Would you like a jelly baby?"</h4>
<h5>"Allon-sy!"</h5>
```

* Implement six levels of document headings, `<h1>` being most important and `<h6>` being least.
