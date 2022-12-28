"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_test_1 = require("./hello-test");
const chai_1 = require("chai");
require("mocha");
describe('First test', () => {
    it('should return true', () => {
        const result = (0, hello_test_1.helloTest)();
        (0, chai_1.expect)(result).to.equal(true);
    });
});
