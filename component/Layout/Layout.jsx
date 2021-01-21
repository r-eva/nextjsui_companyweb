
const Layout = (props) => {
    return (
        <div>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;