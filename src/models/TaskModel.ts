import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final.
  interruptedDate: number | null; // quando a task for interrompida.
  type: keyof TaskStateModel["config"]; // workTime, shortBreakTime ou longBreakTime, usa a chave do config de TaskStateModel para definir o tipo da task.
};
