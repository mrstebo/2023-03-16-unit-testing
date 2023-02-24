export interface Spell {
  levelRequired: number;
  utterance: string;

  cast(): Promise<void>;
}
