import "../Main/Main.scss";
import data from "../../helper/data";
import Card from "./Card";

function Main() {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        // <Card item={item}/>
        <Card {...item} key={index} />
        // return (
        //   <>
        //     <h1>{item.title}</h1>
        //     <img src={item.image} alt="" />
        //     <p>{item.desc}</p>
        //   </>
        // );
      ))}
    </div>
  );
}

export default Main;
