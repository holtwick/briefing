import { Emitter } from "./emitter"

describe("Emitter", () => {
  it("should emit", (done) => {
    let e = new Emitter()
    e.on("test", done)
    e.emit("test")
  })
})
