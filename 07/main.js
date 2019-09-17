const buff = Buffer.from("w tym zdaniu są jakieś polskie znamki", "utf8")
console.log(buff.toString())
console.log(buff)
buff.write("Lorem ipsum");
console.log(buff.toString())