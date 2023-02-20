import './App.css';
import { CardTable } from './components/CardTable';
import { HeaderMenu } from './components/HeaderBody/HeaderMenu';
import { TestComponent } from './components/TestComponent';

const testData = {
  name: "Laundry Dragonmaid",
  ID: "1234",
  Type: "Monster",
  Attack: 500,
  Defense: 1600,
  imageURL: "LaundryDragonmaid.avif",
}

const laundryDragonmaidTest = {
  "data":[
    {
       "id":13171876,
       "name":"Laundry Dragonmaid",
       "type":"Effect Monster",
       "frameType":"effect",
       "desc":"If this card is Normal or Special Summoned: You can send the top 3 cards of your Deck to the GY. At the start of the Battle Phase: You can return this card to the hand, and if you do, Special Summon 1 Level 7 \"Dragonmaid\" monster from your hand or GY. You can only use each effect of \"Laundry Dragonmaid\" once per turn.",
       "atk":500,
       "def":1600,
       "level":2,
       "race":"Dragon",
       "attribute":"WATER",
       "archetype":"Dragonmaid",
       "card_sets":[
          {
             "set_name":"Maximum Gold",
             "set_code":"MAGO-EN021",
             "set_rarity":"Premium Gold Rare",
             "set_rarity_code":"(PG)",
             "set_price":"2.8"
          },
          {
             "set_name":"Mystic Fighters",
             "set_code":"MYFI-EN016",
             "set_rarity":"Super Rare",
             "set_rarity_code":"(SR)",
             "set_price":"2.55"
          }
       ],
       "card_images":[
          {
             "id":13171876,
             "image_url":"https://images.ygoprodeck.com/images/cards/13171876.jpg",
             "image_url_small":"https://images.ygoprodeck.com/images/cards_small/13171876.jpg",
             "image_url_cropped":"https://images.ygoprodeck.com/images/cards_cropped/13171876.jpg"
          }
       ],
       "card_prices":[
          {
             "cardmarket_price":"0.69",
             "tcgplayer_price":"1.14",
             "ebay_price":"2.25",
             "amazon_price":"3.59",
             "coolstuffinc_price":"1.49"
          }
       ],
       "misc_info":[
          {
             "beta_name":"Dragonmaid Laudry",
             "views":197106,
             "viewsweek":323,
             "upvotes":11,
             "downvotes":1,
             "formats":[
                "TCG",
                "OCG"
             ],
             "beta_id":100423016,
             "tcg_date":"2019-11-21",
             "ocg_date":"2019-08-03",
             "konami_id":14759,
             "has_effect":1
          }
       ]
    }
 ]

}

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      {<TestComponent cardData={laundryDragonmaidTest}/>}
      <CardTable />
      {/*<CardDetailGrid cardData={laundryDragonmaidTest}/>*/}
    </div>
  );
}

export default App;
