// first; asserting (inner data) class type
interface classGroup {
  class: string;
  teacher: string;
  students: string[];
}

// second; let's tell ts the possiblities of our json files
type sectionData = classGroup | {};

// third; overall/top level class type
interface fetchJsonData {
  primarySection: classGroup[];
  juniorSection: sectionData[];
  secondarySection: sectionData[];
}
