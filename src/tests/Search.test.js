// Search.test.js

import React from "react";
import { Search } from "../components";
import { act, render, fireEvent } from "@testing-library/react";

const props = {
    query: "Innopolis",
    change: () => {},
    keyPress: () => {}
};

it("Test key press event", async () => {
    let pressFn = jest.fn();
    let inpProps = { ...props, keyPress: pressFn };
    let rendered = render(<Search {...inpProps}/>);
    let inp = await rendered.findByTestId('inp')
    act(() => {
        fireEvent.keyPress(inp, { key: 'Enter', keyCode: 13 })
    });
    expect(pressFn).toHaveBeenCalledTimes(1);
    expect(inp.value).toBe('Innopolis');
    

});