import {describe, it, beforeEach, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Results from "../Results.jsx";

describe('Results component', () => {

    beforeEach(() => {
        render(<Results input={{
            initialInvestment: 10_000,
            annualInvestment: 1200,
            expectedReturn: 5,
            duration: 10
        }} testId="testId"/>)
    })

    it('should match snapshot', async () => {
        expect(await screen.findByTestId('testId')).toMatchSnapshot()
    })

})
