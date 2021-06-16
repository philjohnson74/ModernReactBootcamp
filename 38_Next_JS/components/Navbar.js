import Link from "next/link";

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
    <div style={styles}>
        <Link href="/">
            <a>Home Page</a>
        </Link>
        <Link href="/about">
            <button>About Page button</button>
        </Link>
        <Link href="/about">
            <span>About Page span</span>
        </Link>
        <Link href="/contact">
            <a>Contact Page</a>
        </Link>
    </div>
    );
}

export default Navbar;