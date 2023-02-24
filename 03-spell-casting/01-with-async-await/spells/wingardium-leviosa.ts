import { Spell } from "./spell";

export class WingardiumLeviosa implements Spell {
  utterance = "Wingardium Leviosa";
  levelRequired = 2;

  cast(): Promise<void> {
    return Promise.resolve();
  }
}
