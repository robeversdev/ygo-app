import {Table, TableRow} from '@workday/canvas-kit-react/table';
import { PrimaryButton, SecondaryButton } from '@workday/canvas-kit-react';
import {
    filterIcon,
  } from '@workday/canvas-system-icons-web';
import { useState } from 'react';

const columns = ['ID', 'Name', 'Position', 'Location'];

const rows = [
  [1, 'Aidan Brown', 'Product Manager', 'San Francisco, CA'],
  [2, 'Betty Chen', 'Product Designer', 'San Francisco, CA'],
  [3, 'Helen Gonzalez', 'Application Developer', 'Portland, OR'],
  [4, 'Timothy May', 'VP, Product Development', 'San Francisco, CA'],
  [5, 'John Hours', 'Product Manager', 'New York, New York'],
];

const testCardColumns = ['ID', 'Name', 'Type', 'Rarity', 'Availability', 'Actions'];

const testCardRows = [
  [13171876, 'Laundry Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
  [13171878, 'Parlor Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
  [13171879, 'Kitchen Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
  [13171880, 'Nurse Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
  [13171881, 'House Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
  [13171882, 'Chamber Dragonmaid', 'Effect Monster', 'Rare', 'Unlimited', 'View Card'],
];

// const [availableNums, setAvailableNums] = useState([1,2,3]);

export const CardTable = () => {
  const [cardRows, setCardRows] = useState(testCardRows);
  const finalColumnIndex = (testCardColumns.length - 1);

  const SortBySelectedColumn = (columnIndex : number) => {
    var arrayToSort = [...cardRows]; // shallow copy. If rows have nested objects, rememeber to deal with this.
    var sortedArray: any[][] = arrayToSort.sort((n1,n2) => {
        if (n1[columnIndex] > n2[columnIndex]) {
            return 1;
        }
    
        if (n1[columnIndex] < n2[columnIndex]) {
            return -1;
        }
    
        return 0;
    });
    setCardRows(sortedArray);
}

  return (
    <Table>
      <thead>
        <TableRow header={true}>
          {testCardColumns.map((col, i) => (
            <th key={i}>{col}{<PrimaryButton onClick={() => SortBySelectedColumn(i)} icon={filterIcon} variant="inverse" backgroundColor={"transparent"} />}</th>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {cardRows.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => {
              if(j == finalColumnIndex) {
                return (<td key={j}>{<SecondaryButton>cell</SecondaryButton>}</td>)
              }
              else return (
                <td key={j}>{cell}</td>
              )
              }
            )}
          </TableRow>
        ))}
      </tbody>
    </Table>

    
  );
};