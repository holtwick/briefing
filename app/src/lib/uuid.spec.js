// Copyright (c) 2020 Dirk Holtwick. All rights reserved. https://holtwick.de/copyright

import { base32Encode, UUID, UUID_length } from './uuid'

describe('UUID', () => {

  it('should convert to Base32', () => {
    expect(UUID().length).toEqual(UUID_length)
    expect(UUID()).not.toEqual(UUID())
    // console.log(UUID())
  })

  it('should do Base32', () => {
    expect(base32Encode(Buffer.from('Hello World'))).toBe('91JPRV3F41BPYWKCCG')
    expect(base32Encode(Buffer.from([0, 0, 0, 0]))).toBe('0000000')
    expect(base32Encode(Buffer.from([255, 255, 255, 255]))).toBe('ZZZZZZR')
  })

  it('should create unique IDs', () => {
    let prevIDs = []
    for (let i = 0; i < 1000; i++) {
      let newID = UUID()
      expect(prevIDs).not.toContain(newID)
      prevIDs.push(newID)
      expect(prevIDs).toContain(newID)
      expect(newID.length).toBe(26)
    }
  })

})
