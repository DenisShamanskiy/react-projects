import { useState } from "react";
import "./GenerarorPassword.css";

function GenerarorPassword() {
  const options = [
    {
      name: "Нижний регистр",
      value: "abcdefghijklmnopqrstuvwxy",
    },
    {
      name: "Верний регистр",
      value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      name: "Цифры",
      value: "0123456789",
    },
    {
      name: "Символы",
      value: "!@#$%^&*()",
    },
  ];
  /* Результат генерации */
  const [password, setPassword] = useState("");
  /* Длина пароля */
  const [lengthPassword, setLengthPassword] = useState(8);
  /* Выбранные опции */
  const [checkedOptions, setCheckedOptions] = useState(
    new Array(options.length).fill(false)
  );
  /* Строка с выбранными опциями для генератора */
  const [strOptions, setStrOptions] = useState("");

  /* Обрабочик Checkbox */
  const handleCheckbox = (position) => {
    const updatedCheckedOptions = checkedOptions.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedOptions(updatedCheckedOptions);

    const updatedStrOptions = updatedCheckedOptions.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + options[index].value;
        }
        return sum;
      },
      ""
    );
    setStrOptions(updatedStrOptions);
  };

  /* Обрабочик длины пароля */
  function handleLengthPassword(event) {
    setLengthPassword(event.target.value);
  }

  /* Функция генерации пароля */
  function generation(string) {
    let passwordGeneration = "";
    for (var i = 0; i < lengthPassword; ++i) {
      passwordGeneration += string.charAt(
        Math.floor(Math.random() * string.length)
      );
    }
    setPassword(passwordGeneration);
  }

  return (
    <article className="generaror">
      <h1 className="generaror__title">Генератор паролей</h1>
      <p className="generaror__password">{password}</p>

      <div className="generaror__input">
        <input
          type="range"
          id="length"
          name="length"
          min="6"
          max="50"
          value={lengthPassword}
          onChange={handleLengthPassword}
        ></input>
        <label className="generaror__input-label" htmlFor="length">
          {lengthPassword}
        </label>

        <ul className="generaror__options-list">
          {options.map(({ name, value }, index) => {
            return (
              <li key={index}>
                <div className="options-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedOptions[index]}
                      onChange={() => handleCheckbox(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="btn-copy" title="Copy">
        Копировать
      </button>
      <button
        className="btn-generate"
        title="Generate"
        onClick={() => generation(strOptions)}
      >
        Сгенерировать
      </button>
    </article>
  );
}

export default GenerarorPassword;
