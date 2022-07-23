import createMathOperation from "../.internal/CreateMathOperation";
const add = createMathOperation((augend, addend) => augend + addend, 0);
export default add;
