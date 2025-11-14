import {describe, it, expect} from "vitest";
import {calculateInvestmentResults, formatter} from "../investment.js";

describe('investment module', () => {

    describe('formatter', () => {

        it('format strings', () => {
            expect(formatter.format('0')).toMatch(/0\s€/)
            expect(formatter.format('123456789')).toMatch(/123\s456\s789\s€/)
            expect(formatter.format('123456789.00')).toMatch(/123\s456\s789\s€/)
        })

        it('format numbers', () => {
            expect(formatter.format(0)).toMatch(/0\s€/)
            expect(formatter.format(0.0)).toMatch(/0\s€/)
            expect(formatter.format(123_456_789)).toMatch(/123\s456\s789\s€/)
            expect(formatter.format(123_456_789.0)).toMatch(/123\s456\s789\s€/)
        })

    })

    describe('calculateInvestmentResults', () => {

        it('calculate one shot investment over a year', () => {
            const res = calculateInvestmentResults({
                initialInvestment: 10000,
                duration: 1,
                annualInvestment: 0,
                expectedReturn: 5
            })
            expect(res).not.toBeNull()
            expect(res).toHaveLength(1)

            const resFirstYear = res[0]
            expect(resFirstYear.year).toEqual(1)
            expect(resFirstYear.interest).toEqual(500)
            expect(resFirstYear.valueEndOfYear).toEqual(10500)
            expect(resFirstYear.annualInvestment).toEqual(0)
        })

        it('calculate cumulative investment over 2 years', () => {
            const res = calculateInvestmentResults({
                initialInvestment: 10000,
                duration: 2,
                annualInvestment: 1200,
                expectedReturn: 5
            })
            expect(res).not.toBeNull()
            expect(res).toHaveLength(2)

            const resFirstYear = res[0]
            expect(resFirstYear.year).toEqual(1)
            expect(resFirstYear.interest).toEqual(500)
            expect(resFirstYear.valueEndOfYear).toEqual(11700)
            expect(resFirstYear.annualInvestment).toEqual(1200)

            const resSecondYear = res[1]
            expect(resSecondYear.year).toEqual(2)
            expect(resSecondYear.interest).toEqual(585)
            expect(resSecondYear.valueEndOfYear).toEqual(13485)
            expect(resSecondYear.annualInvestment).toEqual(1200)
        })

        it('calculate invested capital throughout the years', () => {
            const res = calculateInvestmentResults({
                initialInvestment: 10000,
                duration: 5,
                annualInvestment: 1200,
                expectedReturn: 5
            })

            expect(res).not.toBeNull()
            expect(res).toHaveLength(5)
            expect(res[0].investedCapital).toEqual(11200)
            expect(res[1].investedCapital).toEqual(12400)
            expect(res[2].investedCapital).toEqual(13600)
            expect(res[3].investedCapital).toEqual(14800)
            expect(res[4].investedCapital).toEqual(16000)
        })

        it('calculate sum of interests', () => {
            const res = calculateInvestmentResults({
                initialInvestment: 10000,
                duration: 5,
                annualInvestment: 1200,
                expectedReturn: 5
            })

            expect(res).not.toBeNull()
            expect(res).toHaveLength(5)
            expect(res[0].interestSum).toEqual(500)
            expect(res[1].interestSum).toEqual(1085)
            expect(res[2].interestSum).toEqual(1759)
            expect(res[3].interestSum).toEqual(2527)
            expect(res[4].interestSum).toEqual(3394)
        })
    })

})
