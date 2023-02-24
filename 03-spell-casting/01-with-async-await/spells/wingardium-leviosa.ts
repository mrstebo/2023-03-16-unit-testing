import { Spell } from "./spell";

export class WingardiumLeviosa implements Spell {
  levelRequired = 2;
  utterance = "Wingardium Leviosa";

  cast(): Promise<void> {
    return Promise.resolve();
  }
}
