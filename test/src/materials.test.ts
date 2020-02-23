import { as, Integer } from '@musical-patterns/utilities'
import { primeCombinations } from '../../src/indexForTest'

describe('materials', (): void => {
    describe('prime combinations', (): void => {
        it('given a non-prime, errors', (): void => {
            expect((): void => {
                primeCombinations(as.Integer(4))
            })
                .toThrowError('4 is not prime.')
        })

        it('given 2, the octave, errors', (): void => {
            expect((): void => {
                primeCombinations(as.Integer(2))
            })
                .toThrowError('This process is octave-reduced so 2 does not count.')
        })

        it('given 3, errors', (): void => {
            expect((): void => {
                primeCombinations(as.Integer(3))
            })
                .toThrowError('You must provide at least 2 primes greater than the octave.')
        })

        it('given a prime limit, will return a sorted list of all combinations of two primes (excluding octaves)', (): void => {
            expect(primeCombinations(as.Integer(5)))
                .toEqual([
                    [ 3, 5 ],
                ].map((combination: number[]): Integer[] => combination.map(as.Integer)))
            expect(primeCombinations(as.Integer(7)))
                .toEqual([
                    [ 3, 5 ],
                    [ 3, 7 ],
                    [ 5, 7 ],
                ].map((combination: number[]): Integer[] => combination.map(as.Integer)))
            expect(primeCombinations(as.Integer(11)))
                .toEqual([
                    [ 3, 5 ],
                    [ 3, 7 ],
                    [ 3, 11 ],
                    [ 5, 7 ],
                    [ 5, 11 ],
                    [ 7, 11 ],
                ].map((combination: number[]): Integer[] => combination.map(as.Integer)))
        })
    })
})
