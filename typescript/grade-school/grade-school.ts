type Roster = {
  [grade: number]: string[];
};

export class GradeSchool {
  private db: Roster;
  constructor() {
    this.db = {};
  }
  // roster: 名簿
  roster(): Roster {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name: string, grade: number): void {
    this.deDupe(name);
    const existRecord = this.db[grade];
    if (existRecord !== undefined) {
      this.db[grade] = [...existRecord, name].sort((a, b) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
        return 0;
      });
    } else {
      this.db[grade] = [name];
    }
  }

  deDupe(name: string): void {
    for (let grade in this.db) {
      let names = this.db[grade];
      if (names.indexOf(name) !== -1) {
        names.splice(names.indexOf(name), 1);
        break;
      }
    }
  }

  grade(grade: number): string[] {
    const existRecord = this.db[grade];
    if (existRecord) {
      return [...this.db[grade]];
    } else {
      return [];
    }
  }
}
