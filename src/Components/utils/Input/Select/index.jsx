// DATA
const data = [
  { id: 1, name: "1-kurs", value: 1 },
  { id: 2, name: "2-kurs", value: 2 },
  { id: 3, name: "3-kurs", value: 3 },
  { id: 4, name: "4-kurs", value: 4 },
];

// changeFunc
const ChangeFuncSkaletton = (e) => {
  console.log(e.target.value);
};

const Select = ({
  addClass,
  changeFunc = ChangeFuncSkaletton,
  options = data,
  isRequired,
}) => {
  return (
    <select
      onChange={(e) => changeFunc(e)}
      className={`outline-none w-[90%] py-1 px-2 text-base placeholder:text-base font-medium transition-all duration-300 focus:bg-transparent focus:text-white focus:placeholder:text-cyan-600 border-2 border-white focus:border-cyan-500 rounded pr-8 flex-1 ${addClass}`}
      required={isRequired}
    >
      {options &&
        options.length &&
        options?.map((v) => {
          return (
            <option
              className={`outline-none w-[90%] py-1 px-2 text-base placeholder:text-base font-medium transition-all duration-300 focus:bg-transparent text-cyan-600  border-2 border-white focus:border-cyan-500 rounded pr-8 flex-1 ${addClass}`}
              key={v.id}
              value={v.id}
            >
              {v.name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
