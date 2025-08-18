import {describe, it, beforeEach, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import SingleInput from "../SingleInput.jsx";
import {userEvent} from "@testing-library/user-event";

describe('SingleInput component', () => {

    let onChange;

    beforeEach(() => {
        onChange = vi.fn()
        render(<SingleInput label="aCamelCaseLabel" inputsToCalculate={1} onChange={onChange} testId="testId"/>)
    })

    it('should match snapshot', async () => {
        expect(await screen.findByTestId('testId')).toMatchSnapshot()
    })

    it('displays upper cased label', async () => {
        expect(await screen.findByTestId('testId-label')).toHaveTextContent('A CAMEL CASE LABEL')
    })

    it('has an input that trigger onChange', async () => {
        const input = await screen.findByTestId('testId-input')
        expect(input).toHaveValue(1)
        await userEvent.type(input, '2')
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('aCamelCaseLabel', '12')
    })

})
