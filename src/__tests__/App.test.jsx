import {describe, it, beforeEach, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "../App.jsx";
import {userEvent} from "@testing-library/user-event";

describe('Results component', () => {

    beforeEach(() => {
        render(<div data-testid="container"><App /></div>)
    })

    it('should match snapshot', async () => {
        expect(await screen.findByTestId('container')).toMatchSnapshot()
    })

    it('render warning if duration is less than 1', async () => {
        const durationInput = await screen.findByTestId(`inputs-duration-input`)
        await userEvent.clear(durationInput)
        expect(await screen.findByTestId('warn-duration')).toBeVisible()
    })

})
