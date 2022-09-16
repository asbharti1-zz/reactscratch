

/*
import React from "react";
import Mounting from "./mounting";

describe("when testing directly",() =>{
    beforeAll(() =>{
        result = Mounting({name : "Anand"});
    });

    it("return dom", () =>{
        expect(result).not.toBeNull();
    })
});
*/


describe("when setting up test", ()=>{
    it("should Pass 1",() => {
        expect(1+1).toBe(2);
    });
});