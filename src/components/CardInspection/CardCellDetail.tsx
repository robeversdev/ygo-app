import { StyledCardInfoHeading } from "../CustomStyles/StyledCardInfoHeading";
import ImageIconHelper from "../../Utils/ImageIconHelper";
import { CardDetailEnum } from "../../Utils/Enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faShieldAlt, faBoltLightning, faFlask, faCalendar } from "@fortawesome/free-solid-svg-icons";

const cellDivider = {
    width: "100%",
  }

  const cellDetail = {
    textAlign: "right" as const,
    display: "table-cell",
    "paddingRight": "10px"
  }



export const CardCellDetail = (detailProps: any) => {

    const GetImage = () => {


        switch (detailProps.id)
        {
            case CardDetailEnum.ATTRIBUTE: {
                return (
                    <img alt="" style={{ "display": "table-cell" }} src={'/attributes/' + ImageIconHelper.getAttibuteImage(detailProps.attribute)}></img>
                );
            }
            case CardDetailEnum.TYPING: {
                return (
                    <img alt="" style={{ "display": "table-cell" }} src={'/types/' + ImageIconHelper.getTypingImage(detailProps.typing)}></img>
                );
            }
            case CardDetailEnum.TYPE: {
                return (
                    <FontAwesomeIcon icon={faBook} />
                );
            }
            case CardDetailEnum.LEVEL: {
                return (
                    <img alt="" style={{"display": "table-cell"}} src={process.env.PUBLIC_URL + '/level.png'}></img>
                );
            }
            case CardDetailEnum.ATK: {
                return (
                    <FontAwesomeIcon icon={faBoltLightning} />
                );
            }
            case CardDetailEnum.DEF: {
                return ( 
                    <FontAwesomeIcon icon={faShieldAlt} />
                );
            }
            case CardDetailEnum.ARCHETYPE: {
                return ( 
                    <FontAwesomeIcon icon={faFlask} />
                );
            }
            case CardDetailEnum.TCGDATE: {
                return ( 
                    <FontAwesomeIcon icon={faCalendar} />
                );
            }
            case CardDetailEnum.OCGDATE: {
                return ( 
                    <FontAwesomeIcon icon={faCalendar} />
                );
            }
            default: {
                console.log("Image type not recognised for ID: " + detailProps.id);
                return (
                     (<div></div>)
                );
            }
        }
        
    }

    return (
    <div style={{"width" : "100%"}}>
        <StyledCardInfoHeading>{detailProps.detailHeading}</StyledCardInfoHeading>
        <hr style={cellDivider} />
        <div style={{ "display": "table" }}>
          <div style={{ "display": "table-row", "textAlign":"right"}}>
          <div style={{"display": "table-cell", "width": "78%"}}></div>
            <div style={cellDetail}><div style={{whiteSpace: "nowrap", width: "111px"}}>{detailProps.value}</div></div>
            {GetImage()}
          </div>
        </div>
    </div>
    );
}