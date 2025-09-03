"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../../components/Shared/context/CartContext";
import MainLayout from "../../components/Shared/UI/MainLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { toteProducts } from "./toteProducts";

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  type: string;
  description: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  description: string;
  qty: number;
};

export default function ShopPage() {
  const { cart, addToCart, removeFromCart, changeQty, clearCart } = useCart();
  const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * (item.qty || 1), 0);
  const [expanded, setExpanded] = useState<{ product: Product; index: number } | null>(null);

  // Helper to convert Product to CartItem
  function toCartItem(product: Product): CartItem {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "",
      type: product.type,
      description: product.description,
      qty: 1,
    };
  }

  return (
    <MainLayout>
      <main
        style={{
          minHeight: "80vh",
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "4rem 1.5rem 2rem 1.5rem",
          background: "transparent",
        }}
      >
        <h1
          style={{
            fontSize: "2.3rem",
            fontWeight: 600,
            color: "#1a3d2c",
            marginBottom: 24,
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          Shop
        </h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <p
            style={{
              maxWidth: 600,
              fontSize: "1.15rem",
              color: "#444",
              textAlign: "center",
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Shop for art prints and eco-friendly tote bags.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 48,
              alignItems: "start",
              width: "100%",
              marginTop: 8,
            }}
          >
            {toteProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 28,
                  minWidth: 220,
                  boxShadow: "0 2px 12px #bbb8a9",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div style={{ width: 160, marginBottom: 12 }}>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    emulateTouch
                    swipeable
                    dynamicHeight={false}
                    autoPlay={false}
                  >
                    {product.images.map((img, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: 140,
                          height: 140,
                          borderRadius: 12,
                          background: "#fafafa",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          cursor: "pointer",
                        }}
                        onClick={() => setExpanded({ product, index: idx })}
                      >
                        <Image
                          src={img}
                          alt={product.name}
                          width={140}
                          height={140}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            borderRadius: 12,
                            background: "#fafafa",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div style={{ fontWeight: 400, fontSize: 18, color: "#222", marginBottom: 4 }}>{product.name}</div>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>{product.description}</div>
                <div style={{ color: "#222", fontWeight: 600, fontSize: 18, marginBottom: 12 }}>€{product.price}</div>
                <button
                  style={{
                    background: "#e0e0db",
                    color: "#222",
                    border: "none",
                    borderRadius: 24,
                    padding: "0.5rem 1.5rem",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px #bbb8a9",
                    marginTop: "auto",
                    transition: "background 0.2s",
                  }}
                  onClick={() => addToCart(toCartItem(product))}
                >
                  Add to Basket
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Modal with Carousel */}

{expanded && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
    onClick={() => setExpanded(null)}
  >
    <div
      style={{
        position: "relative",
        maxWidth: "90vw",
        maxHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Left arrow */}
      <button
        onClick={e => {
          e.stopPropagation();
          setExpanded(exp => exp
            ? {
                product: exp.product,
                index: (exp.index - 1 + exp.product.images.length) % exp.product.images.length
              }
            : exp
          );
        }}
        style={{
          position: "absolute",
          left: -50,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Previous image"
      >
        &#8592;
      </button>
      {/* Image */}
      <Image
        src={expanded.product.images[expanded.index]}
        alt={expanded.product.name}
        width={800}
        height={800}
        style={{
          borderRadius: 16,
          objectFit: "contain",
          background: "#fafafa",
          maxWidth: "90vw",
          maxHeight: "80vh",
          display: "block",
        }}
      />
      {/* Right arrow */}
      <button
        onClick={e => {
          e.stopPropagation();
          setExpanded(exp => exp
            ? {
                product: exp.product,
                index: (exp.index + 1) % exp.product.images.length
              }
            : exp
          );
        }}
        style={{
          position: "absolute",
          right: -50,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
        aria-label="Next image"
      >
        &#8594;
      </button>
      {/* Close button */}
      <button
        onClick={() => setExpanded(null)}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 22,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Close image"
      >
        &times;
      </button>
    </div>
  </div>
)}
    

        {/* Basket */}
        <section
          style={{
            marginTop: 48,
            background: "#fff",
            borderRadius: 24,
            boxShadow: "0 2px 12px #bbb8a9",
            padding: "2rem 1.5rem",
            maxWidth: 420,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "#222", fontWeight: 700, fontSize: 22, marginBottom: 16, textAlign: "center" }}>Shopping Basket</h2>
          {cart.length === 0 ? (
            <div style={{ color: "#888", fontSize: 16, textAlign: "center" }}>Your basket is empty.</div>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
                {cart.map((item: CartItem) => (
                  <li key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <Image src={item.image} alt={item.name} width={40} height={40} style={{ borderRadius: 8 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500 }}>{item.name}</div>
                      <div style={{ color: "#888", fontSize: 13 }}>€{item.price} x </div>
                    </div>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => changeQty(item.id, parseInt(e.target.value) || 1)}
                      style={{
                        width: 40,
                        borderRadius: 8,
                        border: "1px solid #eee",
                        padding: "2px 6px",
                        textAlign: "center",
                      }}
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: "#e0e0db",
                        color: "#222",
                        border: "none",
                        borderRadius: 8,
                        padding: "4px 10px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{ fontWeight: 600, fontSize: 18, marginTop: 16, color: "#222", textAlign: "center" }}>
                Total: €{total}
              </div>
              <button
                onClick={clearCart}
                style={{
                  marginTop: 16,
                  background: "#f8f8f5",
                  color: "#111",
                  border: "none",
                  borderRadius: 16,
                  padding: "0.5rem 1.5rem",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                Clear Basket
              </button>
              <hr style={{ margin: "24px 0", border: 0, borderTop: "1px solid #eee" }} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your order! (Demo only)");
                  clearCart();
                }}
                style={{ width: "100%" }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  required
                  style={{
                    width: "100%",
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    border: "1px solid #eee",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  style={{
                    width: "100%",
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    border: "1px solid #eee",
                  }}
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  style={{
                    width: "100%",
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    border: "1px solid #eee",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#e0e0db",
                    color: "#222",
                    border: "none",
                    borderRadius: 16,
                    padding: "0.75rem",
                    fontWeight: 700,
                    fontSize: 18,
                    marginTop: 8,
                    cursor: "pointer",
                  }}
                >
                  Checkout
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </MainLayout>
  );
}