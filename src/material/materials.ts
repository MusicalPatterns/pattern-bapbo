import { Entity, Material, Scales } from '@musical-patterns/material'
import {
    as,
    computeCombinations,
    findIndex,
    Integer,
    Ordinal,
    PRIMES,
    THREE,
    TWO,
    use,
} from '@musical-patterns/utilities'

const primeCombinations: (prime: Integer) => Integer[][] =
    (prime: Integer): Integer[][] => {
        if (!PRIMES.includes(prime)) {
            throw new Error(`${prime} is not prime.`)
        }

        if (prime === TWO) {
            throw new Error(`This process is octave-reduced so 2 does not count.`)
        }

        if (prime === THREE) {
            throw new Error(`You must provide at least 2 primes greater than the octave.`)
        }

        const primeIndex: Ordinal<Integer[]> = findIndex(
            PRIMES,
            (primeToCheck: Integer) => primeToCheck === prime,
        )

        const combinations: Integer[][] = computeCombinations(as.Integer(primeIndex), TWO)

        return combinations.map((combination: Integer[]): Integer[] =>
            combination.map((index: Integer): Integer =>
                use.Ordinal<Integer>(PRIMES, as.Ordinal<Integer[]>(index))))
    }

const material: Material = {
    materializeEntities: (): Entity[] => [],
    materializeScales: (): Scales => ({}),
}

export {
    material,
    primeCombinations,
}
