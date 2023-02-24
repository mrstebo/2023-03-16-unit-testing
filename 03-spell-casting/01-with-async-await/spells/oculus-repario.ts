import { Spell } from "./spell";

export class OculusRepairo implements Spell {
  levelRequired = 1;
  utterance = "Oculus Repairo";

  cast(): Promise<void> {
    return Promise.resolve();
  }
}
