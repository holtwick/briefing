import { normalizeName } from "./names"

describe("Names", () => {
  it("should normalize", () => {
    let sample = "  ärger--macht/nur der 123Casanova!=="
    expect(normalizeName(sample)).toEqual("arger-macht-nur-der-123casanova")
  })
})
