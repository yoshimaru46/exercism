export class DnDCharacter {
  public hitpoints: number;
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    // create an array of 4 random number between 1 and 6
    const diceResults: number[] = [];
    for (let i = 0; i < 4; i++) {
      diceResults.push(this.randomNum());
    }
    // sort the elements and remove the first
    diceResults.sort().splice(0, 1);
    // return the sum of the three greater elements in the arr
    return diceResults.reduce((prev, cur) => prev + cur);
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
  // to create a random number an use it anywhere
  public static randomNum(): number {
    return Math.ceil(Math.random() * 6) + 1;
  }
}
