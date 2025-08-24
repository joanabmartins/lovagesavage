import { useCart } from "../components/Shared/context/CartContext";

type CartItem = { qty?: number };

export default function BasketIcon({ onClick }: { onClick: () => void }) {
  const { cart } = useCart();
  const count = cart.reduce((sum: number, item: CartItem) => sum + (item.qty || 1), 0);
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        position: 'relative',
        cursor: 'pointer',
        marginLeft: 16,
        padding: 0,
      }}
      aria-label="View basket"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e5631"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        style={{ display: 'block' }}
      >
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="19" cy="21" r="1.5" />
        <path d="M5 6h2l1.68 9.39a2 2 0 0 0 2 1.61h6.72a2 2 0 0 0 2-1.61L21 8H7" />
      </svg>
      {count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            background: '#ff6e7f',
            color: '#fff',
            borderRadius: '50%',
            fontSize: 13,
            fontWeight: 700,
            padding: '2px 7px',
            minWidth: 22,
            textAlign: 'center',
            boxShadow: '0 2px 8px #ff6e7f33',
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}
