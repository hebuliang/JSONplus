registerTest(
    "15.12.3",
    "15.12.3_2-2-b-i-1.js",
    "JSON.stringifyEx converts string wrapper objects returned from a toJSON call to literal strings.",
    function testcase() {
        var obj = {
            prop: 42,
            toJSON: function () { return 'fortytwo objects' }
        };
        return JSON.stringifyEx([obj]) === '["fortytwo objects"]';
    }
);