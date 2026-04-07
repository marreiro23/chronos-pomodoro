import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // necessario em historico, mainform
  secondsRemaining: number; // necessario para o Home, countdown, historico, mainform, button
  formattedSecondsRemaining: string; // necessario para o countdown, titulo
  activeTask: TaskModel | null; // necessario para o countdown, historico, mainform, button
  currentCycle: number; // home
  config: {
    workTime: number; // Mainform
    shortBreakTime: number; // Mainform
    longBreakTime: number; // Mainform
  };
};
