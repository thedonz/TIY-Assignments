<!--
Use the CSS Reference on MDN to identify ALL the styles that affect the color of things (~10).
-->


1. background-color

2. border-bottom-color

3. border-color

4. border-left-color

5. border-right-color

6. border-top-color

7. color

8. column-rule-color

9. outline-color

10. text-decoration-color

<!-- Add 10 more CSS rules with 3 examples to your Reading-CSS.md file.
This time look for font- and text-affecting rules (hint hint). -->

11. font-family - *a prioritized list of font family names and/or generic family names specified for the selected element.*

  * .exampleserif {
    font-family: Times, "Times New Roman", Georgia, serif;
    }
  * .examplefantasy {
    font-family: fantasy;
    }
  * .examplemonospace {
    font-family: "Lucida Console", Courier, monospace;
    }

12. font-size -  *property specifies the size of the font – specifically the desired height of glyphs from the font.*

  * p { font-size: xx-large }
  * .small {
	font-size: xx-small;
    }
  * h1 { font-size: 250% }

13. font-style -  allows italic or oblique faces to be selected within a font-family.

  * p.normal { font-style:normal }
  * p.gtfo  { font-style: comic sans }
  * p.italy { font-style: italic }

14. font-weight - specifies the weight or boldness of the font.

  * p { font-weight: bold; }
  * span { font-weight: lighter; }
  * h1 { font-weight: 250; }

15. text-decoration - is used to set the text formatting to underline, overline, line-through or blink.

  * p.underover {
    text-decoration: underline overline;
    }
  * p.line {
    text-decoration: line-through;
    }
  * h1.under {
    text-decoration: underline;
    }

16. text-align - describes how inline content like text is aligned in its parent block element. text-align does not control the alignment of block elements itself, only their inline content.

  * { text-align: center; border:solid; }
  * { text-align: left; }
  * { text-align: right; }

17. text-shadow - adds shadows to text.

  * .red-text-shadow {
   text-shadow: red 0 -2px;
    }
  * .white-with-blue-shadow {
   text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
   color: white;
   font: 1.5em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
    }
  * .gold-on-gold {
   text-shadow: rgba(0,0,0,0.1) -1px 0, rgba(0,0,0,0.1) 0 -1px,
   rgba(255,255,255,0.1) 1px 0, rgba(255,255,255,0.1) 0 1px,
   rgba(0,0,0,0.1) -1px -1px, rgba(255,255,255,0.1) 1px 1px;
   color: gold;
   background: gold;
    }

18. text-decoration-color - sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line.

  * .vaders-lightsaber {
    text-decoration: underline;
    text-decoration-color: red;
    }
  * .yodas-lightsaber {
    text-decoration: strikethrough;
    text-decoration-color: green;
    }
  * .mace-windus-lightsaber {
    text-decoration: bold;
    text-decoration-color: purple;
    }

19. text-rendering - property provides information to the rendering engine about what to optimize for when rendering text.

  * grandma  { text-rendering: optimizeLegibility; }
  * grandpa  { text-rendering: optimizeSpeed; }
  * spike    { text-rendering: geometricPrecision; }

20. text-decoration-style - defines the style of the lines specified by text-decoration-line.

  * .theres-a-snake-in-my-boots {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: blue;
    }
  * to-infinity-and-beyond {
      text-decoration-line: bold;
      text-decoration-style: double;
      text-decoration-color: green;
    }
  * yeehaw {
      text-decoration-line: italic;
      text-decoration-style: wavy;
      text-decoration-color: white;
    }

21. Float - specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.

  * `<style type="text/css">
      div { border: solid red; max-width: 70ex; }
      h4 { float: left; margin: 0; }
      </style
      <h4>HOWDY!!</h4>`
  * #darthvader {
    float: right;
    }
  * span {
    float: none;
    }

22. Clear - specifies whether an element can be next to floating elements that precede it or must be moved down below them.

  * `p { clear: none}`
  * `h2 { clear: left }`
  * `h3 { clear: right}`

23. Position - 
