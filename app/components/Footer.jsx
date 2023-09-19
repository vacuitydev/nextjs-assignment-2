import Image from "next/image";
import { BRAND_TITLE } from "../globals";
// import BRAND_SVG from "brand.svg"
function Footer() {
    return <footer className="footer relative p-10 mt-auto bg-base-200 text-base-content">
      <aside>
        <Image
          width="50"
          height="50"
          viewBox="0 0 24 24"
          src={"/brand.svg"}
          alt=""
          style={{
            filter: "invert(91%) sepia(32%) saturate(269%) hue-rotate(13deg) brightness(103%) contrast(90%)",
          }} />
        <p>
          <span className="fancy text-3xl">{BRAND_TITLE}</span>
          <br />
          Providing reliable baking
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a href="/about" className="link link-hover">Branding</a>
        <a href="/about" className="link link-hover">Design</a>
        <a href="/about" className="link link-hover">Marketing</a>
        <a href="/about" className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a href="/about" className="link link-hover">About us</a>
        <a href="/about" className="link link-hover">Contact</a>
        <a href="/about" className="link link-hover">Jobs</a>
        <a href="/about" className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>;
  }
  export default Footer