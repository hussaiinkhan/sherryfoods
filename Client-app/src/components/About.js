import React from 'react';

const About = () => {
  return (
    <div className="w-full py-20  h-full flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-6">
      <div className="max-w-5xl mt-20 text-center">
        <h1 className="text-5xl font-bold mb-6">About SherryFoods</h1>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            SherryFoods began with a simple mission: to bring delicious, high-quality food to our community. Founded in 2010, we have grown from a small local eatery to a beloved food service known for our dedication to taste and quality.
          </p>
          <p className="text-lg mb-4">
            Our founder, Sherry Thompson, started this journey with a passion for cooking and a dream to share her culinary creations with the world. From humble beginnings, SherryFoods has expanded its menu and reach, but our commitment to excellence remains unchanged.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At SherryFoods, our mission is to provide our customers with the best dining experience possible. We believe that good food brings people together and creates lasting memories. We strive to serve meals that are not only delicious but also made with the finest ingredients.
          </p>
          <p className="text-lg mb-4">
            We are committed to sustainability and source our ingredients locally whenever possible. By supporting local farmers and producers, we ensure that our food is fresh, healthy, and environmentally friendly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <p className="text-lg mb-4">
            Integrity, quality, and community are at the heart of everything we do at SherryFoods. We believe in:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>Delivering high-quality food made with care and attention to detail.</li>
            <li>Maintaining transparency with our customers about our sourcing and cooking processes.</li>
            <li>Fostering a sense of community by supporting local businesses and engaging with our customers.</li>
            <li>Embracing sustainability and making environmentally conscious decisions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg mb-4">
            Our team at SherryFoods is a family of dedicated professionals who share a passion for food and hospitality. From our talented chefs to our friendly service staff, everyone at SherryFoods works together to create an unforgettable dining experience for our customers.
          </p>
          <p className="text-lg mb-4">
            Sherry Thompson, our founder, continues to be the driving force behind our culinary vision. Her creativity and commitment to quality inspire us every day.
          </p>
          <p className="text-lg mb-4">
            Our chefs bring a wealth of experience and a touch of innovation to our menu, constantly experimenting with new flavors and techniques to delight our customers. Our service team is dedicated to providing a warm, welcoming atmosphere where everyone feels at home.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
          <p className="text-lg mb-4">
            We invite you to join us on our culinary journey. Whether you're a longtime customer or a first-time visitor, we look forward to serving you. Come taste the difference at SherryFoods and see why our community loves dining with us.
          </p>
          <p className="text-lg mb-4">
            Follow us on social media to stay updated on our latest offerings, special events, and more. Thank you for being a part of the SherryFoods family!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
