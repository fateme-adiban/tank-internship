export function* priceGenerator(seed = 42, p0 = 1800, mu = 0.2, sigma = 5) {
  let p = p0
  const random = seedableRNG(seed)

  while (true) {
    const n = normalSample(random)
    const delta = mu + sigma * n
    p = Math.max(1000, p + delta)
    yield p
  }
}

// Box-Muller
function normalSample(rng: () => number) {
  const u1 = rng()
  const u2 = rng()
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
}

// Seedable RNG
function seedableRNG(s: number) {
  return function () {
    let t = (s += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
