
"use client";
import BasketIcon from "../../../app/BasketIcon";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

type NavbarProps = {
	onBasketClick: () => void;
	color?: string;
};

export default function Navbar({ onBasketClick, color = '#222' }: NavbarProps) {
	return (
		<nav style={{ display: 'flex', alignItems: 'center', padding: '1rem', marginBottom: '2rem', position: 'relative', color }}>
			{/* Logo left */}
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Link href="/" style={{ display: 'flex', alignItems: 'center', height: 56 }} aria-label="Home22">
					<Image 
						src="/logo.png" 
						alt="Logo" 
						width={56} 
						height={56} 
						className={styles.logo}
						priority 
					/>
				</Link>
			</div>
			{/* Links right */}
			<div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginLeft: 'auto' }}>
				<a href="/about" style={{ textDecoration: 'none', color }}>About</a>
				<a href="/work" style={{ textDecoration: 'none', color }}>Work</a>
				<a href="/shop" style={{ textDecoration: 'none', color }}>Shop</a>
				<BasketIcon onClick={onBasketClick} />
			</div>
		</nav>
	);
}
