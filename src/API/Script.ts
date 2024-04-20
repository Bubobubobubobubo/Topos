import { tryEvaluate } from "../Evaluator";
import { blinkScript } from "../DOM/Visuals/Blinkers";
import { template_universes } from "../Editor/FileManagement";
import { Editor } from "../main";

export const script = (app: Editor) => (...args: number[]): void => {
  args.forEach((arg) => {
    if (arg >= 1 && arg <= 9) {
      blinkScript(app, "local", arg);
      tryEvaluate(
        app,
        app.universes[app.selected_universe]!.locals[arg]!,
      );
    }
  });
};

export const s = script;

export const delete_script = (app: Editor) => (script: number): void => {
  app.universes[app.selected_universe]!.locals[script] = {
    candidate: "",
    committed: "",
    evaluations: 0,
  };
};

export const copy_script = (app: Editor) => (from: number, to: number): void => {
  //@ts-ignore
  app.universes[app.selected_universe].locals[to] = {
    ...app.universes[app.selected_universe]!.locals[from],
  };
};

export const copy_universe = (app: Editor) => (from: string, to: string): void => {
  //@ts-ignore
  app.universes[to] = { ...app.universes[from], };
};

export const delete_universe = (app: Editor) => (universe: string): void => {
  if (app.selected_universe === universe) {
    app.selected_universe = "Default";
  }
  delete app.universes[universe];
  app.settings.saveApplicationToLocalStorage(
    app.universes,
    app.settings,
  );
  app.updateKnownUniversesView();
};

export const big_bang = (app: Editor) => (): void => {
  if (confirm("Are you sure you want to delete all universes?")) {
    app.universes = {
      ...template_universes, // Assuming template_universes is defined elsewhere
    };
    app.settings.saveApplicationToLocalStorage(
      app.universes,
      app.settings,
    );
  }
  app.selected_universe = "Default";
  app.updateKnownUniversesView();
};
