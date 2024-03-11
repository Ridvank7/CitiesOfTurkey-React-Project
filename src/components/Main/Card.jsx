// const Card = (city) => {
// const Card = (degisken) => {
const Card = ({ title, desc, image }) => {
  //   console.log(city.item);
  //   console.log(degiskem);
  console.log(title);
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
      {/* <h1>Card</h1> */}
    </div>
  );
};
export default Card;
