const {soma, subtracao} = require ('../math')

test('soma 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3)
})

test('subtracao 2 - 1 to equal 1', () => {
    expect(subtracao(2, 1)).toBe(1)
})