"use client";

import BasketIcon from "../../app/BasketIcon";
import Image from "next/image";
import { useState } from "react";


export default function Navbar({ onBasketClick }: { onBasketClick: () => void }) {
	return (
		<nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem', borderBottom: '1px solid #eee', marginBottom: '2rem', position: 'relative' }}>
			<div style={{ display: 'flex', gap: '2rem', flex: 1, alignItems: 'center' }}>
				   <a href="/" style={{ display: 'flex', alignItems: 'center', height: 40 }} aria-label="Home22">
					   <Image src={require('../../../public/logo.png')} alt="Logo" width={40} height={40} style={{ objectFit: 'contain', height: 40, width: 40 }} priority />
				   </a>
				<a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
				<a href="/work" style={{ textDecoration: 'none', color: 'inherit' }}>Work</a>
				<a href="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>Shop</a>
			</div>
			<div style={{ marginLeft: 'auto' }}>
				<BasketIcon onClick={onBasketClick} />
			</div>
		</nav>
	);
}
