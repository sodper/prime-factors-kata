'use strict'

function primeFactors (n) {
  let primes = []
  let candidate = 2

  while (n > candidate) {
    while (n % candidate === 0) {
      primes.push(candidate)
      n = n / candidate
    }
    candidate++
  }

  if (n > 1) {
    primes.push(n)
  }

  return primes
}

exports.primeFactors = primeFactors
