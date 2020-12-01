export interface Job {
  title: string;
  salary: number;
  created: firebase.default.firestore.FieldValue;
  updated?: firebase.default.firestore.FieldValue;
}
