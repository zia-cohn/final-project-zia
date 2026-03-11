function Header ({title,subtitle}) {
    return (
        <div>
            <h1 className="text-4xl border">{title}</h1>
            <h3 className ="text-xl ">{subtitle}</h3>
        </div>
    )
};

export default Header;