export interface Spell {
  utterance: string;
  levelRequired: number;

  cast(): Promise<void>;
}
