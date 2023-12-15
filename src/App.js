import perfection_salad from './images/perfection_salad.jpg';
import './App.css';
import parse from 'html-react-parser';//lehetővé teszi HTML tartalmak átalakítását és renderelését React komponensekké
//npm html-react-parser

function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2"
    },
    {
      name: "cup sugar",
      quantity: "1/2"
    },
    {
      name: "teaspoon salt",
      quantity: "1"
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1"
    },
    {
      name: " cup lemon juice",
      quantity: "1/2"
    },
    {
      name: "tablespoons vinegar",
      quantity: "2"
    },
    {
      name: "cup shredded carrot",
      quantity: "1"
    },
    {
      name: "cup sliced celery",
      quantity: "1"
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1"
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2"
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1"
    }
  ]
  console.log(ingredients);

  const preparationSteps = [
    { step: 'In small saucepan, combine <strong> gelatine, sugar</strong> , and <b>salt</b>; mix well.' },
    { step: 'Add 1 cup <b>water</b>. Heat over low heat, stirring constantly, until <b>sugar</b> and <b>gelatine</b> are dissolved. Remove from heat.' },
    { step: 'Stir in <b>apple juice, lemon juice, vinegar</b>, and 1/4 cup cold <b>water</b>. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white.' },
    { step: 'Add <b>carrot, celery, cabbage, green pepper, and pimiento</b>; stir until well combined.' },
    { step: 'Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm.' },
    { step: 'To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. Refrigerate until ready to serve.' }
  ];

  document.title = "Perfection Salad";//The name of the browser tab is the recipe name.


  return (
    <div className="container">
      <h1>Perfection Salad</h1>
      <img src={perfection_salad} alt="food" />
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((item, index) =>
          //<li key={'ingredient_'.concat(index + 1)}>
          <li className="item" key={index + 1}>
            <em>{item.quantity}</em> {item.name}
          </li>)}
      </ul>
      <h2>Preparation:</h2>
      <ol>
        {preparationSteps.map((item, index) =>
          <li key={index + 1}>
            <p className="item">{parse(item.step)}</p> {/* a <b></b> tag-eket alkalmazza a HTML-bol */}
          </li>
        )}
      </ol>
    </div>
  );
}
export default App;
