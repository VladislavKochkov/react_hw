function NavBar() {
    const dragons = [
        { name: "Thanos", link: "https://en.wikipedia.org/wiki/Thanos" },
        { name: "Iron Man", link: "https://en.wikipedia.org/wiki/Iron_Man" },
        { name: "Spider-Man", link: "https://en.wikipedia.org/wiki/Spider-Man" },
        { name: "Captain America", link: "https://en.wikipedia.org/wiki/Captain_America" },
        { name: "Doctor Strange", link: "https://en.wikipedia.org/wiki/Doctor_Strange" },
        { name: "Ant-Man", link: "https://en.wikipedia.org/wiki/Ant-Man" },
        { name: "Venom", link: "https://en.wikipedia.org/wiki/Venom_(character)" },
    ];

    return (
        <nav>
            <ul>
                {dragons.map((dragon) => (
                    <li key={dragon.name}>
                        <a href={dragon.link} target="_blank" rel="noopener noreferrer">
                            {dragon.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;