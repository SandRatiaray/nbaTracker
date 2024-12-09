import { expect, test } from '@jest/globals'

beforeAll(() => console.log('1- before all'))

test(" 1 + 1 should be 2", () => {
    // To be for primitives and to equal ohter
    const obj = { key: 1 }
    expect(obj).toEqual({
        key: 1
    });
})