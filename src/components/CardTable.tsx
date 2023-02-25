import {Table, TableRow} from '@workday/canvas-kit-react/table';
import { PrimaryButton } from '@workday/canvas-kit-react';
import {
    filterIcon,
  } from '@workday/canvas-system-icons-web';
import { useState } from 'react';
import { ViewCardModal } from './ViewCardModal';
import { TestData } from '../Utils/TestData';

const testCardColumns = ['ID', 'Name', 'Type', 'Rarity', 'Availability', 'Actions'];



// const [availableNums, setAvailableNums] = useState([1,2,3]);

const BuildRowsOfCardData = (ImportedCardData : any) => {
  let cardRowsToDisplay: any[][] = [];

  TestData.data.map((card, i) => {
    let cardRowToAdd = [card.id, card.name, card.type, card.card_sets[0].set_rarity, 'Unlimited', 'View Card'];
    cardRowsToDisplay = [...cardRowsToDisplay, cardRowToAdd];
  });

  return cardRowsToDisplay;
}

export const CardTable = () => {
  const [cardRows, setCardRows] = useState(BuildRowsOfCardData(TestData));
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

  const GetCardById = (cardId : number) => {
    return TestData.data.find(i => i.id === cardId);
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
        {cardRows.map((row, i) => {
          let cardId = row[0];
          return (
          <TableRow key={i}>
            {row.map((cell, j) => {
              if(j === finalColumnIndex) {
                return (<td key={j}>{<ViewCardModal cardData={GetCardById(cardId)}/>}</td>)
              }
              else return (
                <td key={j}>{cell}</td>
              )
              }
            )}
          </TableRow>
        )
        })}
      </tbody>
    </Table>

    
  );
};