/*
Copyright (c) 2012 Rob Larsen (rob@htmlcssjavascript.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*html3shiv?*/
/*@cc_on'acronym applet bgsound center dir fn font big blink strike tt u isindex layer ilayer nolayer listing marquee nobr plaintext spacer xml xmp'.replace(/\w+/g,function(n){document.createElement(n)});@*/


//Let's get document.all back
if(!document.all) {
	document.all = function() {
		if ( (typeof(arguments[0])).toLowerCase()  == "string") {
			return document.getElementById(arguments[0])
		}
		else if ( (typeof(arguments[0])).toLowerCase() == "number") {
			return document.getElementsByTagName("*")[arguments[0]];	
		}
	}
};
