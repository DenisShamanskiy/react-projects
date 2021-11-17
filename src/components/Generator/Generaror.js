import { useState, useEffect } from "react";
import "./Generaror.css";
import styles from "./Generaror.module.css";

function GenerarorPassword() {
  const options = [
    {
      name: "Нижний регистр",
      value: "abcdefghijklmnopqrstuvwxyz",
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
  /* Проверка опций / Активация кнопки генерации */
  const [disable, setdisable] = useState(true);
  /* Уникальные значения */
  const [unique, setuUnique] = useState(false);

  const [message, setMessage] = useState("");

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
  /* Обрабочик уникальных символов */
  function handleUnique() {
    setuUnique(!unique);
  }

  /*function generation(string) {
    let passwordGeneration = "";
    let uni = true;
    console.log(uni);
    for (var i = 0; i < lengthPassword; ++i) {
      passwordGeneration += string.charAt(
        Math.floor(Math.random() * string.length)
      );
    }
    setPassword(passwordGeneration);
  }

  function randoNumbers(string) {
    const randomNumbers = [];
    for (let counter = 0; counter < lengthPassword; counter++) {
      let num;
      do {
        num = string.charAt(Math.floor(Math.random() * string.length));
      } while (randomNumbers.includes(num));
      randomNumbers.push(num);
    }
    setPassword(randomNumbers.join(""));
  }*/

  /* Функция генерации пароля */
  const generation = (string) => (unique ? test2(string) : test(string));

  function test(string) {
    let passwordGeneration = [];
    for (var i = 0; i < lengthPassword; ++i) {
      passwordGeneration += string.charAt(
        Math.floor(Math.random() * string.length)
      );
    }
    setPassword(passwordGeneration);
  }

  function test2(string) {
    let passwordGeneration = [];
    for (
      let counter = 0;
      counter <
      (lengthPassword < string.length ? lengthPassword : string.length);
      counter++
    ) {
      let item;
      do {
        item = string.charAt(Math.floor(Math.random() * string.length));
      } while (passwordGeneration.includes(item));
      passwordGeneration.push(item);
      console.log(passwordGeneration);
    }
    setPassword(passwordGeneration.join(""));
    msg(string);
  }

  /*for (var i = 0; i < lengthPassword; ++i) {
      if (!unique) {
        inputLenght.max = string.length;
        passwordGeneration += string.charAt(
          Math.floor(Math.random() * string.length)
        );
        setPassword(passwordGeneration);
      } else {
        let item;
        do {
          item = string.charAt(Math.floor(Math.random() * string.length));
        } while (passwordGeneration.includes(item));
        passwordGeneration.push(item);
        setPassword(passwordGeneration.join(""));
      }
    }*/

  /* Функция копирования пароля в буфер обмена */
  function copyPassword(password) {
    navigator.clipboard.writeText(password);
  }

  function msg(string) {
    lengthPassword > string.length
      ? setMessage(`Сделать длиннее ${string.length} символов не получится`)
      : setMessage("");
  }

  useEffect(() => {
    setdisable(checkedOptions.every((option) => option === false));
    setMessage("");
  }, [checkedOptions, lengthPassword]);

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Генератор паролей</h1>
      <p className={styles.password} id="password">
        {password}{" "}
      </p>
      <span className={styles.message}>{message}</span>

      <button
        className={styles.button_copy}
        title="Copy"
        disabled={!password}
        onClick={() => copyPassword(password)}
      >
        Копировать
      </button>

      <div className={styles.slider}>
        <input
          type="range"
          id="length"
          name="length"
          min="1"
          max="50"
          value={lengthPassword}
          onChange={handleLengthPassword}
        ></input>
        <label className={styles.input_label} htmlFor="length">
          Длина пароля&nbsp;
          <span className={styles.input_label_span}>{lengthPassword}</span>
        </label>
      </div>

      <div className={styles.input_unique}>
        <input
          type="checkbox"
          id="unique"
          name="unique"
          value={unique}
          onChange={handleUnique}
        ></input>
        <label className={styles.input_unique_label} htmlFor="unique"></label>
      </div>

      <ul className={styles.options_list}>
        {options.map(({ name, value }, index) => {
          return (
            <li key={index}>
              <div className={styles.options_list_item}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedOptions[index]}
                  onChange={() => handleCheckbox(index)}
                />
                <label
                  className={styles.checkbox_label}
                  htmlFor={`custom-checkbox-${index}`}
                >
                  {name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        className={styles.button_create}
        title="Generate"
        disabled={disable}
        onClick={() => generation(strOptions)}
      >
        Создать
      </button>
    </article>
  );
}

export default GenerarorPassword;
