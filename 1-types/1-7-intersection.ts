{
  /**
   * Intersection Type : &  둘다 갖는 것
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'piggy',
    score: 1,
    employeeId: 123,
    work: () => {console.log('hi')},
  })

}