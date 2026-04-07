import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("DEU CERTO", taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Tarefa"
          id="meuInput"
          type="text"
          placeholder="Digite aqui"
          value={taskName}
          onChange={(e) => {
            return setTaskName(e.target.value);
          }}
        />
      </div>

      <div className="formRow">
        <p>Proximo intervalo é de 25 minutos</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} onClick={() => {}} />
      </div>
    </form>
  );
}
