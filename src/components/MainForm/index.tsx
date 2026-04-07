import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // ciclos

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) {
      return;
    }

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Por favor, digite o nome da tarefa.");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType], //conferir
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, //conferir
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //conferir -- `${String(Math.floor(secondsRemaining / 60)).padStart(2, "0")}:${String(secondsRemaining % 60).padStart(2, "0")}`,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Tarefa"
          id="meuInput"
          type="text"
          placeholder="Digite aqui"
          ref={taskNameInput} // util quando não é necessário validar os dados no momento da digitação, ou seja, quando a validação é feita somente no momento do envio do formulário, ou seja, no onSubmit.

          // util para controlar o vvalor do input em tempo real e para validar os dados enquanto o usuário digita, ou seja, no momento da digitação, ou seja, no onChange.
          //value={taskName}
          //onChange={(e) => {
          //  setTaskName(e.target.value);
          //}}
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
