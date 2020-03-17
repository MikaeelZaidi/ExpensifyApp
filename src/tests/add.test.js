const add = (a, s) => {
    return a + s
};

test('should add two numbers', () => {
    const result=add(22,21);
    expect(result).toBe(43)
})

