// Define a type RowID and set it equal to number
type RowID = number;

// Define an interface RowElement
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number; // optional property
}

export { RowID, RowElement };
