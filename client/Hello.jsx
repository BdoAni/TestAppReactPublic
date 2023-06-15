import image from '../image.jpg';
export default function Hello(props) {


return(
    <div>
        <h1>Let's connect!</h1>
        <p>{props.data}</p>
        <h2>{props.new}</h2>
        <img src={image} alt="logo"/>
    </div>
)
};