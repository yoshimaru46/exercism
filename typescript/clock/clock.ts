const DAY: number = 24 * 60;
const HOUR = 60;

export class Clock {
  minutes: number;

  constructor(hour: number, minute: number = 0) {
    this.minutes = (((hour * HOUR + minute) % DAY) + DAY) % DAY;
  }

  private getHour(): number {
    return Math.floor(this.minutes / HOUR);
  }

  private getMinute(): number {
    return this.minutes % HOUR;
  }

  public toString(): string {
    return `${this.getHour().toString().padStart(2, "0")}:${this.getMinute()
      .toString()
      .padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }
  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }
}
