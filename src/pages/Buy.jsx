import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Buy.css";

import backgroundImage from "../assets/images/bg1.jpg";
import img1 from "../assets/images/bg1.jpg";
import img2 from "../assets/images/bg2.jpg";
import img3 from "../assets/images/bg3.png";
import img4 from "../assets/images/bg4.png";
import img5 from "../assets/images/bg5.png";
import img6 from "../assets/images/bg6.png";
import img7 from "../assets/images/bg7.png";
import img8 from "../assets/images/bg8.png";
import img9 from "../assets/images/bg9.jpg";
import img10 from "../assets/images/bg10.jpg";
import img11 from "../assets/images/bg11.jpg";
import img12 from "../assets/images/bg15.jpg";
import img13 from "../assets/images/bg13.jpg";

/*
  properties array: include both a human-friendly price string (price)
  and a numeric priceValue (used for filtering/sorting).
*/
const properties = [
  { id: 1, title: "Luxury Villa in Kathmandu", price: "Rs. 2,50,000", priceValue: 250000, image: img1, service: "Villa", added: "2 weeks ago", features: ["Swimming Pool", "Parking", "Balcony", "Terrace"] },
  { id: 2, title: "Modern Apartment in Pokhara", price: "Rs. 1,50,000", priceValue: 150000, image: img2, service: "Apartment", added: "1 week ago", features: ["Parking", "Balcony"] },
  { id: 3, title: "Cozy House in Bhaktapur", price: "Rs. 1,20,000", priceValue: 120000, image: img3, service: "House", added: "3 days ago", features: ["Terrace", "Balcony"] },
  { id: 4, title: "Duplex in Lalitpur", price: "Rs. 2,20,000", priceValue: 220000, image: img4, service: "Duplex", added: "5 days ago", features: ["Swimming Pool", "Parking", "Terrace"] },
  { id: 5, title: "Cottage in Nagarkot", price: "Rs. 90,000", priceValue: 90000, image: img5, service: "Cottage", added: "1 month ago", features: ["Parking", "Balcony"] },
  { id: 6, title: "Family Home in Chitwan", price: "Rs. 1,30,000", priceValue: 130000, image: img6, service: "House", added: "2 weeks ago", features: ["Terrace", "Parking"] },
  { id: 7, title: "Riverside Villa in Dharan", price: "Rs. 2,00,000", priceValue: 200000, image: img7, service: "Villa", added: "1 week ago", features: ["Swimming Pool", "Terrace", "Balcony"] },
  { id: 8, title: "Modern Condo in Butwal", price: "Rs. 1,40,000", priceValue: 140000, image: img8, service: "Condo", added: "4 days ago", features: ["Parking", "Balcony"] },
  { id: 9, title: "Apartment in Hetauda", price: "Rs. 1,10,000", priceValue: 110000, image: img9, service: "Apartment", added: "3 weeks ago", features: ["Balcony", "Terrace"] },
  { id: 10, title: "Villa in Biratnagar", price: "Rs. 1,80,000", priceValue: 180000, image: img10, service: "Villa", added: "6 days ago", features: ["Swimming Pool", "Parking"] },
  { id: 11, title: "House in Janakpur", price: "Rs. 1,00,000", priceValue: 100000, image: img11, service: "House", added: "1 week ago", features: ["Balcony", "Parking"] },
  { id: 12, title: "Luxury Flat in Bharatpur", price: "Rs. 1,60,000", priceValue: 160000, image: img12, service: "Flat", added: "2 weeks ago", features: ["Terrace", "Balcony"] },
  { id: 13, title: "Cozy Home in Nepalgunj", price: "Rs. 95,000", priceValue: 95000, image: img13, service: "House", added: "5 days ago", features: ["Parking", "Balcony"] }
];

function Buy() {
  const locationHook = useLocation();

  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("featured");
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 8;


  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const qLocation = params.get("location") || "";
    const qType = params.get("type") || "";
    const qPrice = params.get("price") || "";

    if (qLocation) setSearch(qLocation);
    if (qType) setServiceFilter(qType);

    if (qPrice) {
      if (qPrice === "low") {
        setMinPrice("0"); setMaxPrice("12000");
      } else if (qPrice === "mid") {
        setMinPrice("12001"); setMaxPrice("30000");
      } else if (qPrice === "high") {
        setMinPrice("30001"); setMaxPrice("10000000");
      }
    }
  }, [locationHook.search]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("buy_favourites");
      if (raw) setFavourites(JSON.parse(raw));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("buy_favourites", JSON.stringify(favourites));
    } catch (e) {}
  }, [favourites]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    let list = properties.slice();

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q)
      );
    }

    if (serviceFilter !== "all") {
      list = list.filter(
        (p) => p.service.toLowerCase() === serviceFilter.toLowerCase()
      );
    }

    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Number.POSITIVE_INFINITY;
    list = list.filter((p) => p.priceValue >= min && p.priceValue <= max);

    if (sort === "price-asc") list.sort((a, b) => a.priceValue - b.priceValue);
    else if (sort === "price-desc")
      list.sort((a, b) => b.priceValue - a.priceValue);

    return list;
  }, [search, serviceFilter, minPrice, maxPrice, sort]);

  const totalPages = Math.ceil(filtered.length / propertiesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, serviceFilter, minPrice, maxPrice, sort]);

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filtered.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      )
        pages.push(i);
      else if (i === currentPage - 2 || i === currentPage + 2) pages.push("...");
    }
    return pages.filter((p, idx, arr) => !(p === "..." && arr[idx - 1] === "..."));
  };

  return (
    <div className="buy-page">
      {/* hero */}
      <div
        className="rent-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="rent-hero-overlay">
          <div className="rent-hero-inner">
            <h1>Find Properties for Sale</h1>
            <p>Browse verified listings across Nepal. Filter by type, price and more.</p>
          </div>
        </div>
      </div>

      {/* filters */}
      <div className="filter-bar container" aria-label="Search and filters">
        <div className="filter-left">
          <input
            type="text"
            placeholder="Search (title, type, city...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search properties"
          />
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="select"
            aria-label="Property type"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Condo">Condo</option>
            <option value="Duplex">Duplex</option>
            <option value="Cottage">Cottage</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="filter-right">
          {/* Price filter dropdown */}
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === "all") {
                setMinPrice(""); setMaxPrice("");
              } else if (val === "low") {
                setMinPrice(""); setMaxPrice("100000");
              } else if (val === "mid") {
                setMinPrice("100000"); setMaxPrice("200000");
              } else if (val === "high") {
                setMinPrice("200000"); setMaxPrice("");
              }
            }}
            className="select small"
            aria-label="Price filter"
          >
            <option value="all">All Prices</option>
            <option value="low">Below Rs. 1,00,000</option>
            <option value="mid">Rs. 1,00,000 – 2,00,000</option>
            <option value="high">Above Rs. 2,00,000</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select small"
            aria-label="Sort properties"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* grid */}
      <div className="container">
        <div className="property-grid">
          {currentProperties.length === 0 ? (
            <div className="no-results">No properties found — try changing filters.</div>
          ) : (
            currentProperties.map((p) => (
              <article key={p.id} className="property-card">
                <div className="image-wrap">
                  <img src={p.image} alt={p.title} />
                  <span className="tag">For Sale</span>
                  <button
                    className={`fav-btn ${favourites.includes(p.id) ? "active" : ""}`}
                    onClick={() => toggleFavourite(p.id)}
                    title={favourites.includes(p.id) ? "Remove favourite" : "Add to favourites"}
                  >
                    {favourites.includes(p.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="property-info">
                  <h3 className="title">
                    <Link to={`/property/${p.id}`}>{p.title}</Link>
                  </h3>

                  <div className="price-meta">
                    <div className="price">{p.price}</div>
                    <div className="added small-muted">{p.added}</div>
                  </div>

                  <div className="meta-row">
                    <div className="service">{p.service}</div>
                  </div>

                  <ul className="features">
                    {p.features.map((f, i) => (<li key={i}>{f}</li>))}
                  </ul>

                  <div className="card-actions">
                    <Link to={`/property/${p.id}`} className="btn view">View Details</Link>
                    <button className="btn contact" onClick={() => alert("Contact agent — implement your contact flow")}>Contact</button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* pagination */}
        {totalPages > 1 && (
          <div className="pagination" role="navigation" aria-label="Pagination">
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              &lt;&lt; Prev
            </button>
            {renderPagination().map((num, idx) =>
              num === "..." ? (
                <span key={idx} className="dots">...</span>
              ) : (
                <button
                  key={num}
                  className={currentPage === num ? "active" : ""}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              )
            )}
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
              Next &gt;&gt;
            </button>
          </div>
        )}
      </div>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">🏠 Hamro-Ghar</h2>
            <h3>Do You Need Help With Anything?</h3>
            <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>LAYOUTS</h4>
              <ul>
                <li><a href="/">Home Page</a></li>
                <li><a href="/about">About Page</a></li>
                <li><a href="/Rent">Service Page</a></li>
                <li><a href="/Buy">Property Page</a></li>
                <li><a href="/Contact">Contact Page</a></li>
                <li><a href="/Blog">Blog Page</a></li>
              </ul>
            </div>

            <div>
              <h4>ALL SECTIONS</h4>
              <ul>
                <li>Headers</li>
                <li>Features</li>
                <li>Attractive</li>
                <li>Videos</li>
              </ul>
            </div>

            <div>
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/about">About Page</a></li>
                <li><a href="/Blog">Blog Page</a></li>
                <li>Pricing</li>
                <li><a href="/Login">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Buy;
