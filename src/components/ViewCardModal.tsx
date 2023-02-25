import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import { CardDisplayGrid } from './CardInspection/CardDisplayGrid';



export const ViewCardModal = (props: any) => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
    console.log('' + props.CardProps.name + '')
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  

  return (
    <Modal>
      <Modal.Target as={SecondaryButton}>View Card</Modal.Target>
      <Modal.OverflowOverlay>
        <Modal.Card style={{"width": "100%"}}>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>View Card</Modal.Heading>
          <Modal.Body>
            <div>
              <CardDisplayGrid cardData={props.cardData}/>
            </div>
          </Modal.Body>
          <HStack spacing="s" padding="xxs" marginTop="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </HStack>
        </Modal.Card>
      </Modal.OverflowOverlay>
    </Modal>
  );
};

/*
            <Box as="p" marginY="zero">
              This is a Card.
            </Box>
            <img src={process.env.PUBLIC_URL + '/' + props.CardProps.imageURL}/>
*/