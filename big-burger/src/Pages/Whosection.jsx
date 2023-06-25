import Navbar from '../Components/Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Whosection.css';

const Whosection = () => {
  return (
    <div className='who-main-container'>
      <Navbar />
      <img
    className='who-section-cover'
    src='https://post.healthline.com/wp-content/uploads/2020/01/Burgers_Overhead_1200x628-facebook.jpg'
    alt='who-burger-img'
    width={'100%'}
    height={'100%'}
    opacity={'90%'}
  />
  <div className="who-we-are">
      <h1 className='who-title'>Who we are</h1>
      <h1 className='who-text'>
        <p className='first-who'>We believe in the power of simplicity.</p>
       <p className='second-who'>Our burgers are made with quality ingredients, prepared with passion and expertise.</p>
       <p className='third-who'>We strive to capture the essence of the Big lifestyle.</p> 
       <p className='fourth-who'>Join us one delicious burger at a time.</p></h1>
    </div>
    <div className='yellow-who-container'>
     <h1 className='ingredients-heading'>Our Ingredients</h1>
     <h1 className='ingredients-text'><p>From the simplest burgers to the most authentic ones, such as the "Cheese and Bacon Burger"
      and the "Grilled Chicken Burger," to the more elaborate and cosmopolitan burgers like our specialties,
     all are crafted with authentic and flavorful ingredients.</p>
    <p> Our menu has evolved to meet the increasing demands of your taste buds.</p>
    <p> Nowadays, our recipes are creative, innovative, and exclusive, making each meal a stimulating experience.</p>
    <p>It's a fusion of flavors, culinary cultures, and recipes that triumph worldwide, all with a burger-themed twist.</p>
    <p>At Big Burger, we have everything for you to enjoy a complete, healthy, and balanced meal,
     prepared fresh to order with basic ingredients inspired by the burger world. Our ingredients are always fresh and natural, 
     just like the Mediterranean diet.</p></h1>
     <div className='yellow-picture'>
  <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
    <div>
      <img src='https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?b=1&s=612x612&w=0&k=20&c=_JT2iitrsfuPYOmYHO336VFWeximXvauz6tRG4-7OVI=' alt='Slider Image 1' />
    </div>
    <div>
      <img src='https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?b=1&s=612x612&w=0&k=20&c=qD01FkeyMFSpGVvle2OXoQNYJlbgsDPk2L5_GeHe8RU=' alt='Slider Image 2' />
    </div>
    <div>
      <img src='https://cdn.pixabay.com/photo/2023/04/25/23/13/hamburger-7951202_1280.jpg' alt='Slider Image 3' />
    </div>
  
  </Carousel>
</div>
    </div>
    <div className='values'>
        <div className='values-container'>
          <h1 className='values-title'>Our Values</h1>
          <div className='values-text'>
          <p>At Big Burger, we are committed to delivering the highest quality burgers to our customers.</p>
          <p> We believe in using fresh and locally sourced ingredients to create delicious and nutritious meals.</p>
          <p>We value customer satisfaction and strive to provide exceptional service in a welcoming and friendly environment.</p> 
          <p>Our team is dedicated to ensuring that every customer has a memorable dining experience.</p>
          <p>Furthermore, we are passionate about supporting our community and giving back.</p>
          <p> We actively participate in various charitable initiatives and collaborate with local organizations to make a positive impact.</p>
          </div>
        </div>
        <div className='values-image'>
          <img src="https://media.istockphoto.com/id/1333944291/photo/happy-chef-preparing-burgers-at-a-fast-food-restaurant.jpg?s=612x612&w=0&k=20&c=zHTLFO6TEZTAoYmxULx6LBFAnE8bcHG3881mEFrZe9A=" alt="man-image" />
        </div>
      </div>
    
    </div>
    
  )
}

export default Whosection