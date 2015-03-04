QUnit.module("Calculator Test Suite", {
    setup: function(assert) {
        // before each test
    },
    teardown: function(assert) {
        // after each test
    }
});
QUnit.test("valid test: add() with two integer.", function(assert) {
    assert.equal(calc.add(1, 1), 2, "Passed!");
});
QUnit.test("invalid test: add() with two chars", function(assert) {
    assert.equal(calc.add("a", "b"), "Please input number!", "Passed!");
});
QUnit.module("QUnit Samples");
QUnit.test("synchronous test: sync header click", function(assert) {
    assert.expect(1);
    var header = $("#qunit-header");
    header.on("click", function() {
        assert.ok(true, "header was clicked!");
    });
    header.trigger("click");
});
QUnit.test("asynchronous test: async filter focus", function(assert) {
    var done = assert.async();
    var filter = $("#qunit-filter-input").focus();
    setTimeout(function() {
        assert.equal(document.activeElement, filter[0], "Filter was focused!");
        done();
    });
});
QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};