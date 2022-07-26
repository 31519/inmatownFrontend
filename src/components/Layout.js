import Banners from './Banners'

const Layout = ({ children }) => {
    return (
        <>
        {/* <Banners/> */}
        
        <div>
            <main>{children}</main>
        </div>
        </>
    )
}

export default Layout