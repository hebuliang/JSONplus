registerTest(
   "15.12.1.1",
    "15.12.1.1-0-6.js",
    "<BOM> is not valid JSON whitespace as specified by the production JSONWhitespace.",
    function testcase() {
        try {
            JSON.parseEx('\ufeff1234'); // should produce a syntax error a
        }
        catch (e) {
            return true; // treat any exception as a pass, other tests ensure that JSON.parseEx throws SyntaxError exceptions
        }
    }
);