import { getConfig } from "./config"

describe("config.spec", () => {
  it("should handle values", async () => {
    
    expect(getConfig('test abc', 'a')).toEqual('a')
    
    import.meta.env['briefing test xyz'] = 'b'
    expect(getConfig('TEST xyz', undefined, true)).toEqual('b')

    window.briefingConfig = {
      'test-XYZ': 'c'
    }    
    expect(getConfig('TEST xyz', undefined, true)).toEqual('c')
  })
})