import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
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

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask.id && prevState.activeTask.id === task.id) {
            return { ...task, interruptedDate: Date.now() };
          }
          return task;
        }),
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
          disabled={!!state.activeTask}
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

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            icon={<PlayCircleIcon />}
            type="submit"
            title="Iniciar nova tarefa"
            aria-label="Iniciar nova tarefa"
            key="botao_submit"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            icon={<StopCircleIcon />}
            type="button"
            title="Interromper tarefa em andamento"
            aria-label="Interromper tarefa em andamento"
            color="red"
            onClick={handleInterruptTask}
            key="botao_interromper"
          />
        )}
      </div>
    </form>
  );
}

/*
O React pode confundir os elementos quando eles são renderizados em uma lista, e isso pode causar problemas de desempenho e bugs. Para evitar isso, o React recomenda que cada elemento em uma lista tenha uma chave única (key) que o identifique de forma única. A chave deve ser estável, ou seja, não deve mudar entre as renderizações, e deve ser única entre os irmãos. Se a chave não for fornecida ou não for única, o React pode usar o índice do elemento na lista como chave, mas isso pode levar a problemas de desempenho e bugs se a ordem dos elementos mudar ou se elementos forem adicionados ou removidos da lista. Portanto, é importante fornecer chaves únicas para os elementos em uma lista para garantir que o React possa identificar corretamente cada elemento e otimizar a renderização.
*/
