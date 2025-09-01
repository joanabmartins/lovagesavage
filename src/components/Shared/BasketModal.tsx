"use client";
import { useCart } from "./context/CartContext";
import Image from "next/image";

type CartItem = { id: number; name: string; price: number; image: string; qty?: number };
export default function BasketModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const { cart, removeFromCart, changeQty, clearCart } = useCart();
	const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * (item.qty || 1), 0);
	if (!open) return null;
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			background: 'rgba(0,0,0,0.25)',
			zIndex: 1000,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}} onClick={onClose}>
			<div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0002', padding: '2rem 1.5rem', minWidth: 340, maxWidth: 420, width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
				<button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#ff6e7f', cursor: 'pointer', fontWeight: 700 }}>&times;</button>
				<h2 style={{ color: '#ff6e7f', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Shopping Basket</h2>
				{cart.length === 0 ? (
					<div style={{ color: '#888', fontSize: 16 }}>Your basket is empty.</div>
				) : (
					<>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
							{cart.map((item: CartItem) => (
								<li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 500 }}>{item.name}</div>
										<div style={{ color: '#888', fontSize: 13 }}>&euro;{item.price} x </div>
									</div>
									<input
										type="number"
										min={1}
										value={item.qty}
										onChange={e => changeQty(item.id, parseInt(e.target.value) || 1)}
										style={{ width: 40, borderRadius: 8, border: '1px solid #eee', padding: '2px 6px', textAlign: 'center' }}
									/>
									<button
										onClick={() => removeFromCart(item.id)}
										style={{ background: '#ff6e7f', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
									>
										&times;
									</button>
								</li>
							))}
						</ul>
						<div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#f96e46' }}>Total: &euro;{total}</div>
						<button
							onClick={clearCart}
							style={{ marginTop: 16, background: '#e0c3fc', color: '#fff', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
						>
							Clear Basket
						</button>
						<hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
						<form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); onClose(); }}>
							<input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #f9d423 0%, #ff6e7f 100%)', color: '#fff', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
"use client";
import { useCart } from "./context/CartContext";
import Image from "next/image";

type CartItem = { id: number; name: string; price: number; image: string; qty?: number };
export default function BasketModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const { cart, removeFromCart, changeQty, clearCart } = useCart();
	const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * (item.qty || 1), 0);
	if (!open) return null;
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			background: 'rgba(0,0,0,0.25)',
			zIndex: 1000,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}} onClick={onClose}>
			<div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0002', padding: '2rem 1.5rem', minWidth: 340, maxWidth: 420, width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
				<button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#ff6e7f', cursor: 'pointer', fontWeight: 700 }}>&times;</button>
				<h2 style={{ color: '#ff6e7f', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Shopping Basket</h2>
				{cart.length === 0 ? (
					<div style={{ color: '#888', fontSize: 16 }}>Your basket is empty.</div>
				) : (
					<>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
							{cart.map((item: CartItem) => (
								<li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 500 }}>{item.name}</div>
										<div style={{ color: '#888', fontSize: 13 }}>&euro;{item.price} x </div>
									</div>
									<input
										type="number"
										min={1}
										value={item.qty}
										onChange={e => changeQty(item.id, parseInt(e.target.value) || 1)}
										style={{ width: 40, borderRadius: 8, border: '1px solid #eee', padding: '2px 6px', textAlign: 'center' }}
									/>
									<button
										onClick={() => removeFromCart(item.id)}
										style={{ background: '#ff6e7f', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
									>
										&times;
									</button>
								</li>
							))}
						</ul>
						<div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#f96e46' }}>Total: &euro;{total}</div>
						<button
							onClick={clearCart}
							style={{ marginTop: 16, background: '#e0c3fc', color: '#fff', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
						>
							Clear Basket
						</button>
						<hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
						<form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); onClose(); }}>
							<input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #f9d423 0%, #ff6e7f 100%)', color: '#fff', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
"use client";
import { useCart } from "./context/CartContext";
import Image from "next/image";

type CartItem = { id: number; name: string; price: number; image: string; qty?: number };
export default function BasketModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const { cart, removeFromCart, changeQty, clearCart } = useCart();
	const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * (item.qty || 1), 0);
	if (!open) return null;
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			background: 'rgba(0,0,0,0.25)',
			zIndex: 1000,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}} onClick={onClose}>
			<div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0002', padding: '2rem 1.5rem', minWidth: 340, maxWidth: 420, width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
				<button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#ff6e7f', cursor: 'pointer', fontWeight: 700 }}>&times;</button>
				<h2 style={{ color: '#ff6e7f', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Shopping Basket</h2>
				{cart.length === 0 ? (
					<div style={{ color: '#888', fontSize: 16 }}>Your basket is empty.</div>
				) : (
					<>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									{cart.map((item: CartItem) => (
										<li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 500 }}>{item.name}</div>
										<div style={{ color: '#888', fontSize: 13 }}>&euro;{item.price} x </div>
									</div>
									<input
										type="number"
										min={1}
										value={item.qty}
										onChange={e => changeQty(item.id, parseInt(e.target.value) || 1)}
										style={{ width: 40, borderRadius: 8, border: '1px solid #eee', padding: '2px 6px', textAlign: 'center' }}
									/>
									<button
										onClick={() => removeFromCart(item.id)}
										style={{ background: '#ff6e7f', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
									>
										&times;
									</button>
								</li>
							))}
						</ul>
						<div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#f96e46' }}>Total: &euro;{total}</div>
						<button
							onClick={clearCart}
							style={{ marginTop: 16, background: '#e0c3fc', color: '#fff', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
						>
							Clear Basket
						</button>
						<hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
						<form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); onClose(); }}>
							<input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #f9d423 0%, #ff6e7f 100%)', color: '#fff', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
"use client";
import { useCart } from "./context/CartContext";
import Image from "next/image";

type CartItem = { id: number; name: string; price: number; image: string; qty?: number };
export default function BasketModal({ open, onClose }: { open: boolean; onClose: () => void }) {
	const { cart, removeFromCart, changeQty, clearCart } = useCart();
	const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * (item.qty || 1), 0);
	if (!open) return null;
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			background: 'rgba(0,0,0,0.25)',
			zIndex: 1000,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}} onClick={onClose}>
			<div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0002', padding: '2rem 1.5rem', minWidth: 340, maxWidth: 420, width: '100%', position: 'relative' }} onClick={e => e.stopPropagation()}>
				<button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#ff6e7f', cursor: 'pointer', fontWeight: 700 }}>&times;</button>
				<h2 style={{ color: '#ff6e7f', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Shopping Basket</h2>
				{cart.length === 0 ? (
					<div style={{ color: '#888', fontSize: 16 }}>Your basket is empty.</div>
				) : (
					<>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
									{cart.map((item: CartItem) => (
										<li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
									<Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
									<div style={{ flex: 1 }}>
										<div style={{ fontWeight: 500 }}>{item.name}</div>
										<div style={{ color: '#888', fontSize: 13 }}>&euro;{item.price} x </div>
									</div>
									<input
										type="number"
										min={1}
										value={item.qty}
										onChange={e => changeQty(item.id, parseInt(e.target.value) || 1)}
										style={{ width: 40, borderRadius: 8, border: '1px solid #eee', padding: '2px 6px', textAlign: 'center' }}
									/>
									<button
										onClick={() => removeFromCart(item.id)}
										style={{ background: '#ff6e7f', color: '#fff', border: 'none', borderRadius: 8, padding: '4px 10px', cursor: 'pointer', fontWeight: 600 }}
									>
										&times;
									</button>
								</li>
							))}
						</ul>
						<div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: '#f96e46' }}>Total: &euro;{total}</div>
						<button
							onClick={clearCart}
							style={{ marginTop: 16, background: '#e0c3fc', color: '#fff', border: 'none', borderRadius: 16, padding: '0.5rem 1.5rem', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
						>
							Clear Basket
						</button>
						<hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
						<form onSubmit={e => { e.preventDefault(); alert('Thank you for your order! (Demo only)'); clearCart(); onClose(); }}>
							<input type="text" placeholder="Name" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="email" placeholder="Email" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<input type="text" placeholder="Address" required style={{ width: '100%', marginBottom: 8, padding: 8, borderRadius: 8, border: '1px solid #eee' }} />
							<button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #f9d423 0%, #ff6e7f 100%)', color: '#fff', border: 'none', borderRadius: 16, padding: '0.75rem', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Checkout</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}
