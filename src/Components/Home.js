import React from 'react'

import "../static/css/home.css";
import Product from './Product';


function Home() {


	return (
		<div className="home">
			<div className="home__container">
				
				<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

				<div className="home__productRow">
					<Product id="123" rating={4} title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls" price={26990.00} image={`https://images-na.ssl-images-amazon.com/images/I/71a5XAAbzbL._SX425_.jpg`}/>
					<Product id="124" rating={3} title="DR VAKU® Swadesi Pulse Oximeter Fingertip, Blood Oxygen Saturation Monitor Fingertip" price={2999.00} image={`https://images-na.ssl-images-amazon.com/images/I/71IyhJOrOTS._SX679_.jpg`}/>
					
	
				</div>
				<div className="home__productRow">
				<Product id="1209" rating={4} title="Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage) - Silver" price={110000.00} image={`https://images-na.ssl-images-amazon.com/images/I/81MkiDFq80L._SX679_.jpg`}/>
					<Product id="1210" rating={5} title="New Apple iPhone 12 Mini (64GB) - Purple" price={59999.99} image={`https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg`} />
					<Product id="1222" rating={4} title="New Apple 12.9-inch iPad Pro with Apple M1 chip (Wi-Fi, 128GB) - Space Grey (2021 Model, 5th Generation)" image="https://images-na.ssl-images-amazon.com/images/I/81%2BN4PFF7jS._SX522_.jpg" price={45000.00}/>
				</div>
				<div className="home__productRow">
					<Product id="2001" rating={3} title="
						LG 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) (2021 Model)" price={76999.00} image="https://images-na.ssl-images-amazon.com/images/I/71KVQa4N4zL._SX679_.jpg"/>
					<Product id="2002" rating={5} title="
						Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2019 Model)" price={89999.00} image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX425_.jpg"/>
					<Product id="2003" rating={3} title="
						Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model)" price={29999.00} image="https://images-na.ssl-images-amazon.com/images/I/91LzCxOO3fL._SX679_.jpg"/>
					
				</div>
			</div>
			
		</div>
	)
}

export default Home
