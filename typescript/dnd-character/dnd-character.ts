export class DnDCharacter {
  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * 15) + 3;
  }

  public static getModifierFor(abilityValue: number): number {
    throw new Error("Remove this statement and implement this function");
  }
}
