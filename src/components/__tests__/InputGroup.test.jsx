import {describe, it, beforeEach, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import InputGroup from "../InputGroup.jsx";

describe('InputGroup component', () => {

    let onChange;

    beforeEach(() => {
        onChange = vi.fn()
        render(<InputGroup inputsToCalculate={{
            initialInvestment: 10_000,
            annualInvestment: 1200,
            expectedReturn: 5,
            duration: 10
        }} onChange={onChange} testId="testId"/>)
    })

    it('should match snapshot', async () => {
        expect(await screen.findByTestId('testId')).toMatchSnapshot()
    })

    describe.each([
        ['initialInvestment', 'INITIAL INVESTMENT', 10_000],
        ['annualInvestment', 'ANNUAL INVESTMENT', 1200],
        ['expectedReturn', 'EXPECTED RETURN', 5],
        ['duration', 'DURATION', 10]
    ])('has a SingleInput component %s', (testId, label, value) => {

        it(`has a label ${label}`, async () => {
            expect(await screen.findByTestId(`testId-${testId}-label`)).toHaveTextContent(label)
        })

        it(`has an input with initial value ${value}`, async () => {
            const input = await screen.findByTestId(`testId-${testId}-input`)
            expect(input).toHaveValue(value)
            await userEvent.clear(input)
            expect(onChange).lastCalledWith(testId, '')
        })

    })

})
