import print from "./msg.js";

console.log(_.difference([1, 2, 3], [4, 5]));

console.log(_.lastIndexOf([1, 2, 3, 4, 5, 6], 4));

if (module.hot) {
  module.hot.accept("./msg.js", function() {
    console.log("O módulo de mensagem atualizou");
    print();
  });
}
