import { fetchWeather } from "../api/fetchWeather";

it('test axios and returns data', async () => {
    const data = await fetchWeather("New York");
    expect(data.name).toBe("New York");
})