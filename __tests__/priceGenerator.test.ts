import { priceGenerator } from "../lib/priceSimulator"

describe("Price Generator", () => {
  it("should produce reproducible prices with the same seed", () => {
    const gen1 = priceGenerator(42)
    const gen2 = priceGenerator(42)

    const seq1 = Array.from({ length: 5 }, () => gen1.next().value)
    const seq2 = Array.from({ length: 5 }, () => gen2.next().value)

    expect(seq1).toEqual(seq2)
  })

  it("should change price on each tick", () => {
    const gen = priceGenerator(7)

    const p0 = gen.next().value
    const p1 = gen.next().value

    expect(p1).not.toBe(p0)
  })
})
