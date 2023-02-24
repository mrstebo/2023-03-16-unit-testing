import { Spell } from "./spell";

export class OculusRepairo implements Spell {
  utterance = "Oculus Repairo";
  levelRequired = 1;

  cast(): Promise<void> {
    return Promise.resolve();
  }
}
