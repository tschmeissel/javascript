const assert = require("assert");
const Tree = require("../tree").Tree;

describe("Tree", () => {
	it("should use Tree", () => {
		const documentTree = new Tree;
		documentTree.add("document", "root");
		documentTree.add("section1", "document");
		documentTree.add("section2", "document");
		documentTree.add("section3", "document");
		
		documentTree.add("article1-1", "section1");
		documentTree.add("article1-2", "section1");
		documentTree.add("article2-1", "section2");
		documentTree.add("article3-1", "section3");
		
		assert.equal(documentTree.search("article1-1"), true);
		assert.equal(documentTree.search("article11"), false);
		
		documentTree.remove("section2");
		assert.equal(documentTree.search("article12-1"), false);
	});
})