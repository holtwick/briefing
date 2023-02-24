import { clearLocal, getLocal } from './local'

describe('Local', () => {
  it('should store data', () => {
    clearLocal()
    expect(getLocal('a') == null).toBe(true)
    expect(getLocal('a', (name) => name)).toEqual('a')
    expect(getLocal('a')).toEqual('a')
    expect(getLocal('a', 'b')).toEqual('a')
    expect(getLocal('b', 'b')).toEqual('b')
  })
})
