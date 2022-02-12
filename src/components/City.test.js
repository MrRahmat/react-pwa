// City.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import City from "./City.jsx";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const fakeData = {
    coord: {
        lon: 49.1221,
        lat: 55.7887
    },
    weather: [
        {
            id: 600,
            main: "Snow",
            description: "light snow",
            icon: "13d"
        }
    ],
    base: "stations",
    main: {
        temp: -0.77,
        feels_like: -5.91,
        temp_min: -0.77,
        temp_max: -0.66,
        pressure: 1011,
        humidity: 91,
        sea_level: 1011,
        grnd_level: 1004
    },
    visibility: 10000,
    wind: {
        speed: 5.05,
        deg: 268,
        gust: 8.02
    },
    snow: {
        "1h": 0.13
    },
    clouds: {
        all: 84
    },
    dt: 1644664546,
    sys: {
        type: 2,
        id: 48937,
        country: "RU",
        sunrise: 1644639345,
        sunset: 1644673195
    },
    timezone: 10800,
    id: 551487,
    name: "Kazan’",
    cod: 200
};

it("renders weather data", () => {
    act(() => {
        render(<City data={fakeData} />, container)
    });
    expect(container.querySelector("span").textContent).toBe(fakeData.name);
    expect(container.querySelector("p").textContent).toBe(fakeData.weather[0].description);

});